import React, { useState } from "react";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import Header from "../components/Header";
import { appointmentData, doctorData } from "../helper/data";
import Doctors from "../components/Doctors";

const Home = () => {

const [doctor, setDoctor]= useState(doctorData)
const [patient, setPatient]= useState(appointmentData)

  return (
    <div>
        <div>
        <Header/>
        <Doctors doctors={doctor}/>
        </div>
        <div>
        <AddPatient patients/>
      </div>
      <PatientList patients={patient}/>
    </div>
  );
};

export default Home;
