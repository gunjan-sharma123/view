// api/users.js

import axios from 'axios';
import apis from './api.json'

const BASE_URL = 'https://localhost:7006'; // Replace with your API base URL



//<==============================Get menu===========================================>
export const getMenuoptins = async () => {
  const response = await axios.get(BASE_URL+ apis.getmenudata);
  return response.data;
};
export const getMenuoptinsById = async (menu_id) => {
  const response = await axios.get(BASE_URL+ apis.getmenudatabyid +menu_id);
  return response.data;
};
 //<==============================Get menu===========================================>
 //<==============================Get menu===========================================>
export const getFooteroptins = async () => {
  const response = await axios.get(BASE_URL+ apis.getfooter);
  return response.data;
};
export const getFooteroptinsById = async (id) => {
  const response = await axios.get(BASE_URL+ apis.getfooterbyid +id);
  return response.data;
};
 //<==============================Get menu===========================================>
//<==============================Get Banner imges===========================================>
export const getBannerImg = async () => {
  const response = await axios.get(BASE_URL+ apis.getbannerimage);
  return response.data;
};
//<==============================Get Banner imges===========================================>
//<==============================Get Whats New===========================================>
export const getwhatsnew = async () => {
  const response = await axios.get(BASE_URL+ apis.getwhatsnew);
  return response.data;
};
//<==============================Get Whats New===========================================>
//<==============================Get Links===========================================>
export const getLinks = async () => {
  const response = await axios.get(BASE_URL+ apis.getlink);
  return response.data;
};
//<==============================Get Links===========================================>
//<==============================Get report===========================================>
export const getReport = async () => {
  const response = await axios.get(BASE_URL+ apis.getreport);
  return response.data;
};
//<==============================Get report===========================================>
//<==============================Get report===========================================>
export const getTender = async () => {
  const response = await axios.get(BASE_URL+ apis.gettender);
  return response.data;
};
//<==============================Get report===========================================>
//<==============================Get Slider imges===========================================>
export const getSliderImg = async () => {
  const response = await axios.get(BASE_URL+ apis.getsliderimage);
  return response.data;
};
//<==============================Get Slider imges===========================================>
//<==============================Home Page===========================================>
export const getHomePage = async () => {
  const response = await axios.get(BASE_URL+ apis.gethomepage+21);
  return response.data;
};
//<==============================Home Page===========================================>

export const updateUser = async (userId, updatedUserData) => {
  const response = await axios.put(`${BASE_URL}/${userId}`, updatedUserData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await axios.delete(`${BASE_URL}/${userId}`);
  return response.data;
};
