import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Link } from "react-router-dom";

const FavoriteList = () => {
  const favoriteSpells = useSelector(
    (state: RootState) => state.favoriteSpells.favoriteSpells
  );
  console.log(favoriteSpells);
  return (
    <div className="container mt-5">
      <h5 className="fw-bold text-center">Favorite List</h5>
      {favoriteSpells.map((item) => (
        <div key={item.index}>{item.name}</div>
      ))}

      <div className="mt-4 text-end">
        <Link to="/">
          <button className="btn btn-info">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default FavoriteList;
