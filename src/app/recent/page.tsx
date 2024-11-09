import React from 'react';

const RecentWork = () => {
  return (
    <div className="max-w-6xl mx-auto p-10 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl mb-6 text-center">Recent Work</h2>
      <div className="space-y-6">
        <div className="bg-white rounded-lg p-6 transition-transform duration-300 hover:scale-105 shadow-md">
          <h3 className="text-xl mb-2">Dynamic Resume</h3>
          <p className="text-gray-600 mb-4">
            A sophisticated and interactive resume project that highlights my skills, experience, and projects.
          </p>
          <span className="font-bold">Technologies Used:</span> HTML, CSS, JavaScript, TypeScript
          <ul className="list-disc pl-5 mt-2">
            <li>Responsive layout</li>
            <li>Animated elements for a dynamic presentation</li>
            <li>Smooth transitions and hover effects</li>
          </ul>
          <a
            href="https://github.com/fariha2024/dynamic-resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold hover:underline"
          >
            GitHub Repository
          </a>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default RecentWork;
