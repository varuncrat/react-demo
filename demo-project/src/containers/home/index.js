import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./index.css";

const Home = () => {
  const slots = useSelector((state) => state.timeSlots);
  const history = useHistory();

  /**
   * to route on the slot details page
   * @param {*} id
   */
  const showDetails = (id) => {
    history.push(`/about/${id}`);
  };

  return (
    <div>
      <h1 className="page-heading">Time Slots</h1>
      {slots.length &&
        slots.map((slot) => {
          return (
            <div
              key={slot.id}
              className={`list-item ${
                slot.isBooked ? "booked-slot" : "available-slot"
              }`}
              onClick={() => showDetails(slot.id)}
            >
              <div>{`Slot: ${slot.startTime} to ${slot.endTime}`}</div>
              <div className="booked-text">
                {slot.isBooked ? "Booked" : "Available"}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
