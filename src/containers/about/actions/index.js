import { UPDATE_SLOT } from "../constants";

/**
 * to update the perticular slot
 * @param {*} slot
 */
export const updateSlot = (slot) => {
  return {
    type: UPDATE_SLOT,
    payload: slot,
  };
};
