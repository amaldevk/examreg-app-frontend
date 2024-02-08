import React, { useEffect, useState } from 'react'
import NavExam from './NavExam'
import axios from 'axios'

const ViewStudent = () => {
    const [data,setData] = new useState([])
    const getData = ()=>{
        axios.get("http://localhost:3001/api/exam/view").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect( ()=>{getData()},[])
  return (
    <div>
        <NavExam/>
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
                data.map(
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

export default ViewStudent