import '../css/PaymentInfo.css'
import Heading from '../components/Heading.jsx'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'


const PaymentInfo = () => {
    const navigate = useNavigate()
    const [params, setParams] = useSearchParams()
    const [success, setSuccess] = useState(params.get('success'))
    const [canceled, setCanceled] = useState(params.get('canceled'))
    const [counter, setCounter] = useState(5)
    
    useEffect(() => {
        if (!counter) {
            navigate('/')
        } 
        const interval = setInterval(() => {
            setCounter(counter - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [counter])

    return (
        <main id="payment-info">
            <div className="payment-info-container">
                <Heading 
                    text={success ? 'Payment Successful' : (canceled ? 'Payment Canceled' : 'Unknown')}
                    underline={true}
                />
                <p>Redirecting in {counter}s ...</p>

            </div>
        </main>
    )
}

export default PaymentInfo