// import { useEffect } from "react";

const TableRow = ({book,booked,setBooked}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedStatus = e.target.bookingStatus.value;
        const id = book._id;
    
        fetch(`https://house-master-server.vercel.app/booked/update/${id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ status: updatedStatus }),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if(data.modifiedCount > 0){
                const remaining = booked.filter(booking => booking._id !== id)
                const updated = booked.find(booking => booking._id == id)
                updated.status = updatedStatus
                const newBookings = [updated, ...remaining]
                setBooked(newBookings)
            }
          });
      };

    return (
        <tr key={book._id} className="border-b-2">
                {/* {setCurrentId(book._id)} */}
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className=" w-36 h-36">
                      <img
                        src={book?.servicePhotoURL}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-2xl">
                      {book?.service}
                    </div>
                    {/* <div className="text-sm opacity-50">United States</div> */}
                  </div>
                </div>
              </td>
              <td>{book?.price}</td>
              <td>{book?.serviceArea}</td>
              <td>{book?.userEmail}</td>
              <td>{book?.date}</td>
              <td>
                <form onSubmit={handleSubmit}>
                  <select name="bookingStatus" defaultValue={"Pending"} className="border-2 px-3 py-2">
                    <option value="Pending">
                      Pending
                    </option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <input type="submit" value="Submit" className="cursor-pointer hover:bg-yellow-400 border py-2 px-3 bg-yellow-300 ml-2"/>
                </form>
              </td>
              <td>{book.status}</td>
            </tr>
    );
};

export default TableRow;