import Slider from "react-slick";

const PopularServicesCard = ({filterData}) => {
    // console.log(filterData[0])
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
        <div>
        
        <Slider {...settings}>
          <div >
            <div className="grid grid-cols-2">

          <div>
                    <img className=" w-full" src={filterData[0]?.servicePhotoURL} alt="" />
            </div>
                <div className="flex h-full flex-col justify-center">
                    <div className="px-10">
                    <h1 className="text-5xl font-bold border-b-8 pb-1 border-yellow-300 inline">{filterData[0]?.service}</h1>
                    </div>
                </div>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          
        </Slider>
      </div>
    );
};

export default PopularServicesCard;