const Wrapcompo = (props) => {
  console.log(props.changer);
  return (
    <div
      className={`duration-700 ease-in-out absolute inset-0 transition-transform transform ${
        props.changer == props.val
          ? "translate-x-0 z-20"
          : "z-10 translate-x-full"
      }`}
    >
      <div className="h-[100%] w-[100%] flex  flex-col justify-center items-center sm:flex-row">
        <div className="sm:h-[100%] sm:w-[30%] sm:bg-black h-[60%] w-[100%] bg-black"></div>
        <div className="sm:h-[100%] sm:w-[70%] sm:bg-white h-[40%] w-[100%] bg-white">
          <h1>{props.val}</h1>
        </div>
      </div>
    </div>
  );
};

export default Wrapcompo;
