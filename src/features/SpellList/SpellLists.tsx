import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

import { AppDispatch, RootState } from "../../app/store";
import { useGetSpellsQuery } from "../../service/api/apiRequest";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../service/features/favoriteSpellSlice";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import { Spell } from "../../utils/types";

const SpellLists = React.memo(() => {
  const dispatch:AppDispatch = useDispatch();
  const {
    data: allSpells,
    isSuccess,
    isLoading,
    isError
  } = useGetSpellsQuery();
  const favoriteSpells = useSelector(
    (state: RootState) => state.favoriteSpells.favoriteSpells
  );
  if (isError) {
    return (
      <div className="text-danger text-center my-4">
        Error While Fetching the Data
      </div>
    );
  }

  const handleFavoriteClick = (spell: Spell) => {
    const isFavorite = favoriteSpells.some(
      (favoriteSpell: Spell) => favoriteSpell.index === spell.index
    );
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
    if (isFavorite) {
      dispatch(removeFromFavorites(spell));
    } else {
      dispatch(addToFavorites(spell));
    }
  };

  return (
    <div className="container mt-5 ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="d-flex justify-content-between pb-5">
            <h5 className="fw-bold ">List of All Spells</h5>
            <Link to="/spell/favorite-list">
              <button className="btn btn-info ">
                View Favorite Spells <FaHeart />
                {favoriteSpells.length === 0 ? (
                  ""
                ) : (
                  <> ({favoriteSpells.length})</>
                )}
              </button>
            </Link>
          </div>
          <div className="row gy-4 cardheight">
            {isSuccess &&
              allSpells &&
              allSpells?.results?.map((item) => (
                <div className="col-lg-4 col-md-6" key={item.index}>
                  <div className="card border ">
                    <div className="card-header ">
                      <div className="text-dark fw-bold text-uppercase">
                        {item.name}
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="d-flex justify-content-between mt-2">
                        <Link to={`/spell/${item.index}`}>
                          <button className="btn btn-primary">View</button>
                        </Link>

                        <button
                          className="btn btn-outline-dark fw-bold d-block"
                          onClick={() => handleFavoriteClick(item)}
                        >
                          {favoriteSpells.some(
                            (favoriteSpell: Spell) =>
                              favoriteSpell.index === item.index
                          ) ? (
                            <>
                              Remove From Favorites <FaHeart />
                            </>
                          ) : (
                            <>
                              Add To Favorites <FaRegHeart />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
});

export default SpellLists;
