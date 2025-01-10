import React, { useState } from "react";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import Header from "../components/Header";
import { counseleeData, doctorData } from "../helper/data";
import Doctors from "../components/Doctors";

const Home = () => {
  const [doctor, setDoctor] = useState(doctorData);
  const [patient, setPatient] = useState(counseleeData);
  const [appointment, setAppointment] = useState(true); //!true verdik.

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="dr-container d-flex">
        <div>
          <Doctors
            doctors={doctor}
            setDoctors={setDoctor}
            appointment={appointment}
            setAppointment={setAppointment}
          />
        </div>
        <div >
          {!appointment && (
            <AddPatient
              patients={patient}
              setPatients={setPatient}
            />
          )}
        </div>
      </div>
      <h3 className="fs-2 fw-bold mt-5 text-center">Randevu Takvimi</h3>
      <PatientList
        patients={patient}
        setPatients={setPatient}
        appointment={appointment}
        setAppointment={setAppointment}
      />
    </div>
  );
};

export default Home;
