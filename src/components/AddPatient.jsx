import { useState } from "react";
const AddPatient = ({doctors, setDoctors, patients, setPatients}) => {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit=(e)=>{
    e.preventDefault()
    setPatients([...patients, {id:8, patientName:name, day:date, isDone:false, myDoctor:"Asst. Prof.Emir Akın"}])
    alert("Randevu işlemleriniz tamamlanmıştır. Sağlılı günler dileriz.")

  }
  return (
    <div className="form-container text-center">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Danışan Bilgileri</label>
          <input onChange={(e)=>setName(e.target.value)}
            id="name"
            type="text"
            placeholder="İsim-Soyisim"
            required

          />
        </div>

        <div className="form-control">
          <label htmlFor="">Tarih ve Saat</label>
          <input onChange={(e)=>setDate(e.target.value)}
            id="date"
            type="datetime-local"
            required
          />
        </div>

        <div className="form-control">
            <label className="form-check" htmlFor="doctors">
              Psikologlarımız <span>{doctors}</span>
            </label>
            <select
              onChange={(e) => setDoctors(e.target.value)}
              id="doctors"
              className="form-select"
              value={doctors}
              required
            >
              <option>Psikolog Seçiminizi Yapınız</option>
              <option value="1">Prof. Aysa Dizdar</option>
              <option value="2">Psk. Alina Berrin Akın</option>
              <option value="3">Psk. Sena Adil</option>
              <option value="4">Psk. Neva Yılmaz</option>
              <option value="5">Asst. Prof. Emir Akın</option>
              <option value="6">Psk. Müge Sezen</option>
              <option value="7">Psk. Ayhan Kemer</option>
            </select>
          </div>
        <div>
          <button className="registerButton btn btn-dark btn-lg" type="submit">
          RANDEVU OLUŞTUR
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
