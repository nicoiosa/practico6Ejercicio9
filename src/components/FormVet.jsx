import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ShowDates from "./ShowDates";

const FormVet = () => {
  const [pet, setPet] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [arryAppoint, setArryAppoint] = useState(
    JSON.parse(localStorage.getItem("arryAppoint")) || []
  );
  useEffect(() => {
    localStorage.setItem("arryAppoint", JSON.stringify(arryAppoint));
  }, [arryAppoint]);
  const handleChange = (e) => {
    e.preventDefault();
    const newAppoint = {
      pet: pet,
      name: name,
      date: date,
      time: time,
      symptoms: symptoms,
    };
    console.log(newAppoint);
    setPet("");
    setName("");
    setDate("");
    setTime("");
    setSymptoms("");
    setArryAppoint([...arryAppoint, newAppoint]);
  };
  const dltAppoint = (index) => {
    const filteredArray = arryAppoint.filter((_, i) => i !== index);
    setArryAppoint(filteredArray);
  };
  return (
    <>
      <section className="py-4 border mb-5">
        <h2 className="lead mb-3 text-center">
          Llenar el formulario para crear una cita
        </h2>
        <Form onSubmit={handleChange}>
          <div
            className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom"
            style={{ backgroundColor: "lightblue" }}
          >
            <Form.Group className="mb-3 row" controlId="formPet">
              <div className="col-2">
                <Form.Label>Nombre de mascota:</Form.Label>
              </div>
              <div className="col-10">
                <Form.Control
                  type="text"
                  placeholder="Firulais"
                  value={pet}
                  name={pet}
                  onChange={(e) => setPet(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="formName">
              <div className="col-2">
                <Form.Label>Nombre del dueño:</Form.Label>
              </div>
              <div className="col-10">
                <Form.Control
                  type="text"
                  placeholder="Felipe"
                  value={name}
                  name={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Form.Group>
            <div className="row">
              <div className="col-6">
                <Form.Group className="mb-3 d-flex" controlId="formDate">
                  <div className="col-2">
                    <Form.Label>Dia:</Form.Label>
                  </div>
                  <div className="col-10">
                    <Form.Control
                      type="date"
                      value={date}
                      name={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </div>
              <div className="col-6">
                <Form.Group className="mb-3 d-flex" controlId="formTime">
                  <div className="col-2">
                    <Form.Label>Hora:</Form.Label>
                  </div>
                  <div className="col-10">
                    <Form.Control
                      type="time"
                      value={time}
                      name={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3 d-flex" controlId="formSymptoms">
              <div className="col-2">
                <Form.Label>Sintomas:</Form.Label>
              </div>
              <div className="col-10">
                <Form.Control
                  type="text"
                  placeholder="Vomitos, Cansancio, etc"
                  value={symptoms}
                  name={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </div>
            </Form.Group>
          </div>
          <div className="d-flex justify-content-center">
            <Button type="submit">Agregar nueva cita</Button>
          </div>
        </Form>
      </section>
      <ShowDates arryAppoint={arryAppoint} dltAppoint={dltAppoint} />
    </>
  );
};

export default FormVet;
