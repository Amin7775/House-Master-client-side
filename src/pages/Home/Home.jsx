import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Customer from "./CustomerFeedback/Customer";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import PopularServices from "./PopularServices/PopularServices";
import { useEffect, useState } from "react";
// import Banner2 from "./Banner/Banner2";


const Home = () => {
    const loadedData = useLoaderData()
    

    // console.log(filter)
    return (
        <div className="bg-[#fbfbfa]">
            <Banner ></Banner>
            <PopularServices filterData={loadedData}></PopularServices>
            {/* <Banner2></Banner2> */}
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Customer></Customer>
        </div>
    );
};

export default Home;