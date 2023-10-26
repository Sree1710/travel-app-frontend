import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SearchTourPack = () => {
    const [inputField,setInputField]=useState(
        {packID:""}
    )

    const [updateField,setUpdateField]=useState(
        {packTitle:"",packDescription:"",packImg:"",packDuration:"",packRate:""}
    )

    const apiLink="http://localhost:3001/searcht"
    const apiLink2="http://localhost:3001/updatet"
    const apiLink3="http://localhost:3001/deletet"

    const inputHandler=(event)=>{
        setInputField({...inputField,[event.target.name]:event.target.value})
    }
    
    const updateHandler=(event)=>{
        setUpdateField({...updateField,[event.target.name]:event.target.value})
    }

    const readNewValue=()=>{
        console.log(updateField)
        axios.post(apiLink2,updateField).then(
            (Response)=>{
                if (Response.data.status=="success") {
                    alert("Package Updated Successfully")
                    setUpdateField({packTitle:"",packDescription:"",packImg:"",packDuration:"",packRate:""})
                } else {
                    alert("Something Went Wrong!!!")
                }

            }
        )
    }

    const deleteValue=()=>{
     console.log(updateField)
     axios.post(apiLink3,updateField).then(
        (Response)=>{
            if (Response.data.status=="success") {
                alert("Package Deleted Successfully")
                setUpdateField({packTitle:"",packDescription:"",packImg:"",packDuration:"",packRate:""})
            } else {
                alert("Something Went Wrong!!!")
            }
        }
     )
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post(apiLink,inputField).then(
        (Response)=>{
            setUpdateField(Response.data[0])
            console.log(Response.data[0])
            setInputField({packID:""})
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
                                <input onChange={updateHandler} type="text" className="form-control" name="packTitle" value={updateField.packTitle}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Description</label>
                                <input onChange={updateHandler} type="text" className="form-control" name="packDescription" value={updateField.packDescription} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Image Link</label>
                                <input onChange={updateHandler} type="text" className="form-control" name="packImg" value={updateField.packImg} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Duration</label>
                                <input onChange={updateHandler} type="text" className="form-control" name="packDuration" value={updateField.packDuration}  />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Rate</label>
                                <input onChange={updateHandler} type="text" className="form-control" name="packRate" value={updateField.packRate} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <button onClick={readNewValue} className="btn btn-warning">Update</button>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                <button onClick={deleteValue} className="btn btn-danger">Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTourPack