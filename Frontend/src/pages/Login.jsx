import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginuser = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
      <div className="h-max mx-auto flex flex-col items-center">
        <img
          className="h-[40px] w-[47px] mb-5"
          src="https://www.gadgetronicx.com/e-waste/lhs-recycle-icon2/"
          alt=""
        />
        <h1 className="text-xl font-bold text-center pb-10">
          Log in to your account
        </h1>
        <form
          className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm w-[320px]"
          onSubmit={loginuser}
        >
          <label>Email</label>
          <input
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <label>Password</label>
          <input
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            type="password"
            placeholder="enter Password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <div className="flex">
            <Link to="/register" className="font-bold w-1/2 text-emerald-600">
              Register now
            </Link>
            <Link to="/" className="font-bold w-1/2 text-emerald-600">
              Login as facility
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#15803d] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#14532d]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
