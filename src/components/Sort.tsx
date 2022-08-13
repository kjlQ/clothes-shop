import React, {useEffect, useState} from 'react'
import Select from "react-select";
import {useDispatch} from "react-redux";

const options = [
    { value: 'price', label: 'Price' },
]

const Sort = () => {
    const [selectedOption, setSelectedOption] = useState({value:'',label:''});
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch({type:'changeSortBy',payload:selectedOption.value})
    },[selectedOption])
    console.log(selectedOption.value)
    return (
        <div className="sort">
            {/*@ts-ignore*/}
            <Select onChange={setSelectedOption} className="sort__select" classNamePrefix='sort__by' options={options} />
        </div>
    )
}
export default Sort