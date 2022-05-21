import '../css/DayChoices.css'

const DayChoices = ({ days, setDays }) => {

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
                     onClick={() => {setDays(3)}}
                >
                    <p>3</p>
                </div>
                <div className={'choice'.concat(days === 5 ? ' chosen' : '')}
                     onClick={() => {setDays(5)}}
                >
                    <p>5</p>
                </div>
                <div className={'choice'.concat(days === 9 ? ' chosen' : '')}
                     onClick={() => {setDays(9)}}
                >
                    <p>9</p>
                </div>
            </div>
        </div>
    )
}

export default DayChoices