import React from "react";
import { UserMain } from "./UserMain";

export const SignInPage = () => {
  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <img
          className="block h-8 mx-auto "
          src="https://www.iqvia.com/-/media/iqvia/iqvia-logo-color.svg"
          alt="IQVIA"
        />
        <UserMain />
      </div>
    </div>
  );
};
