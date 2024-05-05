import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height:'70vh'}}>
      <PuffLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
