import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const FormVet = () => {
  return (
    <section className="py-4 border mb-5">
      <h2 className="lead mb-3 text-center">Llenar el formulario para crear una cita</h2>
      <Form>
        <div
          className="py-4 px-lg-4 px-2 mb-4 border-top border-bottom"
          style={{ backgroundColor: "lightblue" }}
        >
          <Form.Group className="mb-3 row" controlId="formPet">
            <div className="col-2">
              <Form.Label>Nombre de mascota:</Form.Label>
            </div>
            <div className="col-10">
              <Form.Control type="text" placeholder="Firulais" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3 d-flex" controlId="formName">
            <div className="col-2">
              <Form.Label>Nombre del dueño:</Form.Label>
            </div>
            <div className="col-10">
              <Form.Control type="text" placeholder="Felipe" />
            </div>
          </Form.Group>
          <div className="row">
            <div className="col-6">
              <Form.Group className="mb-3 d-flex" controlId="formDate">
                <div className="col-2">
                  <Form.Label>Dia:</Form.Label>
                </div>
                <div className="col-10">
                  <Form.Control type="date" />
                </div>
              </Form.Group>
            </div>
            <div className="col-6">
              <Form.Group className="mb-3 d-flex" controlId="formTime">
                <div className="col-2">
                  <Form.Label>Hora:</Form.Label>
                </div>
                <div className="col-10">
                  <Form.Control type="time" />
                </div>
              </Form.Group>
            </div>
          </div>
          <Form.Group className="mb-3 d-flex" controlId="formSymptoms">
            <div className="col-2">
              <Form.Label>Sintomas:</Form.Label>
            </div>
            <div className="col-10">
              <Form.Control type="text" placeholder="Vomitos, Cansancio, etc" />
            </div>
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Button type="submit">Agregar nueva cita</Button>
        </div>
      </Form>
    </section>
  );
};

export default FormVet;
