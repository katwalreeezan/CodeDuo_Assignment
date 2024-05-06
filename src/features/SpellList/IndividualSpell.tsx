import { Link, useParams } from "react-router-dom";
import { useIndividualSpellQuery } from "../../service/api/apiRequest";
import Loader from "../../components/Loader";

const IndividualSpell = () => {
  const { name: paramName } = useParams<{ name: string }>();
  const name = paramName ?? "";
  const { data: individualSpell, isLoading } = useIndividualSpellQuery(name);
  console.log(individualSpell);

  return (
    <div className="container mt-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h5 className="fw-bold text-center">
            Information of {individualSpell?.name}{" "}
          </h5>

          <div className="col-lg-7 mx-auto">
            <div className="card">
              <div className="card-body">
                <div>
                  <b>Name : </b>
                  {individualSpell?.name}
                </div>
                <div>
                  <b>Material : </b>
                  {individualSpell?.material || "No Material Found"}
                </div>
                <div>
                  <b>Classes : </b>
                  {individualSpell?.classes?.map((item) => (
                    <div className=" " key={item.index}>
                      <div className="">{item.name}</div>{" "}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 text-end">
              <Link to="/">
                <button className="btn btn-info">Back</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default IndividualSpell;
