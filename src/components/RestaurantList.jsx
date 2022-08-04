import API_ENDPOINT from "../api/api-endpoint";
import { StarIcon } from '@heroicons/react/solid';

import { Link } from "react-router-dom";

const RestaurantList = ({ data }) => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto p-8 lg:max-w-7xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Restaurant List
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
          { data.map((restaurant) => (
            <div key={restaurant.id} className="group relative">
              <Link to={`/detail/${restaurant.id}`} className="">
                <div className="w-full min-h-80 bg-gray-700 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={API_ENDPOINT.RESTAURANT_IMG(restaurant.pictureId)}
                    alt={restaurant.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {restaurant.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{restaurant.city}</p>
                  </div>
                  <span>
                    <StarIcon className="block h-6 w-6 text-yellow-500" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900 text-center">
                      {restaurant.rating}
                    </p>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RestaurantList;