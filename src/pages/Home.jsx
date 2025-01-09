import React from "react";
import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";
import Header from "../components/Header";



const Home = () => {
  return (
    <div style={{ display: "block" }}>
      <div>
        <Header/>
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


        <AddPatient />
      </div>

      <PatientList />
    </div>
  );
};

export default Home;
