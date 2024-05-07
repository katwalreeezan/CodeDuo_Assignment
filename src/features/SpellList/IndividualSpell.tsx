import React from "react";
import { Link, useParams } from "react-router-dom";
import { useIndividualSpellQuery } from "../../service/api/apiRequest";
import Loader from "../../components/Loader";

const IndividualSpell = React.memo(() => {
  const { name: paramName } = useParams<{ name: string }>();
  const name = paramName ?? "";
  const {
    data: individualSpell,
    isLoading,
    isError,
  } = useIndividualSpellQuery(name);
  if (isError) {
    return (
      <div className="text-danger text-center my-4">
        Error While Fetching the Data
      </div>
    );
  }
  return (
    <div className="container mt-5 ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {individualSpell && (
            <div>
              <div className="col-lg-7 mx-auto">
                <div className="card">
                  <div className="card-header">
                    {" "}
                    <h5 className="fw-bold text-center">
                      Information of {individualSpell?.name}{" "}
                    </h5>
                  </div>
                  <div
                    className="card-body"
                    style={{ height: "70vh", overflowY: "scroll" }}
                  >
                    <div>
                      <b>Name : </b>
                      {individualSpell?.name}
                    </div>
                    <div className="mt-2">
                      <b>Level : </b>
                      {individualSpell?.level}
                    </div>
                    <div className="mt-2">
                      <b>School : </b>
                      {individualSpell?.school?.name}
                    </div>
                    <div className="mt-2">
                      <b>Casting Time : </b>
                      {individualSpell?.casting_time}
                    </div>
                    <div className="mt-2">
                      <b>Range : </b>
                      {individualSpell?.range || "No Range Found"}
                    </div>
                    <div className="mt-2">
                      <b>Components : </b>
                      {individualSpell?.components.join(",")}
                    </div>
                    <div className="mt-2">
                      <b>Duration : </b>
                      {individualSpell?.duration}
                    </div>
                    <div className="mt-2">
                      <b>Concentration : </b>
                      {individualSpell?.concentration ? "Yes" : "No"}
                    </div>
                    <div className="mt-2">
                      <b>Attack Type : </b>
                      {individualSpell?.attack_type || "No Attack Type Found"}
                    </div>
                    <div className="mt-2">
                      <b>Damage Type : </b>
                      {individualSpell?.damage?.damage_type?.name ||
                        "No Damage Type Found"}
                    </div>
                    <div className="mt-2">
                      <b>Material : </b>
                      {individualSpell?.material || "No Material Found"}
                    </div>

                    <div className="mt-2">
                      <b>Description : </b>

                      {individualSpell?.desc?.map((paragraph, index) => (
                        <div key={index}>{paragraph}</div>
                      ))}
                    </div>
                    <div className="mt-2">
                      <b>Higher Level Casting : </b>

                      {(individualSpell.damage &&
                        individualSpell.damage.damage_at_slot_level &&
                        Object.entries(
                          individualSpell.damage.damage_at_slot_level
                        ).map(([level, damage]) => (
                          <li key={level}>
                            At {level} level {damage} damage
                          </li>
                        ))) ||
                        "No Casting Level Found"}
                    </div>

                    <div className="mt-2">
                      <b>Classes : </b>
                      {individualSpell?.classes
                        ?.map((cls: { name: string }) => cls.name)
                        .join(", ")}
                    </div>
                    <div className="mt-2">
                      <b>Sub Classes : </b>
                      {individualSpell?.subclasses
                        ?.map((subclass: { name: string }) => subclass.name)
                        .join(", ") || "No sub classes found"}
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-end" aria-label="Back button">
                  <Link to="/">
                    <button className="btn btn-info">Back</button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
});

export default IndividualSpell;
