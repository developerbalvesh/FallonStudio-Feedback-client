import axios from "axios";

export const publicCommunication = {
  addFeedback: async (data) => {
    try {
      return await axios.post(
        import.meta.env.VITE_SERVER + "/feedback/create",
        data
      );
    } catch (error) {
      throw error;
    }
  },
};
