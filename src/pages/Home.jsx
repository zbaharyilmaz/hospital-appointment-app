import React, { useState } from "react";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import Header from "../components/Header";
import {counseleeData, doctorData } from "../helper/data";
import Doctors from "../components/Doctors";

const Home = () => {

const [doctor, setDoctor]= useState(doctorData)
const [patient, setPatient]= useState(counseleeData)
const [appointment, setAppointment] = useState(true)   //!true verdik.

  return (
    <div>
        <div>
        <Header/>
        <Doctors doctors={doctor} setDoctors={setDoctor} appointment={appointment} setAppointment={setAppointment} />
        </div>
        <div>
        <AddPatient patients/>
      </div>
      <PatientList patients={patient} setPatients={setPatient} appointment={appointment} setAppointment={setAppointment}/>
    </div>
  );
};

export default Home;
