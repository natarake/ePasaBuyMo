import { Link } from "react-router-dom";
import loginImg from "../assets/login.jpg";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="flex justify-center items-center w-[800px] h-[500px] bg-slate-300">
        <div className="relative w-3/5 h-full flex flex-col">
          <img src={loginImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="w-2/5 h-full bg-slate-100 flex flex-col p-8 justify-between">
          <h1 className="text-xl text-[#060606] font-semibold">ePasaBuyMo</h1>
          <h3 className="text-2xl font-semibold mb-4">Login</h3>

          <p className="text-xs font-thin">
            Don't have an account?
            <Link
              to="/register"
              className="text-blue-400 ml-1 underline underline-offset-2 italic"
            >
              Sign up for free.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
