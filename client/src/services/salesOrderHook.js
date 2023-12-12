import URL_API from "../config";

export const getSalesOrders = async () => {
  try {
    const res = await fetch(`${URL_API}/sales-order`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const createSalesOrders = async (salesOrder) => {
  try {
    const res = await fetch(`${URL_API}/sales-order`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(salesOrder),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getsalesOrder = async (id) => {
  try {
    const res = await fetch(`${URL_API}/sales-order/${id}`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
