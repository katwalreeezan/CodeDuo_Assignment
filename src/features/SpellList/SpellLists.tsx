// SpellLists.tsx
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa6';



import { RootState } from '../../app/store';
import { useGetSpellsQuery } from '../../service/api/apiRequest';
import { addToFavorites, removeFromFavorites } from '../../service/features/favoriteSpellSlice';
import Loader from '../../components/Loader';

const SpellLists = () => {
  const dispatch = useDispatch();
  const { data: allSpells, isSuccess, isLoading } = useGetSpellsQuery();
  const favoriteSpells = useSelector((state: RootState) => state.favoriteSpells.favoriteSpells);
  console.log(favoriteSpells)

  const handleFavoriteClick = (spell) => {
    const isFavorite = favoriteSpells.some(favoriteSpell => favoriteSpell.index === spell.index);
    
    if (isFavorite) {
      dispatch(removeFromFavorites(spell)); // Dispatch action to remove from favorites
    
    } else {
      dispatch(addToFavorites(spell)); // Dispatch action to add to favorites
    
    }
  };

  return (
    <div className="container mt-5">
      {isLoading ? (
      <Loader/>
      ) : (
        <>
          <h5 className="fw-bold">List of All Spells</h5>
          <div className="row gy-4">
            {isSuccess &&
              allSpells?.results?.map((item) => (
                <div className="col-lg-4" key={item.index}>
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <div className="text-dark fw-bold text-uppercase">{item.name}</div>
                      <div className="d-flex justify-content-between mt-3">
                        <Link to={`/spell/${item.index}`}>
                          <button className="btn btn-primary">View</button>
                        </Link>
                        <button className="btn btn-outline-dark fw-bold d-block" onClick={() => handleFavoriteClick(item)}>
                          Add To Favourite <FaRegHeart />
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
