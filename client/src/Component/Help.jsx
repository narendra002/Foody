import React, { useState } from 'react';

function Help() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const selectOption = (optionName) => {
    setSelectedOption(optionName);
    setSelectedItem(null); // Reset the selected item when a new option is selected
  };

  const selectItem = (itemId) => {
    setSelectedItem(itemId === selectedItem ? null : itemId); // Toggle the selected item
  };

  const Options = [
    {
      optionName: "Browse Menu",
      drop: [
        {
          dropDownDiv: "View Menu Items",
          dropDownDetail:
            "Browse through our extensive menu to see all the delicious dishes we offer.",
        },
        {
          dropDownDiv: "Filter by Category",
          dropDownDetail:
            "Narrow down your choices by selecting a specific category, such as appetizers, main courses, desserts, and more.",
        },
        {
          dropDownDiv: "Search for Items",
          dropDownDetail:
            "Use the search feature to quickly find your favorite dishes or explore new ones.",
        },
      ],
    },
    {
      optionName: "Placing an Order",
      drop: [
        {
          dropDownDiv: "Add Items to Cart",
          dropDownDetail:
            "Select the items you want to order and add them to your shopping cart.",
        },
        {
          dropDownDiv: "Customize Your Order",
          dropDownDetail:
            "Personalize your order by specifying preferences, such as spice level, toppings, and special requests.",
        },
        {
          dropDownDiv: "Review Your Order",
          dropDownDetail:
            "Before confirming your order, review the items in your cart to ensure everything looks perfect.",
        },
      ],
    },
    {
      optionName: "Payment and Checkout",
      drop: [
        {
          dropDownDiv: "Payment Options",
          dropDownDetail:
            "Choose your preferred payment method, such as credit card, PayPal, or cash on delivery.",
        },
        {
          dropDownDiv: "Promo Codes and Discounts",
          dropDownDetail:
            "Apply any promo codes or discounts to enjoy savings on your order.",
        },
        {
          dropDownDiv: "Place Your Order",
          dropDownDetail:
            "Confirm your order and receive an order confirmation with estimated delivery or pickup time.",
        },
      ],
    },
    {
      optionName: "Delivery and Tracking",
      drop: [
        {
          dropDownDiv: "Track Your Order",
          dropDownDetail:
            "Keep an eye on your order's status in real-time and receive updates on its progress.",
        },
        {
          dropDownDiv: "Contact Support",
          dropDownDetail:
            "If you have any questions or issues with your order, reach out to our support team for assistance.",
        },
      ],
    },
    // Add more options and their respective dropdown data here
  ];
  

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">Help & Support</h1>
        <p className="text-lg text-gray-600">Let's take a step ahead and help you better.</p>
      </header>

      <div className="h-screen m-4 flex bg-gray-200 rounded-lg shadow-md">
        <div className="w-2/6 my-4 bg-gray-100 rounded-l-lg shadow-md p-6">
          <ul className="space-y-4">
            {Options.map((option, id) => (
              <li
                key={id}
                className={`py-2 px-4 cursor-pointer hover:bg-blue-100 rounded-lg m-2 ${
                  selectedOption === option.optionName
                    ? 'bg-blue-200 text-blue-700 font-semibold'
                    : 'bg-gray-300'
                }`}
                onClick={() => selectOption(option.optionName)}
              >
                {option.optionName}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-4/6 bg-gray-100 rounded-r-lg shadow-md">
          <h1 className="text-center text-xl font-bold text-blue-700 mb-4">Project Onboarding</h1>
          {selectedOption && (
            <div>
              {Options
                .find((option) => option.optionName === selectedOption)
                .drop.map((data, id) => (
                  <div key={id}>
                    <div
                      onClick={() => selectItem(id)} // Toggle the selected item
                      className={`font-bold text-center bg-gray-300 m-2 rounded-sm p-2 text-lg cursor-pointer ${
                        selectedItem === id ? 'bg-blue-200' : ''
                      }`}
                    >
                      {data.dropDownDiv}
                    </div>
                    <div className={`mx-4 ${selectedItem === id ? 'block animate-fade-in' : 'hidden animate-fade-out'}`}>
                      <p className="bg-gray-200 p-4 rounded-lg shadow-md">{data.dropDownDetail}</p>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Help;
