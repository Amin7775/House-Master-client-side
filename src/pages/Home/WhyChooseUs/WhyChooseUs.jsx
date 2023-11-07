import { AiOutlineLine } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { GrTransaction } from "react-icons/gr";
import { RiExchangeDollarFill } from "react-icons/ri";

import image from "../../../assets/images/why choose us.jpg"

const WhyChooseUs = () => {
    return (
        <div className="w-full bg-[#f5f5f9] py-5">
            <div className="container mx-auto">
                <h1 className="font-semibold"><AiOutlineLine className="inline"></AiOutlineLine> WHY CHOOSE US</h1>
                <p className="text-3xl font-bold">Because We Care About You</p>
                <br />
                <p className="font-semibold">We Also Provide - </p>
                <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                    <div className="grid grid-cols-2 gap-10">
                       <div className="text-center py-5 px-8">
                       <BsHeadset className=" text-6xl w-full mb-1"></BsHeadset>
                       <h3 className="font-medium mb-2">Order Online</h3>
                       <p className="">Enjoy the convenience of booking from the comfort of your home with our user-friendly online ordering platform.</p>
                       </div>
                       <div className="text-center py-5 px-8 ">
                       <TbTruckDelivery className=" text-6xl w-full mb-1"></TbTruckDelivery>
                       <h3 className="font-medium mb-2">Fast Service</h3>
                       <p>We Emphasize a quick response and service availability, ensuring that users can find and book services promptly.</p>
                       </div>
                       <div className="text-center py-5 px-8 ">
                       <GrTransaction className=" text-6xl w-full mb-1"></GrTransaction>
                       <h3 className="font-medium mb-2">Secure Transactions</h3>
                       <p>Assure secure and reliable payment processing for service transactions to build trust and confidence.</p>
                       </div>
                       <div className="text-center py-5 px-8 ">
                       <RiExchangeDollarFill className=" text-6xl w-full mb-1"></RiExchangeDollarFill>
                       <h3 className="font-medium mb-2">Money Return</h3>
                       <p>We stand by our services. If you're not completely satisfied,you can return get refunds for selected services.</p>
                       </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <img className="" src={image} alt="" />
                </div>
                </div>
                <div className="grid grid-cols-3 h-32 mt-5  bg-yellow-300">
                    <div className="text-center my-auto border-r-4 border-black">
                        <h1 className="text-5xl font-bold">11,000 +</h1>
                        <p className="text-xl font-medium">Service Providers</p>
                    </div>
                    <div className="text-center my-auto">
                        <h1 className="text-5xl font-bold">1,50,000 +</h1>
                        <p className="text-xl font-medium">Orders Served</p>
                    </div>
                    <div className="text-center my-auto border-l-4 border-black">
                        <h1 className="text-5xl font-bold ">1,15,600 +</h1>
                        <p className="text-xl font-medium">5 Start Received</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;