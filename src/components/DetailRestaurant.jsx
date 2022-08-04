import API_ENDPOINT from "../api/api-endpoint";
import { StarIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const DetailRestaurant = ({ data }) => {
  return (<div className="bg-white">
  <div className="pt-2">

    {/* Product info */}
    <div className="max-w-2xl mx-auto pt-4 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-8 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
      <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{data.name || "-"}</h1>
      {/* Image gallery */}
      <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img
            src={data.pictureId ? API_ENDPOINT.RESTAURANT_IMG(data.pictureId) : process.env.PUBLIC_URL + "assets/icon/iconNoImage.svg"}
            alt="Detail Restaurant"
            className="w-auto h-auto object-center object-cover"
          />
        </div>
      </div>
      </div>

      {/* Options */}
      <div className="mt-4 pt-12 lg:mt-0 lg:row-span-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl text-gray-900">{data.city || "-"}</p>
        <p className="text-lg text-gray-600">{data.address || "-"}</p>

        {/* Reviews */}
        <div className="mt-6">
          <h3 className="sr-only">Rating</h3>
          <div className="flex flex-col">
            <div className="flex items-start">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    data.rating && data.rating > rating ? 'text-gray-900' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{data.rating || "0"} out of 5 stars</p>
            <div className="ml-3 text-sm font-medium text-blue-600">
              {/* {data.customerReviews.length} data */}
            </div>
            <div className="mt-4">
              <ul className="pl-4 list-disc text-sm space-y-2">
                {data.customerReviews.map((list, index) => (
                  <li key={index} className="text-gray-400">
                    <div className="text-lg text-gray-900">{list.name}</div>
                    <div className="text-gray-600">{list.date}</div>
                    <div className="mt-2 text-gray-800">{list.review}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        {/* Description and details */}
        <div>
          <h3 className="sr-only">Description</h3>

          <div className="space-y-6">
            <p className="text-base text-gray-900">{data.description}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-gray-900">Foods</h3>
            <div className="mt-4">
              <ul className="pl-4 list-disc text-sm space-y-2">
                {data.menus.foods.map((food) => (
                  <li key={food.name} className="text-gray-400">
                    <span className="text-gray-600">{food.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900">Drinks</h3>
            <div className="mt-4">
              <ul className="pl-4 list-disc text-sm space-y-2">
                {data.menus.drinks.map((drink) => (
                  <li key={drink.name} className="text-gray-400">
                    <span className="text-gray-600">{drink.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  )
}

export default DetailRestaurant;