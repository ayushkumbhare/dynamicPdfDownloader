import React from 'react';
import "./Footer.css"

function Footer(props) {
   
  return (
    <>
        <div className="line"></div> 
        <div className='footer'>
           <div>Report Generated on {props.time}</div>
           <p>RealAssist Property Report | Page 1 <span>of 25</span></p>
        </div>
    </>
  )
}

export default Footer