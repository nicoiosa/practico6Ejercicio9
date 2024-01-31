import CardDate from "./CardDate";

const ShowDates = () => {
  return (
    <section className="pt-4 border">
      <h2 className="lead mb-3 text-center">No hay citas</h2>
      <div
        className="py-5 px-lg-4 px-2 border-top row"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="col-5">
          <CardDate />
        </div>
      </div>
    </section>
  );
};

export default ShowDates;
