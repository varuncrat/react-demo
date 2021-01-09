import { UPDATE_SLOT } from "../constants";
import timeSlots from "../constants/timeSlots.json";

const initialState = timeSlots;
/**
 * reducer to mange the time slots in store
 * @param {*} state
 * @param {*} action
 */
const timeSlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SLOT:
      return state.map((slot) => {
        if (slot.id === action.payload.id) {
          return action.payload;
        } else {
          return slot;
        }
      });
    default:
      return state;
  }
};
export default timeSlotsReducer;
