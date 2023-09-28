import { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

export const Register = () => {
  const registeruser = (e) => {
    e.preventDefault();

    Axios({
      method: "POST",
      data: {
        username: data.username,
        password: data.password,
        email: data.email,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div className="bg-[#F9FAFB] h-screen w-screen flex items-center">
      <div className="h-max mx-auto flex flex-col items-center">
        <img
          className="h-[40px] w-[47px] mb-5"
          src="https://www.gadgetronicx.com/e-waste/lhs-recycle-icon2/"
          alt=""
        />
        <h1 className="text-xl font-bold text-center pb-10">
          Register your account
        </h1>
        <form
          className="bg-white shadow-xl p-10 flex flex-col gap-4 text-sm w-[360px]"
          onSubmit={registeruser}
        >
          <label>Username</label>
          <input
            type="text"
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            placeholder="enter username"
            value={data.username}
            onChange={(e) => {
              setData({ ...data, username: e.target.value });
            }}
          />
          <label>Email</label>
          <input
            type="email"
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            placeholder="Enter email"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
          <label>Password</label>
          <input
            type="password"
            className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2"
            placeholder="enter Password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          <Link to="/login" className="font-bold text-emerald-600">
            Login now
          </Link>
          <button
            type="submit"
            className="bg-[#15803d] w-full py-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#14532d]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
