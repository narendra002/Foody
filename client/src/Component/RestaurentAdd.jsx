import React from 'react';

function RestaurantAdd() {
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 items-center justify-center">
      {/* Restaurant Add Form */}
      <div className="bg-white w-full sm:w-96 p-4 sm:p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Add a Restaurant</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="restaurantName">Name:</label>
            <input className="input" id="restaurantName" type="text" placeholder="Restaurant Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="restaurantDescription">Description:</label>
            <textarea className="input" id="restaurantDescription" rows="3" placeholder="Restaurant Description"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="restaurantAddress">Address:</label>
            <input className="input" id="restaurantAddress" type="text" placeholder="Restaurant Address" />
          </div>
          <div className="mb-6">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="button">
              Add Restaurant
            </button>
          </div>
        </form>
      </div>

      {/* Menu Add Form */}
      <div className="bg-white w-full sm:w-96 p-4 sm:p-8 rounded-lg shadow-lg mx-4 mt-4 sm:mt-0">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Add a Menu Item</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="menuItemName">Name:</label>
            <input className="input" id="menuItemName" type="text" placeholder="Menu Item Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="menuItemDescription">Description:</label>
            <textarea className="input" id="menuItemDescription" rows="3" placeholder="Menu Item Description"></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="menuItemPrice">Price:</label>
            <input className="input" id="menuItemPrice" type="text" placeholder="Menu Item Price" />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="menuItemCategory">Category:</label>
            <div className="relative">
            <select className="input appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition ease-out duration-300" id="menuItemCategory">
  <option value="">Select Category</option>
  <option className="bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800 hover:shadow-md rounded px-4 py-2" value="appetizer">Appetizer</option>
  <option className="bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800 hover:shadow-md rounded px-4 py-2" value="main-course">Main Course</option>
  <option className="bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800 hover:shadow-md rounded px-4 py-2" value="dessert">Dessert</option>
</select>

              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-4-4h8z" /></svg>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="menuItemImg">Image URL:</label>
            <input className="input" id="menuItemImg" type="text" placeholder="Menu Item Image URL" />
          </div>
          <div className="mb-6">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="button">
              Add Menu Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RestaurantAdd;
