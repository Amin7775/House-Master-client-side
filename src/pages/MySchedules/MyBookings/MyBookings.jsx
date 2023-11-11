import { useContext, useEffect, useState } from "react";
import MyBookingsCard from "./MyBookingsCard";
import { AuthContext } from "../../../provider/AuthProvider";

const MyBookings = () => {
    const {user}=useContext(AuthContext);
    const [booked,setBooked] = useState([]);
    const [remainingBookedServices,setRemainingBookedServices]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/booked?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBooked(data)
            setRemainingBookedServices(data)
        })
    },[])

    return (
        <div className="my-10 min-h-screen">
            <h1 className="text-4xl text-center font-semibold">My Bookings</h1>
            {   booked.length>0 ?
                <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    booked.map(book=> <MyBookingsCard key={book._id} book={book} setBooked={setBooked} remainingBookedServices={remainingBookedServices} setRemainingBookedServices={setRemainingBookedServices}></MyBookingsCard>)
                }
            </div>
                :
                <div className="">
                  <h1>You Do Not Have Any Booked Services</h1>  
                </div>
            }
        </div>
    );
};

export default MyBookings;