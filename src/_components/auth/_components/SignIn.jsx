import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full lg:w-[75%] h-full bg-[#09071B] relative flex flex-col justify-center items-center gap-12">
      <img
        src="/auth-bg.svg"
        alt="Auth Background"
        loading="lazy"
        className="object-cover h-full w-full absolute top-0 left-0 z-[0]"
      />
      <div className="text-center">
        <h4 className="text-[#1CD5F8]">START YOUR DAY</h4>
        <h1 className="text-white text-4xl font-bold mt-[1rem]">
          Watch New Movie&apos;s
        </h1>
      </div>
      <form className="bg-white flex flex-col p-6 w-[70%] md:w-[40%] rounded-3xl gap-2 relative z-[10]">
        <label htmlFor="username" className="opacity-65 ml-[-0.2rem] text-sm">
          Email address or Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          placeholder="Your Email address or Username"
          className="border-[1px] py-2 px-4 rounded-full text-sm"
          onChange={handleChange}
          required
        />
        <label htmlFor="password" className="opacity-65 ml-[-0.2rem] text-sm">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          placeholder="Your Password"
          className="border-[1px] py-2 px-4 rounded-full text-sm"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-[#4F46E5] rounded-full py-2 text-white mt-[1.5rem]"
        >
          Sign in
        </button>
        <Link to="/sign-up" className="text-end text-sm text-[#4F46E5]">
          Don&apos;t have a account?
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
