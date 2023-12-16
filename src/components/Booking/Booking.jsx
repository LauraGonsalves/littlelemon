import React, { useState } from 'react'

import "./Booking.css"
const Booking = () => {
const [bookingInfo,setBookingInfo]=useState({
    fname:'',
    email:'',
    phone:'',
    count:'',
    date:'',
    occassion:'',
    time:'',
    seating:''

})
const [showPopUp,setShowPopUp]=useState(false)

const  handleChange=(e)=>{
setBookingInfo(
    {
        ...bookingInfo,
    [e.target.name]:e.target.value
    }
)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(bookingInfo)
    setBookingInfo({
        ...bookingInfo,

        fname: '',
        email: '',
        phone: '',
        count: '',
        date: '',
        occassion: '',
        time: '',
        seating: ''
      });
      setShowPopUp(true)
}

    return (<div className="booking-container">

    <h1>Book A Table With Us!</h1>

        <form className='form'>
            <div className='row'>
                <div className="col-lg-6">
                    <label htmlFor="fname">Name</label><br />
                    <input className="inputStyle" type="text" id='fname' name='fname' onChange={handleChange}  value={bookingInfo.fname} ></input><br />
                    <label htmlFor="email">Email Address</label><br />
                    <input className="inputStyle" type='email' name='email' id='email' onChange={handleChange}  value={bookingInfo.email}></input><br />
                    <label htmlFor="phone">phone Number</label><br />
                    <input className="inputStyle" type='text' name='phone' id='phone' onChange={handleChange}  value={bookingInfo.phone}></input><br />
                    <label htmlFor="count">People Count</label><br />
                    <input className="inputStyle" type="text" id='count' name='count' onChange={handleChange}  value={bookingInfo.count}></input><br />
                </div>
                <div className="col-lg-6">
                    <label htmlFor="date">Select Date</label><br />
                    <input className="inputStyle" type='date' name='date' id='date' onChange={handleChange}  value={bookingInfo.date}></input><br />
                    <label htmlFor="occassion" >Name your occassion</label><br />
                    <select className="inputStyle" id='occassion' name='occassion' onChange={handleChange}  value={bookingInfo.occassion}>
                        <option value={"birthday"} >Birthday</option>
                        <option value={"Wedding"} >Wedding</option>
                        <option value={"Anniversary"} >Anniversary</option>
                        <option value={"Office party"} >Office party</option>
                        <option value={"Others"} >Others</option>
htmlFor

                    </select><br />

                    <label htmlFor="time">Time</label><br />
                    <input className="inputStyle" type="time" id='time' name='time' onChange={handleChange}  value={bookingInfo.time} ></input><br />
                    <label htmlFor="seating">Seating </label><br />
                    <select className="inputStyle" id='seating' name='seating' onChange={handleChange}  value={bookingInfo.seating}>
                        <option value={"Outdoor"} >Outdoor</option>
                        <option value={"Indoor"} >Indoor</option> </select><br />
                    <input className='button' type="submit" value="Submit" onClick={handleSubmit} />

                </div></div>

        </form>
        {showPopUp &&
        <div className='popup'>
        <p>Your form has been submitted!</p>
        <button className='button' onClick={()=>setShowPopUp(false )} >close</button>

        </div>

        
        
        }
        
        </div>
    )
}

export default Booking