const Login = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gradient-to-br from-red-600  via-violet-500 to-cyan-300">
      <div className="md:py-12 md:px-10 py-8 px-6 bg-white/20 border border-white/10 rounded-lg">
        <h2 className="text-white text-xl font-bold mb-4">Login</h2>
        <form>
          <label className="font-light text-white text-lg block mb-2">Masukkan Nama</label>
          <input
            className="bg-white border text-white border-white/2 bg-white/10 rounded-lg px-4 py-2 w-full"
            type="text"
            name="username"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;