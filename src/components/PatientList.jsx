import { FaTimesCircle } from "react-icons/fa";


const PatientList = () => {
  return (
    <div>
      <div>
        <div className="falseStyle">
          <div>
            <h2>{} </h2>
            <h4>{} </h4>
            <h3>{} </h3>
          </div>

          <FaTimesCircle style={{ color: "red" }} />
        </div>
      </div>
    </div>
  );
};

export default PatientList;
