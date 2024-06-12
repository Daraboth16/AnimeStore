import { useState } from "react";
import { useAuth } from "../Data/CartContext";
import { Link, useNavigate } from "react-router-dom";
import logIMG from "../assets/image/login.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/"); // Replace "/" with the actual route you want to navigate to
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="relative 
      h-[100vh] w-full bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${logIMG})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 w-80 p-8 mx-auto bg-opacity-90 rounded-lg border-1 border-green-400 shadow-lg">
        <h1 className="text-2xl text-center text-white mb-4">Log in</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative mb-8">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-2 px-8 rounded-full border-2 border-green-400 bg-transparent text-white focus:outline-none focus:border-4 focus:border-green-400"
              placeholder="Username"
            />
          </div>
          <div className="relative mb-8">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-8 rounded-full border-2 border-green-400 bg-transparent text-white focus:outline-none focus:border-4 focus:border-green-400"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between mb-8">
            <label className="text-white">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="mr-2"
              />
              Show Password
            </label>
          </div>
          <button
            type="submit"
            className="w-11/12 mx-auto block py-2.5 mt-4 text-white font-bold bg-green-800 hover:bg-green-600 rounded-full border-2 border-green-400"
          >
            Log in
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
        <div className="text-center text-xs text-white mt-6">
          Not a member?{" "}
          <Link className="no-underline" to="/">
            Log in as a guest?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
