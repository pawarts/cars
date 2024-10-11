"use client"

import s from "./style/Selector.module.css"

import { useEffect, useState } from "react"

const Selector = (props) => {

    const { type, name, action, intial_option } = props

    const [optionValue, setOptionValue] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const selectValueSetter = () => {
            switch (type) {
                case "choose_make":
                    const TakeMake = async () => {
                        const request = await fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
                        const car = await request.json()

                        setOptionValue(car.Results)
                        setLoading(true)
                        return car
                    }

                    TakeMake()
                    return 0
                case "model_year":
                    setLoading(true)
                    setOptionValue([2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024])
                    return 0
                default: return "URL undefined"
            }
        }

        selectValueSetter()
    }, [])

    const options = () => {
        switch (type) {
            case "choose_make":
                const make = optionValue.length > 0 ? optionValue.map(({ MakeId, MakeName }, index) => (
                    <option value={MakeId} key={index}>{MakeName}</option>
                )) : null;
                return make
            case "model_year":
                const year = optionValue.map((year, index) => (
                    <option value={year} key={index}>{year}</option>
                ))
                return year
            default: return 0
        }
    }

    return loading ? (
        <select name={name} id="" className={s.select}
            onInput={(event) => action(type, event.target.value)}>
                <option value="">{intial_option}</option>
            {options()}
        </select>
    ) : <p>Loading</p>
}

export default Selector