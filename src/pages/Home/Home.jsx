import Banner from "./Banner/Banner";
import Customer from "./CustomerFeedback/Customer";
import HowItWorks from "./HowItWorks/HowItWorks";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
// import Banner2 from "./Banner/Banner2";


const Home = () => {
    return (
        <div className="bg-[#fbfbfa]">
            <Banner ></Banner>
            {/* <Banner2></Banner2> */}
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Customer></Customer>
        </div>
    );
};

export default Home;