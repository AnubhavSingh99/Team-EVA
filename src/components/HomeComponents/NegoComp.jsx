import React, { useState } from 'react';

const NegotiationComponent = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [additionalTerms, setAdditionalTerms] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = `Offer: ₹${price} for ${quantity} units, to be delivered by ${deliveryDate}. Additional terms: ${additionalTerms}`;
    setMessages([...messages, { text: newMessage, sender: 'You' }]);
    // Reset form fields
    setPrice('');
    setQuantity('');
    setDeliveryDate('');
    setAdditionalTerms('');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Contract Negotiation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (in ₹)</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price in ₹"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">Delivery Date</label>
            <input
              type="date"
              id="deliveryDate"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="additionalTerms" className="block text-sm font-medium text-gray-700">Additional Terms & Conditions</label>
            <textarea
              id="additionalTerms"
              value={additionalTerms}
              onChange={(e) => setAdditionalTerms(e.target.value)}
              placeholder="Enter any additional terms or conditions"
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit Offer
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Negotiation History</h2>
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NegotiationComponent;
