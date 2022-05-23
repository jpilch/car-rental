import '../css/CarInfoWrapper.css'
import CarInfo from "./CarInfo";

const CarInfoWrapper = () => {
    return (
        <section className="car-info-wrapper">
            <h2>Your Car</h2>
            <CarInfo />
        </section>
    )
}

export default CarInfoWrapper