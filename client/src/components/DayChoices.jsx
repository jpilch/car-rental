import '../css/DayChoices.css'
import {useSelector, useDispatch} from "react-redux";
import Loading from "./Loading";
import {chooseDays, choosePrice} from "../reducers/offerSlice";

const DayChoices = () => {
    const {days} = useSelector(state => state.offerReducer)
    const dispatch = useDispatch()

    if (!days) {
        return <Loading />
    }

    return (
        <div className="choices">
            <h2>How Long</h2>
            <div className="info">
                <p>
                    Choose for how many days you want to rent out this car.
                    Check the price for each period in the summary section down below.
                </p>
            </div>
            <div className="days">
                <div className={'choice'.concat(days === 3 ? ' chosen' : '')}
                     onClick={() => {
                         dispatch(chooseDays(3))
                         dispatch(choosePrice(3))
                     }}
                >
                    <p>3</p>
                </div>
                <div className={'choice'.concat(days === 5 ? ' chosen' : '')}
                     onClick={() => {
                         dispatch(chooseDays(5))
                         dispatch(choosePrice(5))
                     }}
                >
                    <p>5</p>
                </div>
                <div className={'choice'.concat(days === 9 ? ' chosen' : '')}
                     onClick={() => {
                         dispatch(chooseDays(9))
                         dispatch(choosePrice(9))
                     }}
                >
                    <p>9</p>
                </div>
            </div>
        </div>
    )
}

export default DayChoices