import axios from "axios";

export const getToolsApi = async () => {
  const response = await axios.get("/api/tools");
  return response.data;
};

export const deleteToolApi = async (id: string) => {
  await axios.delete(`/api/tools/${id}`);
  return id;
};
