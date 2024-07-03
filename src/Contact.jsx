import { useState } from 'react'
import './App.css'

function Contact () {
  const [count, setCount] = useState(0)

    return (
      <>
      <container>
      <div className="contact">
        <h2>Contact Information</h2>
        <p>Email: briansuverkrubbe@yahoo.com</p>
        <p1>LinkedIn: <a href="https://www.linkedin.com/in/brian-suverkrubbe-710514317/">Your LinkedIn Profile</a></p1>
      </div>
      </container>
    </>
    )
  }


export default Contact