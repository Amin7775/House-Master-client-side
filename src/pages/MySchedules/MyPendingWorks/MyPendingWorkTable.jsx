import { useEffect, useState } from "react";
import TableRow from "./TableRow";

const MyPendingWorkTable = ({ booked, setBooked }) => {
    
  return (
    <div className="overflow-x-hidden mt-10">
      <table className="table">
        {/* head */}
        <thead className="border-y-2">
          <tr>
            <th>Service</th>
            <th>Price</th>
            <th>Service Area</th>
            <th>User Email</th>
            <th>Booking Date</th>
            <th>Set Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {booked.map((book) => (
            <TableRow key={book._id} book={book} booked={booked} setBooked={setBooked}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPendingWorkTable;
