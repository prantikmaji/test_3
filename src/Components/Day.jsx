import React from 'react'

const Day = () => {

const day =new Date().toDateString();


    return (
        <div className="text-center">
          <h4>{day}</h4>
        </div>
    )
}








export default Day;

