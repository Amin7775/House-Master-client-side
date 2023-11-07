import { SiHomebridge } from "react-icons/si";
// https://i.ibb.co/QfVR4vX/h1-slide2-img-1.png
// https://i.ibb.co/rGKL66W/h1-slide3-img-1.png

const Banner = () => {
  return (
    <div className="carousel w-full h-[850px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/bPTXqxX/Banner1.jpg" className="w-full" />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="w-full flex justify-between items-center">
            <a href="#slide3" className="text-white text-5xl">
              ❮
            </a>
            <div className="flex flex-col gap-5 max-w-5xl justify-center text-center">
              <SiHomebridge className="text-[150px] text-center w-full text-yellow-300"></SiHomebridge>
              <p className="text-white font-bold text-8xl">
                Expert And Fast Team
              </p>
              <div className="flex mt-5 justify-center">
                <img
                  className="w-96"
                  src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png"
                  alt=""
                />
                <img
                  className="w-96"
                  src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png"
                  alt=""
                />
              </div>
              <p className="text-white text-4xl">
                Local Same Day Delivery Specialists
              </p>

              <p className="text-white text-2xl">
                One-stop solution for your services. Order any service, anytime.
              </p>
            </div>
            <a href="#slide2" className="text-white text-5xl">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Slider 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/0tC593v/banner2.jpg" className="w-full" />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="w-full flex justify-between items-center">
            <a href="#slide1" className="text-white text-5xl">
              ❮
            </a>
            <div className="flex flex-col gap-5 max-w-5xl justify-center text-center">
              <img
                src="https://i.ibb.co/rGKL66W/h1-slide3-img-1.png"
                className="w-[150px] mx-auto"
                alt=""
              />
              <p className="text-white font-bold text-8xl">Pay On Spot</p>
              <div className="flex mt-5 justify-center">
                <img
                  className="w-96"
                  src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png"
                  alt=""
                />
                <img
                  className="w-96"
                  src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png"
                  alt=""
                />
              </div>
              <p className="text-white text-4xl">
                Easy On-Spot , Card Payment Methods
              </p>
            </div>
            <a href="#slide3" className="text-white text-5xl">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* Slider 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/5cBZ2Zc/Banner3.jpg" className="w-full" />
        <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
          <div className="w-full flex justify-between items-center">
            <a href="#slide2" className="text-white text-5xl">
              ❮
            </a>
            <div className="flex flex-col gap-5 max-w-5xl justify-center text-center">
              <img
                src="https://i.ibb.co/QfVR4vX/h1-slide2-img-1.png"
                className="w-[70px] mx-auto"
                alt=""
              />
              <p className="text-white font-bold text-8xl">
                Your Personal Assistant
              </p>
              <div className="flex mt-5 justify-center">
                <img
                  className="w-96"
                  src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png"
                  alt=""
                />
                <img
                  className="w-96"
                  src="https://i.ibb.co/m8tGt8f/h6-slide-2-separator.png"
                  alt=""
                />
              </div>
              <p className="text-white text-4xl">
                Super Fast And Fuss Free Service
              </p>
            </div>
            <a href="#slide1" className="text-white text-5xl">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
