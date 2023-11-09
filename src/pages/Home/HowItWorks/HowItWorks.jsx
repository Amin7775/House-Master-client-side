import howItWorks from "../../../assets/images/HowItWoks3.jpg"

const HowItWorks = () => {
    return (
        <div className="md:h-[600px] bg-[#323233] p-1">
            <h1 className="text-white text-center font-semibold text-2xl md:text-4xl pt-5">Easiest Way To Get Our Service</h1>
            <div className="container mx-auto flex flex-col md:flex-row justify-center gap-5 md:gap-10 items-center h-full pb-10">
            <div className="w-1/2 mt-16 md:mt-0 md:w-1/3 p-1">
                <img src={howItWorks} alt="" />
            </div>
            <div className="flex flex-col gap-8 justify-start">
                {/* first */}
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <p className="bg-yellow-300 rounded-full w-10 md:w-16 h-10 md:h-16  flex items-center justify-center font-semibold text-2xl md:text-5xl">1</p>
                    <div>
                    <p className="text-white text-xl md:text-3xl font-medium mb-1 text-center md:text-start">Select the Service</p>
                    <p className="text-white text-base md:text-lg pr-2 text-center md:text-start px-4 md:px-0">Pick the service you are looking for from our website or the app.</p>
                    </div>
                </div>
                {/* second */}
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <p className="bg-yellow-300 rounded-full w-10 md:w-16 h-10 md:h-16  flex items-center justify-center font-semibold text-2xl md:text-5xl">2</p>
                    <div>
                    <p className="text-white text-xl md:text-3xl font-medium mb-1 text-center md:text-start  ">Pick your schedule</p>
                    <p className="text-white text-base md:text-lg pr-2 text-center md:text-start px-3 md:px-0">Pick your convenient date and time to avail the service. Pick the service provider based on their rating.</p>
                    </div>
                </div>
                {/* Third */}
                <div className="flex flex-col md:flex-row items-center gap-3">
                    <p className="bg-yellow-300 rounded-full w-10 md:w-16 h-10 md:h-16  flex items-center justify-center font-semibold text-2xl md:text-5xl">3</p>
                    <div>
                    <p className="text-white text-xl md:text-3xl font-medium mb-1 text-center md:text-start">Place Your Order & Relax</p>
                    <p className="text-white text-base md:text-lg pr-2 px-4 md:px-0 text-center md:text-start">Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.</p>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    );
};

export default HowItWorks;