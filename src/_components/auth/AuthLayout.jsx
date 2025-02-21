import { useLocation } from "react-router-dom";
import SignIn from "./_components/SignIn";
import SignUp from "./_components/SignUp";

const AuthLayout = () => {
  const { pathname } = useLocation();

  return (
    <section className="w-screen h-screen flex">
      <div className="hidden lg:flex md:w-[25%] relative">
        <img
          src="/auth-image.svg"
          alt="Movie App"
          loading="lazy"
          className="h-full object-cover object-center"
        />
        <div
          className="absolute left-1/2 top-1/2 w-[90%] px-6 py-4 text-white font-semibold text-center 
                  transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-xl backdrop-blur-3xl shadow-lg"
        >
          <h2 className="md:text-xl font-bold">
            🎬 Unlimited Movies, Anytime, Anywhere!
          </h2>
          <p className="mt-2 text-sm md:text-base opacity-85">
            🍿 Watch your favorite movies & shows in HD <br />
            🔥 New releases every week <br />
            🚀 Stream seamlessly on any device
          </p>
        </div>
      </div>

      {pathname.includes("sign-in") ? <SignIn /> : <SignUp />}
    </section>
  );
};

export default AuthLayout;
