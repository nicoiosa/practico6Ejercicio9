import { Row } from "react-bootstrap";
import CardDate from "./CardDate";

const ShowDates = ({ arryAppoint, dltAppoint }) => {
  return (
    <section className="pt-4 border">
      <h2 className="lead mb-3 text-center">No hay citas</h2>
      <div
        className="py-5 px-lg-4 px-2 border-top"
        style={{ backgroundColor: "lightblue" }}
      >
        <Row>
          {arryAppoint.map((appoint, position) => (
            <CardDate
              key={position}
              index={position}
              appoint={appoint}
              dltAppoint={dltAppoint}
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ShowDates;
