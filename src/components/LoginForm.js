import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { addLoginFirstName, toggleLogin } from "../utils/overlaySlice";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const isLoginOpen = useSelector((store) => store.overlay.isLoginOpen);

  const dispatch = useDispatch();
  const handleLoginPage = () => {
    dispatch(toggleLogin());
  };
  const handleFirstName = (userName) => {
    dispatch(addLoginFirstName(userName));
  };
  // Early return
  if (isLoginOpen) return null;

  return (
    <div className="fixed right-0 top-0 z-40 border-l shadow-md h-screen w-1/3">
      <div className=" h-screen p-2 bg-slate-50 flex flex-col justify-center items-center text-xl font-sans">
        <div className=" relative bottom-24 text-orange-400 text-4xl font-serif font-medium">
          Login to food
        </div>
        <span
          className=" cursor-pointer text-6xl my-2 z-50 font-light fixed top-0 right-0"
          onClick={() => handleLoginPage}
        >
          ➜
        </span>
        <div>
          <div className="m-1 mb-4 p-2">
            <label
              className=" text-slate-400 font-semibold text-2xl"
              htmlFor="text"
            >
              Username :{" "}
            </label>
            <input
              className=" bg-gray-200 p-1 text-gray-500 border-2 rounded-lg shadow-lg focus:outline-none border-slate-400"
              name="text"
              autoFocus
              id="text"
              autoComplete="off"
              placeholder="ABCD"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="m-1 p-2">
            <label
              className="text-slate-400 me-2 font-semibold text-2xl"
              htmlFor="password"
            >
              Password :{" "}
            </label>
            <input
              className=" bg-gray-200 p-1 shadow-lg text-gray-500 rounded-lg border-2 border-slate-400  focus:outline-none"
              type="password"
              name="password"
              placeholder="xyz@2023"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className=" relative top-10 left-1/2 m-4 mx-12 p-2 font-semibold rounded-md text-white shadow-lg bg-orange-400 hover:bg-orange-600 "
            onClick={() => handleFirstName}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;