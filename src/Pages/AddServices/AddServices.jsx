import React from "react";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddServices = () => {
  useTitle("Add Services");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const service_id = form.service_id.value;
    const title = form.title.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const addCard = {
      service_id,
      title,
      img,
      price,
      description,
    };

    fetch("https://food-curls-server.vercel.app/addService", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "New Service Card Add Successfully .",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section class="mb-6 max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
      <h2 class="text-xl text-center mb-8 font-semibold text-gray-700 capitalize dark:text-white">
        Add A Service
      </h2>

      <form onSubmit={handleAddService}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="username">
              Service ID
            </label>
            <input
              id="username"
              name="service_id"
              placeholder="Enter A Service ID"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="emailAddress">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter A Title"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label class="text-gray-700 dark:text-gray-200" for="password">
              Image
            </label>
            <input
              id="img"
              type="text"
              name="img"
              placeholder="Enter a Image URL"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>

          <div>
            <label
              class="text-gray-700 dark:text-gray-200"
              for="passwordConfirmation"
            >
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              placeholder="Enter The Food Price"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>
          <div>
            <label class="text-gray-700 dark:text-gray-200" for="description">
              Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Enter Your Description"
              class="block w-full px-2 py-10 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              required
            />
          </div>
        </div>

        <div class="flex justify-end mt-6">
          <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddServices;
