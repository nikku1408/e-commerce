import React from "react";
import { useState } from "react";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
  });

  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;

  const onChange = () => {};

  return (
    <main className="max-w-md px-2 mx-auto">
      {/* in large screen also we see max width as medium [max-w-md] */}
      <h1 className="text-3xl text-center mt-6 font-bold">Create Listing</h1>

      <form action="">
        <p className="text-lg mt-6 font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="Sell"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg 
            transition duration-150 ease-in-out w-[100%] ${
              type === "same" ? "bg-slate-600 text-white" : ""
            }`}
          >
            Sell
          </button>{" "}
          <button
            type="button"
            id="type"
            value="Sell"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
            hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-[100%] ${
              type === "rent" ? "" : "bg-slate-600 text-white"
            }`}
          >
            Rent
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength="32"
          minLength="10"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 
          rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white focus:border-slate-600
          mb-6"
        />

        <div className="flex space-x-6 justify-start mb-6">
          <div className="">
            <p className="text-lg font-semibold ">Beds</p>
            <input
              type="number"
              name=""
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded 
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>

          <div className="">
            <p className="text-lg font-semibold ">Baths</p>
            <input
              type="number"
              name=""
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded 
              transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
            />
          </div>
        </div>

        <p className="text-lg mt-6 font-semibold">Parking Spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={true}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg 
            transition duration-150 ease-in-out w-[100%] ${
              !parking ? "" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>{" "}
          <button
            type="button"
            id="parking"
            value={false}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
            hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-[100%] ${
              parking ? "" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="furnished"
            value={false}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg 
            transition duration-150 ease-in-out w-[100%] ${
              !furnished ? "" : "bg-slate-600 text-white"
            }`}
          >
            Yes
          </button>{" "}
          <button
            type="button"
            id="type"
            value={true}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
            hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-[100%] ${
              furnished ? "" : "bg-slate-600 text-white"
            }`}
          >
            No
          </button>
        </div>

        <p className="text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 
          rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white focus:border-slate-600
          mb-3"
        />

        <p className="text-lg  font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 
          rounded transition duration-150 ease-in-out  focus:text-gray-700 focus:bg-white focus:border-slate-600
          mb-6"
        />

        <p className="text-lg font-semibold">Offer</p>
        <div className="flex mb-6">
          <button
            type="button"
            id="offer"
            value={false}
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg 
            transition duration-150 ease-in-out w-[100%] ${
              offer ? "bg-slate-600 text-white" : ""
            }`}
          >
            Yes
          </button>{" "}
          <button
            type="button"
            id="offer"
            value={true}
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
            hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-[100%] ${
              !offer ? "bg-slate-600 text-white" : ""
            }`}
          >
            No
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="">
            <p className="text-lg font-semibold">Regular Price</p>
            <div className="flex w-full justify-center items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded 
                transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 
                text-center"
              />{" "}
              {type === "rent" && (
                <div>
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {offer && (
          <div className="flex items-center mb-6">
            <div className="">
              <p className="text-lg font-semibold">Discounted Price</p>
              <div className="flex w-full justify-center items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded 
                transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 
                text-center"
                />
                {type === "rent" && (
                  <div>
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <p className="text-lg font-semibold">Images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            src=""
            alt=""
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition
            duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>

        <button
          type="submit"
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium 
        text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
        focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
