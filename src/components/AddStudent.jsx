import axios from 'axios';
import React, { useState } from 'react'
import NavExam from './NavExam';

const AddStudent = () => {
    const [reg,setInput] = new useState({
        studentName: "",
        regNo: "",
        courseName: "",
        collegeName: "",
    });
    const inputHandler=(event)=>{
        setInput({...reg,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        axios.post("http://localhost:3001/api/exam/add",reg).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("data uploaded")
                    setInput(
                        {
                            studentName: "",
                            regNo: "",
                            courseName: "",
                            collegeName: "",
                        }
                    )
                } else {
                    alert("failed")
                }
            }
        )
    }
  return (
    <div>
        <NavExam/>
         <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="card">
  
                        <div class="card-body">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Student Name</label>
                                    <input type="text" className="form-control" name="studentName" value={reg.studentName} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Registration No</label>
                                    <input type="text" className="form-control" name="regNo" value={reg.regNo} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Course name</label>
                                    <input type="text" className="form-control" name="courseName" value={reg.courseName} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">college name</label>
                                    <input type="text" className="form-control" name="collegeName" value={reg.collegeName} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValues}>ADD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddStudent