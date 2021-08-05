import React from "react";
import SurveySecond from "./SurveySecond";
import { Header } from "./Header";

export const SurveySecondPage = ( {score, setScore } ) => {
  return (
    <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <Header name="Patient Survey" />
        <SurveySecond score={score} setScore={setScore}/>
      </div>
    </div>
  );
};
