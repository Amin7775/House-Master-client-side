import { useContext, useEffect, useState } from "react";
import MyServicesBanner from "./MyServicesBanner/MyServicesBanner";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";
import MyServicesCard from "./MyServicesCard";
import { Helmet } from "react-helmet-async";

const Myservices = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [createdServices, setCreatedServices] = useState([]);
  const [allServices, setAllservices] = useState([]);

  useEffect(() => {
    axios
      .get(`https://house-master-server.vercel.app/services/data?email=${user?.email}`)
      .then((data) => {
        setCreatedServices(data.data);
        setAllservices(data.data);
      });
  }, []);
  const exist = createdServices.length;
  console.log(exist);
  return (
    <div className="bg-[#fbfbfa] min-h-screen">
      <Helmet>
        <title>House Master | My Services</title>
      </Helmet>
      <MyServicesBanner></MyServicesBanner>

      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-medium mt-10 h-full">
          Manage Services
        </h1>

        <div className="my-16">
          {createdServices.length > 0 ? (
            <div className="grid grid-cols-3 gap-16">
              {createdServices.map((createdService) => (
                <MyServicesCard
                  key={createdService._id}
                  createdService={createdService}
                  setCreatedServices={setCreatedServices}
                  allServices={allServices}
                  setAllservices={setAllservices}
                ></MyServicesCard>
              ))}
            </div>
          ) : (
            <h1 className="text-center text-3xl mx-auto h-full my-auto">
              You Do Not Have Any Services Added. <br />
              Please Add Services From Add Service Page
            </h1>
          )}
        </div>

        <div className="grid grid-cols-3 gap-5"></div>
      </div>
    </div>
  );
};

export default Myservices;
