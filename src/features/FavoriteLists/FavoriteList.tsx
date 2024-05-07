import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { Spell } from "../../utils/types";
import React from "react";

const FavoriteList = React.memo(() => {
  const favoriteSpells = useSelector(
    (state: RootState) => state.favoriteSpells.favoriteSpells
  );

  return (
    <div className="container mt-5">
      <h5 className="fw-bold text-center">Favorite Spell List</h5>
      {favoriteSpells.length === 0 && (
        <p className="text-center">There are no any favorite spells</p>
      )}
      <div className="row gy-4 mt-3">
        {favoriteSpells.map((item: Spell) => (
          <div key={item.index} className="col-lg-3">
            <div className="card  border">
              <div className="card-body">
                <Link className="fw-bold" to={`/spell/${item.index}`}>
                  {" "}
                  <div className="text-uppercase">{item.name}</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-end">
        <Link to="/">
          <button className="btn btn-info">Back</button>
        </Link>
      </div>
    </div>
  );
});

export default FavoriteList;
