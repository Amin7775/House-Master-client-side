import { AiOutlineLine } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter } from "react-simple-typewriter";
// import img from "../../../assets/images/HowItWoks3.jpg";

// https://i.ibb.co/JpGYNjC/cus-1.jpg
// https://i.ibb.co/2v9KBFH/cus-2.jpg
// https://i.ibb.co/d5jt3xj/cus-3.jpg
// https://i.ibb.co/W606VwM/cus-4.jpg

const Customer = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    //   speed: 2000,
    //   autoplaySpeed: 8000,
      // cssEase: "linear"
  };
  return (
    <div className="md:h-[600px] bg-[#fbfbfa] px-2 md:px-7 max-w-[400px] md:max-w-full mx-auto  mb-0">
      <div className="container mx-auto mt-12 pb-10 px-2">
        <h1 className="font-semibold">
          <AiOutlineLine className="inline"></AiOutlineLine> SOME HAPPY FACES
        </h1>
        <h1 className="mt-3 font-bold text-3xl ">
          Real <span className="text-red-500"><Typewriter words={['Happy Customers','Stories','Experiences','Testimonials']} loop={[100]}/></span>
        </h1>
      </div>
      <div className="container mx-auto md:max-h-[500px] bg-[#fbfbfa] px-2 md:px-0">
        <Slider {...settings}>
          {/* 1 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-yellow-300 flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span>Such service
                  platforms are available in other countries. I’ve personally
                  used those when I was abroad. I’m very pleased that such a
                  portal is available here in Bangladesh as well. Thank you
                  House Master.
                </p>
                <h1 className="text-lg font-medium mt-3 md:mt-5">- Zabeen Yusuf Nur</h1>
                <h1 className="text-sm md:mt-1 font-medium">
                  IT Consultant, Australia
                </h1>
              </div>
              <img
                src="https://i.ibb.co/JpGYNjC/cus-1.jpg"
                className="w-full order-1 md:order-2 md:w-1/3 lg:w-1/3"
                alt=""
              />
            </div>
          </div>
          {/* 2 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-yellow-300 flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span>It was my
                  marriage and wasn’t getting schedule from any beauty parlor.
                  So, I downloaded House Master app and found that it has all of my
                  requirements. The beautician arrived in time and was really
                  amazing. Thank you.
                </p>
                <h1 className="text-lg font-medium mt-3 md:mt-5">- Zeba Fariba</h1>
                <h1 className="text-sm md:mt-1 font-medium">Management Trainee</h1>
              </div>
              <img
                src="https://i.ibb.co/2v9KBFH/cus-2.jpg"
                className="w-full order-1 md:order-2 md:w-1/3"
                alt=""
              />
            </div>
          </div>{" "}
          {/* 3 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-yellow-300 flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span>House Master
                  services are very helpful for working women like me. They were
                  on time as per the schedule to provide the service, and I’m
                  very satisfied with their quality of service.
                </p>
                <h1 className="text-lg font-medium mt-3 md:mt-5">- Saima Ahmad</h1>
                <h1 className="text-sm md:mt-1 font-medium">
                  Associate Professor,Bangladesh Open University
                </h1>
              </div>
              <img
                src="https://i.ibb.co/d5jt3xj/cus-3.jpg"
                className="w-full order-1 md:order-2 md:w-1/3"
                alt=""
              />
            </div>
          </div>{" "}
          {/* 4 */}
          <div className="pb-2">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-2/3 border-l-[15px] order-2 md:order-1 border-yellow-300 flex flex-col gap-2 justify-center pl-8 lg:pl-16 pb-5 md:mb-0">
                <p className="text-lg md:text-2xl font-light pr-10">
                  <span className="text-3xl lg:text-6xl font-bold">“</span>Initially I was
                  reluctant. I wasn’t sure how an online platform would be for booking home services.
                  House Master was able to complete the job just as I imagined it
                  to be. Thanks to them, they made it possible.
                </p>
                <h1 className="text-lg font-medium mt-3 md:mt-5">- Arif Ur Rahman</h1>
                <h1 className="text-sm md:mt-1 font-medium">Partner,Flyout BD</h1>
              </div>
              <img
                src="https://i.ibb.co/W606VwM/cus-4.jpg"
                className="w-full order-1 md:order-2 md:w-1/3"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Customer;
