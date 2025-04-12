/* eslint-disable no-unused-vars */
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "x-api-key": "hyperislandCourse06",
  },
});

export async function MoviesApi() {
  try {
    const response = await client.get("/movies");
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    }
  }
}

export async function MovieApi(id) {
  try {
    const response = await client.get(`/movies/${id}`);
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    }
  }
}

export async function checkDiscount({ code }) {
  try {
    const response = await client.get(`/dis?code=${code}`);
    return response;
  } catch (error) {
    if (error.response) {
      console.error("Error Response:", error.response);
    } else if (error.request) {
      console.error("Error Request:", error.request);
    }
  }
}

export async function userLogin({ username, password }) {
  const response = await client({
    method: "post",
    url: "/login",
    data: { username, password },
  });
  return response;
}

export async function createProduct(params) {
  const response = await client({
    method: "post",
    url: "/movies",
    data: params,
  });
  return response;
}

export async function updateProduct(id, newProduct) {
  const response = await client({
    method: "patch",
    url: `/movies/${id}`,
    data: newProduct,
  });
  return response;
}
