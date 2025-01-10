const Doctors = ({
  doctors,
  setDoctors,
  appointment,
  patients,
  setPatients,
  setAppointment,
}) => {
  // Doktora tıklanması durumunda yapılacak işlem
  const doctorClick = (id) => {
    // Burada doktoru buluyoruz (doktorun id'si ile)
    const selectedDoctor = doctors.find((d) => d.id === id);

    // Doktoru filtreliyoruz
    setDoctors([selectedDoctor]);

    // appointment durumunu false yapıyoruz
    setAppointment(false);

    // Seçilen doktora bağlı olarak hastaları filtreliyoruz
    // sadece tıklanan doktora ait hastaları filtreliyoruz
    setPatients(
      patients.filter((a) => a.myDoctor === selectedDoctor.doctorName)
    );
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
              className={
                appointment ? "doctor-img-normal" : "doctor-img-active"
              }
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
