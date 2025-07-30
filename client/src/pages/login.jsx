import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("username", username); 
      navigate("/messages"); 
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-900">
      <div className="md:py-12 md:px-10 py-8 pb-4 px-6 shadow bg-white/20 border border-white/10 rounded-lg">
        <h2 className="text-white text-xl font-bold mb-4">Login</h2>
        <form>
          <input
            className="bg-white border text-white border-white/2 bg-white/10 rounded-lg px-4 py-2 w-full"
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={handleLogin} className="bg-primary text-white w-full py-2 rounded my-8">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;