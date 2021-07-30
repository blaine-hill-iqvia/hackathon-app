import React from "react";
import { useHistory } from "react-router-dom";

const LoginButtonRedirect = ({ text, toRedirect }) => {
  const history = useHistory();

  return (
    <button
      onClick={() => history.push(`${toRedirect}`)}
      className="w-full px-3 py-4 text-white text-center bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
    >
      {text}
    </button>
  );
};

export default LoginButtonRedirect;
