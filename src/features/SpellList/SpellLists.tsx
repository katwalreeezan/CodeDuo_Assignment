// SpellLists.tsx
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

import { RootState } from "../../app/store";
import { useGetSpellsQuery } from "../../service/api/apiRequest";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../service/features/favoriteSpellSlice";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";


const SpellLists = () => {
  const dispatch = useDispatch();
  const { data: allSpells, isSuccess, isLoading } = useGetSpellsQuery();
  const favoriteSpells = useSelector(
    (state: RootState) => state.favoriteSpells.favoriteSpells
  );

  const handleFavoriteClick = (spell) => {
    const isFavorite = favoriteSpells.some(
      (favoriteSpell) => favoriteSpell.index === spell.index
    );
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
    if (isFavorite) {
      dispatch(removeFromFavorites(spell));
    } else {
      dispatch(addToFavorites(spell));
    }
  };

  return (
    <div className="container mt-5">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="d-flex justify-content-between pb-5">
            <h5 className="fw-bold">List of All Spells</h5>
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
          <div
            className="row gy-4"
            style={{ height: "75vh", overflowY: "scroll" }}
          >
            {isSuccess &&
              allSpells?.results?.map((item) => (
                <div className="col-lg-4" key={item.index}>
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <div className="text-dark fw-bold text-uppercase">
                        {item.name}
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <Link to={`/spell/${item.index}`}>
                          <button className="btn btn-primary">View</button>
                        </Link>

                        <button
                          className="btn btn-outline-dark fw-bold d-block"
                          onClick={() => handleFavoriteClick(item)}
                        >
                          {favoriteSpells.some(
                            (favoriteSpell) =>
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
};

export default SpellLists;
