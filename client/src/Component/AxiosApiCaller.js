// api.js
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify

const BASE_URL = 'https://foodyapi.vercel.app'; // Replace with your actual API URL

// Function to make a login request
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/login`, {
      email,
      password,
    });
    return response.data; // Assuming your server returns a token or user data
  } catch (error) {
    throw error;
  }
};

// Function to make a signup request
export const signup = async (email, username, password,isAdmin) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/signup`, {
      email,
      username,
      password,
      isAdmin
    });
    toast.success('User created successfully');
    return response.data; // Assuming your server returns a success message or user data
  } catch (error) {
    throw error;
  }
};


export const fetchFood = async ()=>{
try {
	const response = await axios.get(`${BASE_URL}/api/get_allmenus`);
	console.log(response.data);
  return response.data
} catch (error) {
	console.error(error);
}}
