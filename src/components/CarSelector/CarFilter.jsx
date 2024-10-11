"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import InputTitle from "../BaseComponents/Titles/InputTitle"
import Selector from "./components/Selector/Selector"

import s from "./style/CarFilter.module.css"

const CarFilter = (props) => {

    const [make, setMake] = useState("")
    const [year, setYear] = useState("")
    const router = useRouter()

    const sendRequest = () => {
        console.log({make, year})
        router.push(`result/${make}/${year}`)
    }

    const inputSetter = (type, value) => {
        switch (type) {
            case "choose_make":
                setMake(value)
                return 0
            case "model_year":
                setYear(value)
                return 0
            default:
                console.error("undefined type")
                return 0
        }
    }

    return (
        <div className={s.wrapper}>
            <div>
                <InputTitle title="ChooseModel" />
                <Selector type="choose_make" action={inputSetter} intial_option="choose make" />
            </div>

            <div className="mt-10">
                <InputTitle title="ChooseModel" />
                <Selector type="model_year" action={inputSetter} intial_option="choose model year" />
            </div>


            <button className={`mt-10 bg-blue ${s.submit_button}`} type="submit" disabled={make === "" || year === ""}
                onClick={sendRequest}>Search auto</button>
        </div>
    )
}

export default CarFilter