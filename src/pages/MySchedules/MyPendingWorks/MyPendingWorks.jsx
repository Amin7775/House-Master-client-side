import { useContext, useEffect, useState } from "react";
import MyPendingWorkTable from "./MyPendingWorkTable";
import { AuthContext } from "../../../provider/AuthProvider";

const MyPendingWorks = () => {
    const {user}=useContext(AuthContext)
    const [booked,setBooked]=useState([])
    const [remainingBookedServices,setRemainingBookedServices]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/booked/provider?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBooked(data)
            setRemainingBookedServices(data)
        })
    },[])

    return (
        <div className="pt-10 pb-20">
            <h1 className="text-4xl text-center font-semibold">My Pending Works</h1>
            {
                booked.length>0 ? 
            <div>
                <MyPendingWorkTable booked={booked} setBooked={setBooked}></MyPendingWorkTable>
            </div>
            :
            <div>
                <h1 className="my-10 text-2xl text-red-500 font-medium text-center">You Do Not Have Any Pending Works Right Now</h1>
            </div>
            }
        </div>
    );
};

export default MyPendingWorks;