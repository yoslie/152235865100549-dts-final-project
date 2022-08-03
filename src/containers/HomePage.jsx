import React, { useEffect, useState } from "react";
import axios from "axios";
import API_ENDPOINT from "../api/api-endpoint";

import RestaurantList from "../components/RestaurantList";

const HomePage = () => {
  const [ restaurantList, setRestaurantList ] = useState([]);
  
  useEffect(() => {
    const fetchRestaurantList = async () => {
      try {
        const response = await axios.get(API_ENDPOINT.RESTAURANT_LIST);
        setRestaurantList(response.data.restaurants);
      } catch (error) {
        console.log('Error', error);
      }
    }

    fetchRestaurantList();
  }, []);
  
  return (
    <RestaurantList data={restaurantList} />
  );
};

export default HomePage;
