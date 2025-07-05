import { useState } from "react";

function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);

  return (
    <div className="w-[430px] bg-white p-8 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex justify-center mb-4">
        <h2 className="text-3xl font-semibold text-center">{isLoginMode ? "Login" : "Sign Up"}</h2>
      </div>
      {/* Tab controls */}
      <div className="relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden">
        <button onClick={() => setIsLoginMode(true)} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode ? "text-white" : "text-black"}`}>Login</button>
        <button onClick={() => setIsLoginMode(false)} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode ? "text-white" : "text-black"}`}>Sign Up</button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-indigo-700 via-violet-400 to-violet-200 ${isLoginMode ? "left-0" : "left-1/2"}`}></div>
      </div>
      {/* Form section */}
      <form className="space-y-4">
        { !isLoginMode && (
            <input type="text" name="" id="" placeholder="Name" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-violet-500 placeholder-gray-500" />
        )}
        {/* Shared inout field */}
        <input type="email" name="" id="" placeholder="Email Address" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-violet-500 placeholder-gray-500"/>
        <input type="password" name="" id="" placeholder="Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-violet-500 placeholder-gray-500"/>
        {/* Signup field */}
        {!isLoginMode && (
            <input type="password" name="" id="" placeholder="Confirm Password" required className="w-full p-3 border-b-2 border-gray-300 outline-none focus:border-violet-500 placeholder-gray-500"/>
        )}
        {/* Forget password for login */}
        { isLoginMode && (
            <div className="text-right">
                <p className="text-cyan-600 hover:underline">Forget password</p>
            </div>
        )}
        {/* Shared button */}
        <button className="w-full p-3 bg-gradient-to-r from-indigo-700 via-violet-400 to-violet-200 text-white rounded-full text-lg font-medium hover:opacity-90 transition">
            {isLoginMode ? "Login" : "SignUp"}
        </button>
        {/* Switch link */}
        <p className="text-center text-gray-600">{isLoginMode ? "Don't have an account" : "Already have an account"}
            <a className="text-cyan-600 hover:underline" href="#" onClick={(e) => setIsLoginMode(!isLoginMode)}> {isLoginMode ? "Sign up now" : "Login"}</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
