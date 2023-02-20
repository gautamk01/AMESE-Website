


const make_center = "flex flex-wrap justify-center items-center"
const Dash = () => (
    <div className=" flex flex-wrap flex-col h-[100vh] w-[100%]">
        <div className={`bg-white h-[100vh] w-[16%] z-10 flex flex-wrap flex-row`}>
            <div className={`bg-green-400 w-[100%] h-[10%] ${make_center}`}>
                <div className=" bg-white w-[60%] h-[40%] flex flex-wrap justify-center items-center rounded-lg ">LOGO</div>
            </div>
            <div className={` bg-green-400 w-[100%] h-[30%] flex flex-col flex-wrap items-center `}>
                <div className="h-10 w-10 rounded-full bg-gray-500 mt-5 mb-5 "></div>
                <h1 className="h-10 w-[100%] text-center">Gautam Krishna M</h1>
            </div>
            <div className=" bg-green-400 w-[100%] h-[50%]"></div>
            <div className=" bg-green-400 w-[100%] h-[10%]"></div>
        </div>
        <div className=" bg-red-500 h-[100vh] w-[100%] rounded-t-[30px] z-0"></div>
    </div>
);
export default Dash;