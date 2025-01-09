import React from "react";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

const Home = () => {
  return (
    <div style={{ display: "block" }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            <div>
              <img
                src=""
                width="180px"
                height="150px"
                className="doctorBtn"
                alt=""
              />
              <h4>{}</h4>
            </div>
          </div>
        </header>

        <AddPatient />
      </div>

      <PatientList />
    </div>
  );
};

export default Home;
