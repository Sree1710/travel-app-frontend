import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddTourPack = () => {
    const [inputField,setInputField]=useState(
        {packID:"",packTitle:"",packDescription:"",packImg:"",packDuration:"",packRate:""}
    )

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }

    const apiLink="http://localhost:3001/addt"

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Package Added Successfully")
                    setInputField({packID:"",packTitle:"",packDescription:"",packImg:"",packDuration:"",packRate:""})
                } else {
                    alert("Something Went Wrong!!!")
                }
            }
        )
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>Add Tour Package</h1>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Package ID</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packID" value={inputField.packID} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Title</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packTitle" value={inputField.packTitle} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea onChange={inputHandler} name="packDescription" id="" cols="30" rows="10" className="form-control" value={inputField.packDescription}></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Image Link</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packImg" value={inputField.packImg} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packDuration" value={inputField.packDuration} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                            <label htmlFor="" className="form-label">Rate</label>
                            <input onChange={inputHandler} type="text" className="form-control" name="packRate" value={inputField.packRate} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddTourPack