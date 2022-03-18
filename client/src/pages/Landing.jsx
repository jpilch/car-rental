import React from 'react'

export default function Landing() {
    return (
        <>
            <div className="hero">
                <div className="content">
                    <div className="service-info">
                        <h1>Why choose Us?</h1>
                        <p>We offer wide range of cars suited for your needs.</p>
                        <p>All available just few clicks away from you</p>
                        <button className="btn"><a href="#instruction">Read More</a></button>
                    </div>
                </div>
            </div>

            <div className="instruction" id='instruction'>
                <div className="content">
                    <h1 className="section-heading">How to do it?</h1>
                    <div className="row-1 row">
                        <div className="tile tile-1">
                            <h1>1. Register</h1>
                            <hr/>
                            <h4>Create an account and fill in the required personal information. Don't worry, we make
                                sure it's
                                safe.
                            </h4>

                        </div>
                        <div className="tile tile-2">
                            <h1>2. Choose a car</h1>
                            <hr/>
                            <h4>Make a choice that suits your needs. Choose the pickup as well as return date and
                                location. Make sure to
                                read our terms and conditions.
                            </h4>
                        </div>
                    </div>
                    <div className="row-2 row">
                        <div className="tile tile-3">
                            <h1>3. Enjoy!</h1>
                            <hr/>
                            <h4>Feel free to use the car as much as you want, as long as you take care of it. No limits
                                or hidden
                                fees.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
