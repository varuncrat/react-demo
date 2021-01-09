import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateSlot } from "./actions";
import { useForm } from "react-hook-form";
import "./index.css";

const About = (props) => {
  const { id } = props.match.params;
  const history = useHistory();
  const dispatch = useDispatch();
  const slots = useSelector((state) => state.timeSlots);
  const [selectedSlot, setSelectedSlot] = useState({});
  const { handleSubmit, register, reset, formState } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    let timeSlot = slots.find((slot) => slot.id === +id);
    setSelectedSlot(timeSlot);
    reset(timeSlot);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slots, id]);

  /**
   * to save the updated slot details
   * @param {*} data
   */
  const saveDetails = (data) => {
    let modifiedData = { ...selectedSlot, isBooked: true, ...data };
    dispatch(updateSlot(modifiedData));
    history.push("/");
  };

  /**
   * to route on the home page
   */
  const onCancel = () => {
    history.push("/");
  };

  return (
    <div className="about-container">
      {selectedSlot ? (
        <div className="about-card">
          <form
            onSubmit={handleSubmit((data) => saveDetails(data))}
            className="form"
          >
            <div className="container">
              <section>
                <h2>Booking Details</h2>
              </section>
              <section>
                <label>First Name:</label>
                <input
                  name="firstName"
                  className="input"
                  ref={register({
                    required: true,
                  })}
                />
              </section>
              <section>
                <label>Last Name:</label>
                <input
                  name="lastName"
                  className="input"
                  ref={register({
                    required: true,
                  })}
                />
              </section>
              <section>
                <label>Phone Number:</label>
                <input
                  name="phone"
                  className="input"
                  ref={register({
                    required: true,
                  })}
                />
              </section>
              <div className="button-container">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={onCancel}
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="save-button"
                  disabled={!formState.isDirty || !formState.isValid}
                >
                  SAVE {formState.isValid}
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <h1>No Detail Found</h1>
      )}
    </div>
  );
};

export default About;
