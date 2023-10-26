import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewTourPack = () => {
    const [packData, setPackData] = useState(
        []
    )

    const [isLoading, setIsLoading] = useState(true)

    const apiLink = "http://localhost:3001/viewt"

    const getData = () => {
        axios.get(apiLink).then(
            (Response) => {
                setPackData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => { getData() }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <h1>View Tour Package</h1>
                        </div>

                        {isLoading ? <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div> : <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>

                            {packData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex align-items-stretch">
                                        <div className="card mb-3">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={value.packImg} className="img-fluid rounded-start" alt="..." />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{value.packTitle}</h5>
                                                        <p className="card-text">{value.packDescription}</p>
                                                        <p className="card-text">Duration: {value.packDuration}</p>
                                                        <p className="card-text">Rate: {value.packRate}</p>
                                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }
                            )}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTourPack