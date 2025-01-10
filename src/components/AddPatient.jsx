const AddPatient = ({patients, setPatients}) => {

  return (
    <div>
      <form >
        <div className="form-control">
          <label htmlFor="name"> Patient Information</label>
          <input
            id="name"
            type="text"

           
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time</label>
          <input
            type="datetime-local"
          
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            <span>{ } </span> Schedule the Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
