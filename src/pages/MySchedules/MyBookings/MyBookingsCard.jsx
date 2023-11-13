import Swal from "sweetalert2";

const MyBookingsCard = ({
  book,
  remainingBookedServices,
  setRemainingBookedServices,
  setBooked,
}) => {
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
    status,
  } = book;

  const handleDelete = (_id) => {
    // console.log("clicked on ", _id)

    // fetch(`https://house-master-server.vercel.app/booked/${_id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount > 0) {
    //       const remaining = remainingBookedServices.filter(
    //         (remainingBookedService) => remainingBookedService._id !== _id
    //       );
    //       setBooked(remaining);
    //       setRemainingBookedServices(remaining);
    //     }
    //   });

    
    //swal
    Swal.fire({
      title: "Are you sure about deleting this service?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://house-master-server.vercel.app/booked/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              const remaining = remainingBookedServices.filter(
                (remainingBookedService) => remainingBookedService._id !== _id
              );
              setBooked(remaining);
              setRemainingBookedServices(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Your Service  has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-gray-100">
      <figure className="w-2/5">
        <img src={servicePhotoURL} className="h-full" alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service}</h2>
        <p>
          <span className="font-medium">Provider: </span>
          {providerName}
        </p>
        <p>
          <span className="font-medium">Provider Email: </span>
          {providerEmail}
        </p>
        <p>
          <span className="font-medium">Booking Date: </span>
          {date}
        </p>
        <p>
          <span className="font-medium">Price: </span>
          {price}
        </p>
        <p>
          <span className="font-medium">Status: </span>
          {status}
        </p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-yellow-300 hover:bg-yellow-400 text-black font-semibold"
          >
            Delete Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingsCard;
