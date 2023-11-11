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
        <div className="my-10 ">
            <h1 className="text-4xl text-center font-semibold">My Bookings</h1>
            {   booked.length>0 ?
                <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    booked.map(book=> <MyBookingsCard key={book._id} book={book} setBooked={setBooked} remainingBookedServices={remainingBookedServices} setRemainingBookedServices={setRemainingBookedServices}></MyBookingsCard>)
                }
            </div>
                :
                <div>
                  <h1 className="my-10 text-2xl text-red-500 font-medium text-center">You Have Not Booked/Purchased Any Services Yet. </h1> 
                </div>
            }
        </div>
    );
};

export default MyBookings;