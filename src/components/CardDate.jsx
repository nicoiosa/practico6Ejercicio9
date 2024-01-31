import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const CardDate = () => {
  return (
    <section
      className="py-2 border rounded"
      style={{ backgroundColor: "white" }}
    >
      <p className="lead mb-3 fs-5 text-center">
        Mascota: Firulais <br />
        <small className="lead fs-6 text-center">Dueño: Felipe</small>
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
            <Form.Control type="date" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formTime">
          <div className="col-3">
            <Form.Label>Hora:</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control type="time" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formSymptoms">
          <div className="col-3">
            <Form.Label>Sintomas:</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control type="text" placeholder="Vomitos, Cansancio, etc" />
          </div>
        </Form.Group>
      </div>
      <div className="d-flex justify-content-end me-3">
        <Button className="btn-danger" type="submit">
          Borrar
        </Button>
      </div>
    </section>
  );
};

export default CardDate;
