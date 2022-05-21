import '../css/WhatIsIncluded.css'
import OfferBenefit from "./OfferBenefit";
import React from "react";

const WhatIsIncluded = () => {
    return (
        <section className="what-is-included">
            <h2>Great choice!</h2>
            <div className="benefits">
                <ul>
                    <OfferBenefit text={'No additional fees'}/>
                    <OfferBenefit text={'Free to cancel anytime'}/>
                </ul>
                <ul>
                    <OfferBenefit text={'Short to no queues'}/>
                    <OfferBenefit text={'Dedicated parking space'}/>
                </ul>
                <ul>
                    <OfferBenefit text={'Hundreds of satisfied customers'}/>
                    <OfferBenefit text={'Low prices and high quality service'}/>
                </ul>
            </div>
        </section>
    )
}

export default WhatIsIncluded