import '../css/CarInfoWrapper.css'
import CarInfo from "./CarInfo";

const CarInfoWrapper = ({carModel}) => {
    return (
        <section className="car-info-wrapper">
            <h2>Your Car</h2>
            <CarInfo carModel={carModel}/>
        </section>
    )
}

export default CarInfoWrapper