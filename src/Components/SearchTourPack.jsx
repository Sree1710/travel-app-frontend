import axios from 'axios'
import React, { useState } from 'react'

const SearchTourPack = () => {
    const [inputField,setInputField]=useState(
        {packID:""}
    )

    const [outputField,setOutputField]=useState(
        [{packID:"",packTitle:"",packDescription:"",packImg:"",packDuration:"",packRate:""}]
    )

    const apiLink="http://localhost:3001/searcht"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
        (Response)=>{
            setOutputField(Response.data[0])
            console.log(Response.data[0])
            setInputField({packID:""})
        }

        )

    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>Search Tour Package</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Package ID</label>
                                <input onChange={inputHandler} type="text" className="form-control" name="packID" value={inputField.packID} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button onClick={readValue} className="btn btn-warning">Search</button>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Title</label>
                                <input type="text" className="form-control" name="packTitle" value={outputField.packTitle}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <input type="text" className="form-control" name="packDescription" value={outputField.packDescription} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Image Link</label>
                                <input type="text" className="form-control" name="packImg" value={outputField.packImg} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Duration</label>
                                <input type="text" className="form-control" name="packDuration" value={outputField.packDuration}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Rate</label>
                                <input type="text" className="form-control" name="packRate" value={outputField.packRate} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <button className="btn btn-warning">Update</button>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <button className="btn btn-danger">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTourPack