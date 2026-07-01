import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">Oh no! It seems like you are lost.</p>
        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          href="/"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
