import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const CardDate = ({ index, appoint, dltAppoint }) => {
  return (
    <div className="col-5">
      <section
        className="py-2 border rounded"
        style={{ backgroundColor: "white" }}
      >
        <p className="lead mb-3 fs-5 text-center">
          Mascota: {appoint.pet} <br />
          <small className="lead fs-6 text-center">Dueño: {appoint.name}</small>
        </p>
        <div
          className="py-3 px-lg-4 mb-2 px-2 border-top"
          style={{ backgroundColor: "lightgrey" }}
        >
          <Form.Group className="mb-3 d-flex" controlId="formDate">
            <div className="col-3">
              <Form.Label>Dia:</Form.Label>
            </div>
            <div className="col-9">
              <Form.Control type="date" value={appoint.date} readOnly />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="formTime">
            <div className="col-3">
              <Form.Label>Hora:</Form.Label>
            </div>
            <div className="col-9">
              <Form.Control type="time" value={appoint.time} readOnly />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="formSymptoms">
            <div className="col-3">
              <Form.Label>Sintomas:</Form.Label>
            </div>
            <div className="col-9">
              <Form.Control
                type="text"
                placeholder="Vomitos, Cansancio, etc"
                value={appoint.symptoms}
                readOnly
              />
            </div>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-end me-3">
          <Button className="btn-danger" onClick={() => dltAppoint(index)}>
            Borrar
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CardDate;
