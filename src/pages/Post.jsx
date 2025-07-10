// SocialPost.jsx
import React from "react";
import { BsEye } from "react-icons/bs";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const SocialPost = () => {
  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6 space-y-4 border border-gray-200 dark:border-gray-700">
      {/* User info */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white font-bold">
          U
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">
            User 1
          </h4>
          <span className="text-sm text-gray-500">Post ID: 1</span>
        </div>
      </div>

      {/* Post content */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          modi, velit quidem fuga repellat ex magnam earum nobis quisquam dicta.
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
          #sjssjs
        </span>
      </div>

      {/* Reactions */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-4">
          <div className="flex items-center text-green-600 dark:text-green-400">
            <FaThumbsUp className="w-4 h-4 mr-1" />
            <span>1</span>
          </div>
          <div className="flex items-center text-red-500">
            <FaThumbsDown className="w-4 h-4 mr-1" />
            <span>1</span>
          </div>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400">
          <BsEye className="w-4 h-4 mr-1" />
          <span>1 views</span>
        </div>
      </div>
    </div>
  );
};

export default SocialPost;
