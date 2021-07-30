import React from "react";
import LoginButtonRedirect from "./LoginButtonRedirect";

export const UserMain = () => {
  return (
    <div className="max-w-md mx-auto my-10 border-2 border-gray-300 shadow-lg rounded-md">
      <div className="text-center">
        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          IQVIA Retention Portal Demo
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Built with React + NodeJS + Tailwind
        </p>
      </div>
      <div className="m-7 flex space-x-3">
        <div className="flex-grow ">
          <div className="flex-grow ">
            <LoginButtonRedirect text="Go To Survey" toRedirect="survey" />
          </div>
        </div>
      </div>
    </div>
  );
};
