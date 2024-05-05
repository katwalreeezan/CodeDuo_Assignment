import { Link } from "react-router-dom";
import { useGetSpellsQuery } from "../../service/apiRequest";
import { FaRegHeart } from "react-icons/fa6";
import Loader from "../../components/Loader";

const SpellLists = () => {
  const { data: allspells, isSuccess, isLoading } = useGetSpellsQuery();
  console.log(allspells);
  return (
    <div className="container mt-5">
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <h5 className="fw-bold">List of All Spells</h5>
          <div className="row gy-4">
            {isSuccess &&
              allspells?.results?.map((item) => (
                <div className="col-lg-4" key={item.index}>
                  <div className="card shadow-lg">
                    <div className="card-body">
                      <div className="text-dark fw-bold">{item.name}</div>

                      <div className="d-flex justify-content-between mt-3">
                        <Link to={`/spell/${item.index}`}>
                          <button className="btn btn-primary">View</button>
                        </Link>
                        <button className="btn btn-outline-dark fw-bold d-block">
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
