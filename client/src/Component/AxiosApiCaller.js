// api.js
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify

const BASE_URL = 'http://localhost:3000'; // Replace with your actual API URL

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

  
const options = {
  method: 'GET',
  url: 'https://the-mexican-food-db.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': 'daf28e7362msh91b4b87fd82b2afp1d9b4ejsnd2ef8e545828',
    'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  return response
} catch (error) {
	console.error(error);
}}
