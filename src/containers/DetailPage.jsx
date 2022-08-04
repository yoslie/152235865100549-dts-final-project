import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import API_ENDPOINT from "../api/api-endpoint";
import DetailRestaurant from "../components/DetailRestaurant";
import { isEmpty } from "@firebase/util";

const DetailPage = () => {
  const { id } = useParams();
  const [ dataRestaurant , setDataRestaurant ] = useState({});
  
  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        const response = await axios.get(API_ENDPOINT.RESTAURANT_DETAIL(id));
        await setDataRestaurant({ ...response.data.restaurant });
      } catch (error) {
        console.log('Error', error);
      }
    }

    fetchRestaurantDetail();
  }, [id]);
  
  if (!isEmpty(dataRestaurant)) {
    return (
      <DetailRestaurant data={dataRestaurant} />
    );
  }
};

export default DetailPage;
