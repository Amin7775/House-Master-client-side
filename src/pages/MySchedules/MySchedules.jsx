import { Helmet } from "react-helmet-async";
import MyBookings from "./MyBookings/MyBookings";
import MyPendingWorks from "./MyPendingWorks/MyPendingWorks";

const MySchedules = () => {
  
  return (
    <div className="bg-[#fbfbfa] min-h-screen">
      <Helmet>
        <title>House Master | My Schedules</title>
      </Helmet>
      {/* banner */}
      <div
          className="hero h-[400px]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/3mXwsL7/Title-Banner.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-10"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <p className="mb-5 bg-yellow-300 text-black inline px-4 py-1">
                House Master
              </p>
              <h1 className="mt-5 text-5xl font-bold text-black">My Schedules</h1>
              
            </div>
          </div>
        </div>
      <div className="container mx-auto">
        <MyBookings></MyBookings>
      </div>
      <div className="container mx-auto">
        <MyPendingWorks></MyPendingWorks>
      </div>
    </div>
  );
};

export default MySchedules;
