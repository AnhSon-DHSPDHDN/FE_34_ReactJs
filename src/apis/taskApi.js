import axios from "axios";

export const TasksApi = {
  getAllTasks: async (params) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BE_URL}tasks`, {
        params: {
          _sort: "createAt",
          _order: "desc",
          ...params,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  createTask: async (task) => {
    try {
      await axios.post(`${process.env.REACT_APP_BE_URL}tasks`, task);
    } catch (error) {
      console.log(error);
    }
  },
  removeTaskById: async (id) => {
    // Để xoá task thì mình phải biết id => gửi theo ID để json-server hiểu task cần xoá, => DELETE của json-server
    try {
      await axios.delete(`${process.env.REACT_APP_BE_URL}tasks/${id}`);
    } catch (error) {
      console.log(error);
    }
  },
  makeDoneTaskById: async (id, payload) => {
    // endpoint của update cũng có thêm /:id giống như delete và gửi thêm phần body (payload)
    try {
      await axios.patch(`${process.env.REACT_APP_BE_URL}tasks/${id}`, payload);
    } catch (error) {
      console.log(error);
    }
  },
};
