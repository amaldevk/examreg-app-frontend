import React, { useEffect, useState } from 'react'
import NavExam from './NavExam'
import axios from 'axios'

const SearchStudent = () => {
    const [input,setInput] = useState({
        regNo:""
    })

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const [out,setOutput] =  useState([])
    const readValues=()=>{
        axios.post("http://localhost:3001/api/exam/search",input).then(
            (response)=>{
                setOutput(response.data)
            }
        )
    }
    useEffect( ()=>{readValues()},[])
  return (
    <div>
        <NavExam/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <   div className="card">
  
                        <div className="card-body">
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                    <label htmlFor="" className="form-label">Registration No</label>
                                    <input type="text" className="form-control" name="regNo" value={input.regNo} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success" onClick={readValues}>Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
              <thead>
                <tr>
                  <th scope="col">student name</th>
                  <th scope="col">register no</th>
                  <th scope="col">course name</th>
                  <th scope="col">college name</th>
                </tr>
              </thead>
              <tbody>
               
               {
                out.map(
                    (value,index)=>{
                        return  <tr>
                        <td>{value.studentName}</td>
                        <td>{value.regNo}</td>
                        <td>{value.courseName}</td>
                        <td>{value.collegeName}</td>
                      </tr>
                    }
                )
               }
              </tbody>
            </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchStudent