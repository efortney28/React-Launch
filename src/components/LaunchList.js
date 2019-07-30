import React, { useState, useEffect } from 'react'

import SingleLaunch from './SingleLaunch'

const LaunchList = () => {
    const [launches, setLaunches] = useState([])

    async function fetchData(url) {
        const res = await fetch(url)
        res.json().then(res => setLaunches(res))
        console.log(launches)
    }

    useEffect(() => {
        fetchData('https://api.spacexdata.com/v3/launches/upcoming')
    })

    return (
        <div>
            <h1>Launch List</h1>
            {launches.map((launch, ind) => (
                <SingleLaunch key={ind} launch= {launch} />
            ))}
        </div>
    );
}
export default LaunchList