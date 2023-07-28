import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="flex flex-col text-slate-500 text-2xl ">
      <div className=" flex justify-center pt-10 m-2 shadow-inner">
        <div className=" font-mono text-8xl font-extrabold px-4">
          {err?.status}:
        </div>
        <div className=" font-mono text-8xl font-extrabold">
          {err?.statusText}
        </div>
      </div>
      <div className=" flex text-4xl text-red-500 font-bold justify-center p-4 m-4">
        {err?.data}
      </div>
      <div className="flex justify-center border-spacing-2 font-mono font-bold ">
        <Link
          to="/"
          className=" rounded-xl p-2 px-4 bg-orange-400 text-slate-800 hover:shadow-xl hover:bg-orange-600 hover:text-white"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
