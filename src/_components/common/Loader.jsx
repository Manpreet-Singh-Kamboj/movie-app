import clsx from "clsx";

const Loader = ({ classes }) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center h-[20vh] bg-black",
        classes
      )}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-slow"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="white"
          strokeWidth="8"
          fill="black"
        />
        <circle cx="50" cy="50" r="8" fill="white" />
        <circle cx="50" cy="15" r="6" fill="white" />
        <circle cx="85" cy="50" r="6" fill="white" />
        <circle cx="50" cy="85" r="6" fill="white" />
        <circle cx="15" cy="50" r="6" fill="white" />
      </svg>
      <style>{`
          @keyframes spin-slow {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
          }
        `}</style>
    </div>
  );
};

export default Loader;
