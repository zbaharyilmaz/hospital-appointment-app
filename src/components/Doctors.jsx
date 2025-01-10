import React, { useState } from "react";

const Doctors = ({doctors}) => {
 
  return (
    
    <div className="dr">
        {doctors.map((doc)=>{
            const {id,doctorImg, doctorName}= doc
            return (                         //! returnden önce destructring.
                <div key={id}>
                <img 
                  src={doctorImg}
                  width= "300px"
                  height="300px"
                  alt="doctor"
                />
                <h4>{doctorName}</h4>
              </div>
            )}
            )};
    </div>
  );
};

export default Doctors;