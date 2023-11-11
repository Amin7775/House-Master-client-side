const MyBookingsCard = ({ book,remainingBookedServices,setRemainingBookedServices,setBooked }) => {
  const {
    _id,
    productId,
    service,
    providerName,
    servicePhotoURL,
    providerEmail,
    userEmail,
    date,
    price,
    specialInstruction,
    status
  } = book;

  const handleDelete =(_id)=>{
    console.log("clicked on ", _id)

    fetch(`http://localhost:5000/booked/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = remainingBookedServices.filter(
            (remainingBookedService) => remainingBookedService._id !== _id
          );
          setBooked(remaining)
          setRemainingBookedServices(remaining)
        }
      })

  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-100">
      <figure className="w-2/5">
        <img src={servicePhotoURL} className="h-full" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service}</h2>
        <p><span className="font-medium">Provider: </span>{providerName}</p>
        <p><span className="font-medium">Provider Email: </span>{providerEmail}</p>
        <p><span className="font-medium">Booking Date: </span>{date}</p>
        <p><span className="font-medium">Price: </span>{price}</p>
        <p><span className="font-medium">Status: </span>{status}</p>

        
        <div className="card-actions justify-end">
          <button onClick={()=>handleDelete(_id)} className="btn bg-yellow-300 hover:bg-yellow-400 text-black font-semibold">Delete Booking</button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsCard;
