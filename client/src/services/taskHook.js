import URL_API from "../config";

export const createTask = async (task) => {
  try {
    const res = await fetch(`${URL_API}/tasks`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getTasks = async () => {
  try {
    const res = await fetch(`${URL_API}/tasks`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getOperationType = async (id) => {
  try {
    const res = await fetch(`${URL_API}/operationType/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await fetch(`${URL_API}/task/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getTypeOperations = async () => {
  try {
    const res = await fetch(`${URL_API}/operationType`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const createOperationType = async (opType) => {
  try {
    const res = await fetch(`${URL_API}/operationType`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(opType),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const updateOperationTypeService = async (opType) => {
  try {
    const res = await fetch(`${URL_API}/operationType`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(opType),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
