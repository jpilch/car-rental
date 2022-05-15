const morgan = require('morgan')

const morganLogger = morgan('combined')

const errorHandler = (err, req, res, next) => {
    if (err.name === 'CastError') {
        return res.status(400).send({
            err: 'Malformed id'
        })
    } else if (err.name === 'ValidationError') {
        return res.status(400).send({
            err: err.message
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
    errorHandler,
    unknownEndpoint
}