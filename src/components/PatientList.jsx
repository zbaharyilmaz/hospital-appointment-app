import { FaTimesCircle } from "react-icons/fa";


const PatientList = ({patients}) => {
  return (
    <div>
      <div>
        {patients.map((person)=>{
        const {id, patientName, isDone, myDoctor}= person
        return(
            <div className="falseStyle">
          <div key="id">
            <h2>{patientName} </h2>
            <h4>{myDoctor} </h4>
            <h3>{isDone} </h3>
          </div>
          <FaTimesCircle/>
        </div> 
        )
        })}
       
      </div>
    </div>
  );
};

export default PatientList;
