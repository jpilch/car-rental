import React from 'react'
import '../css/CarListing.css'

function CarListing() {
    return (
        <main id="car-list">
            <h1>Check out our amazing offer</h1>
            <div className="sort-by">
                <label htmlFor="sort">Sort by: </label>
                <select name="sort" id="sort">
                    <option value="price-desc">price descending</option>
                    <option value="price-asc">price ascending</option>
                    <option value="popularity">popularity</option>
                </select>
            </div>
            <section className='cars'>
                <aside className='filters'>
                    <p>filters</p>
                </aside>
                <div>
                    <p>cars</p>
                </div>
            </section>
        </main>
    )
}

export default CarListing