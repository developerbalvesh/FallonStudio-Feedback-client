import axios from "axios";

export const adminCommunication = {
  getAllFeedback: async () => {
    try {
      return await axios.get(import.meta.env.VITE_SERVER + "/feedback/get-all");
    } catch (error) {
      throw error;
    }
  },
};
