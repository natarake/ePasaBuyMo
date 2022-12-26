import { Link } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="flex justify-center items-center h-2/3 bg-slate-300">
        <div className="w-full md:w-2/5 h-full bg-slate-100 flex flex-col p-8 justify-between">
          <h1 className="text-2xl text-[#060606] font-semibold font-display">
            <span className="text-red-500">e</span>Pasa
            <span className="text-red-500">Buy</span>Mo
          </h1>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-[#060606] bg-transparent py-2 my-2 outline-none focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-[#060606] bg-transparent py-2 my-2 outline-none focus:outline-none"
            />
            <button className="w-full bg-[#060606] text-white rounded-lg p-1 my-3">
              Register
            </button>
            <div className="flex items-center justify-center relative py-2">
              <div className="w-1/2 h-[1px] bg-black"></div>
              <p className="text-center text-xs text-gray-500 absolute bg-slate-100 px-1">
                OR
              </p>
            </div>
            <button className="flex items-center justify-center w-full bg-white text-[#de5246] rounded-lg p-1 my-3 border-[1px] border-[#de5246] ">
              <FcGoogle className="mr-2" />
              Sign Up with Google
            </button>
          </div>

          <p className="text-xs font-thin text-[#060606]">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-400 ml-1 underline underline-offset-2 italic"
            >
              Sign in.
            </Link>
          </p>
        </div>
        <div className="relative w-3/5 h-full hidden md:flex flex-col ">
          <img src={loginImg} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Register;
