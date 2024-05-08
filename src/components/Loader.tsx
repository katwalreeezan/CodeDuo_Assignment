import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="d-flex align-items-center justify-content-center loaderheight">
      <PuffLoader color="blue" />
    </div>
  );
};

export default Loader;
