const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const { SECRET, EXPRESS_APP_ADMIN_USERNAME } = require('../utils/config')

const morganLogger = morgan('combined')

const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7)
    } else {
        req.token = null
    }
    next()
}

const userExtractor = (req, res, next) => {
    if (req.token) {
        try {
            req.user = jwt.verify(req.token, SECRET)
        } catch (e) {
            next(e)
            return
        }
    } else {
        req.user = null
    }
    next()
}

const loginRequired = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({
            err: 'Login required'
        })
    }
    next()
}

const adminOnly = (req, res, next) => {
    const { username } = req.user
    if (!username || username !== EXPRESS_APP_ADMIN_USERNAME) {
        return res.status(401).send({
            err: 'Admin status required'
        })
    }
    next()
}

const paginated = (req, res, next) => {
    const { page, limit } = req.query
    if (!page || !limit) {
        return res.status(400).send({
            err: 'Query params \'page\' and \'limit\' required'
        })
    } else {
        req.page = page
        req.limit = limit
    }
    next()
}

const carModelSort = (req, res, next) => {
    const {
        sortDefault,
        sortPriceAsc,
        sortPriceDesc,
    } = req.query
    if (!sortDefault && !sortPriceAsc && !sortPriceDesc) {
        return res.status(400).send({
            err: 'Provide sort query param'
        })
    }
    req.sortDefault = sortDefault
    req.sortPriceAsc = sortPriceAsc
    req.sortPriceDesc = sortPriceDesc
    next()
}

const errorHandler = (err, req, res, next) => {
    if (err.name === 'CastError') {
        return res.status(400).send({
            err: 'Malformed id'
        })
    } else if (err.name === 'ValidationError') {
        return res.status(400).send({
            err: err.message
        })
    } else if (err.name === 'JsonWebTokenError') {
        return res.status(401).send({
            err: 'JWT malformed'
        })
    } else if (err.name === 'TokenExpiredError') {
        return res.status(401).send({
            err: 'JWT expired'
        })
    }
    next(err)
}

const unknownEndpoint = (req, res) => {
    res.status(400).send({
        err: 'Unknown endpoint'
    })
}

module.exports = {
    morganLogger,
    tokenExtractor,
    userExtractor,
    loginRequired,
    adminOnly,
    paginated,
    carModelSort,
    errorHandler,
    unknownEndpoint
}
