"use client"

import { useState, useEffect } from "react"



const Car = ({ params }) => {

    const [car, setCars] = useState([])

    const { make_id, year } = params

    useEffect(() => {

        const request = async () => {
            const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${make_id}/modelyear/${year}?format=json`)
            const car = await response.json()

            
            setCars(car.Results)

            return car
        }

        request()
    }, [])
    const render = car.length > 0 ? car.map(({ Make_Name, Model_Name }, index) => (
        <p key={index}>{Make_Name}, {Model_Name}</p>
    )) : null

    return (
        <div>
            {render ? render : <p>Empty list</p>}
        </div>
    )
}

export default Car