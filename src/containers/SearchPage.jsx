import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import axios from "axios";
import API_ENDPOINT from "../api/api-endpoint";
import RestaurantList from "../components/RestaurantList";

const SearchPage = () => {
  const [ searchParams ] = useSearchParams();
  const query = searchParams.get("q")
  
  const [ dataRestaurant, setDataRestaurant ] = useState({
    data: [],
    errorMessage: "",
  });
  
  useEffect(() => {
    const fetchRestaurantList = async () => {
      try {
        const response = await axios.get(API_ENDPOINT.RESTAURANT_SEARCH(query));
        setDataRestaurant({
          ...dataRestaurant,
          data: response.data.restaurants,
          errorMessage: ''
        });
      } catch (error) {
        setDataRestaurant({
          ...dataRestaurant,
          data: [],
          errorMessage: error.response.data.message
        });
      }
    }

    fetchRestaurantList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      { !query ?
        <div className="px-8 text-xl text-red-600">
          Isian Kata Kunci Pencarian Tidak Boleh Kosong
        </div> : dataRestaurant.errorMessage ?
        <div className="px-8 text-xl text-red-600">
          { dataRestaurant.errorMessage }
        </div> : dataRestaurant.data.length === 0 ?
        <div className="px-8 text-xl text-blue-600">
          Pencarian dengan kata "{ query }" tidak ditemukan, silakan masukkan kata kunci lain.
        </div> :
        <RestaurantList data={dataRestaurant.data} />
      }
    </>
  );
};

export default SearchPage;
