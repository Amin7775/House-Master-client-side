import howItWorks from "../../../assets/images/HowItWoks3.jpg"

const HowItWorks = () => {
    return (
        <div className="h-[600px] bg-[#323233] ">
            <h1 className="text-white text-center font-semibold text-4xl pt-5">Easiest Way To Get Our Service</h1>
            <div className="container mx-auto flex justify-center gap-10 items-center h-full pb-10">
            <div className="w-1/3">
                <img src={howItWorks} alt="" />
            </div>
            <div className="flex flex-col gap-8 justify-start">
                {/* first */}
                <div className="flex items-center gap-3">
                    <p className="bg-yellow-300 rounded-full w-16 h-16  flex items-center justify-center font-semibold text-5xl">1</p>
                    <div>
                    <p className="text-white text-3xl font-medium mb-1">Select the Service</p>
                    <p className="text-white text-lg">Pick the service you are looking for from our website or the app.</p>
                    </div>
                </div>
                {/* second */}
                <div className="flex items-center gap-3">
                    <p className="bg-yellow-300 rounded-full w-16 h-16  flex items-center justify-center font-semibold text-5xl">2</p>
                    <div>
                    <p className="text-white text-3xl font-medium mb-1">Pick your schedule</p>
                    <p className="text-white text-lg">Pick your convenient date and time to avail the service. Pick the service provider based on their rating.</p>
                    </div>
                </div>
                {/* Third */}
                <div className="flex items-center gap-3">
                    <p className="bg-yellow-300 rounded-full w-16 h-16  flex items-center justify-center font-semibold text-5xl">3</p>
                    <div>
                    <p className="text-white text-3xl font-medium mb-1">Place Your Order & Relax</p>
                    <p className="text-white text-lg">Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.</p>
                    </div>
                </div>
               
            </div>
            </div>
        </div>
    );
};

export default HowItWorks;