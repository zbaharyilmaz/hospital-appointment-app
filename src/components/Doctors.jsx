import React, { useState } from "react";

const Doctors = ({ doctors, setDoctors, appointment, setAppointment }) => {

  // Doktora tıklanması durumunda yapılacak işlem
  const doctorClick = (id) => {
    // Burada doktorları filtreliyoruz (doktorun id'si ile)
    setDoctors(doctors.filter((d) => d.id === id));

    // setAppointment((prevState) => !prevState);
    // appointment durumunu true yapıyoruz
    setAppointment(false);  // Randevu aktif oldu, renk kırmızı olacak
  };

  return (
    <div className="dr">
      {/*className={appointment ? "dr" : "dr-row"}  */}
      {doctors.map((doc) => {
        const { id, doctorImg, doctorName } = doc;
        return (
          <div key={id}>
            <img 
              src={doctorImg}
              width="300px"
              height="300px"
              alt="doctor"
              className={appointment ? "doctor-img-normal" : "doctor-img-active"}
              onClick={() => doctorClick(id)} // Tıklandığında doktoru filtrele ve appointment'ı değiştir
            />
            <h4 className="mt-3">{doctorName}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Doctors;
