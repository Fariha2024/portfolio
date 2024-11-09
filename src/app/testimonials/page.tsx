import React from 'react';

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "Amazing service! Highly recommend.",
    },
    {
      name: "Jane Smith",
      review: "A wonderful experience from start to finish.",
    },
    {
      name: "Alex Johnson",
      review: "Professional and attentive. Will be back!",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-10 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 text-center">Testimonials</h2>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="font-semibold">{review.name}</p>
            <p className="text-gray-600">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
