import React from 'react';
import {Link} from 'react-router-dom';

// Tier will accept a score on a scale from 1-100 that represents the desirability of a potential
// patient for a clinical trial.

export default function Tier( { score } ) {
  //there will be three tiers to start: Bronze, Silver, and Gold

  const renderContent = () => {
    
    if(score <= 70 && score > 0){
      return(
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
          <div className="mb-3 m-auto py-10 mt-1 px-9 rounded border-b shadow border-gray-200">
            <div className="container mx-auto">
              <img
                className="block h-8 mx-auto "
                src="https://www.iqvia.com/-/media/iqvia/iqvia-logo-color.svg"
                alt="IQVIA"
              />
            </div>
            <div className="max-w-2xl px-9 mx-auto">
              <h4 className="font-semibold text-3xl pt-3 text-gray-700 text-center">
                You don't qualify for anything
              </h4>
            </div>
          </div>
      </div>
      )
    }

    else if(score <= 80 && score > 70){
      return(
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
          <div className="mb-3 m-auto py-10 mt-1 px-9 rounded border-b shadow border-gray-200">
            <div className="container mx-auto">
              <img
                className="block h-8 mx-auto "
                src="https://www.iqvia.com/-/media/iqvia/iqvia-logo-color.svg"
                alt="IQVIA"
              />
            </div>
            <div className="max-w-2xl px-9 mx-auto">
              <h4 className="font-semibold text-3xl pt-3 text-gray-700 text-center">
                You're in the Bronze Tier!
              </h4>
            </div>
          </div>
      </div>
      )
    }

    else if(score <= 90 && score > 80){
      return(
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
          <div className="mb-3 m-auto py-10 mt-1 px-9 rounded border-b shadow border-gray-200">
            <div className="container mx-auto">
              <img
                className="block h-8 mx-auto "
                src="https://www.iqvia.com/-/media/iqvia/iqvia-logo-color.svg"
                alt="IQVIA"
              />
            </div>
            <div className="max-w-2xl px-9 mx-auto">
              <h4 className="font-semibold text-3xl pt-3 text-gray-700 text-center">
                You're in the Silver Tier!
              </h4>
            </div>
          </div>
      </div>
      )
    }

    else if(score <= 100 && score > 90){
      return(
      <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
        <div className="mb-3 m-auto py-10 mt-1 px-9 rounded border-b shadow border-gray-200">
          <div className="container mx-auto">
            <img
              className="block h-8 mx-auto "
              src="https://www.iqvia.com/-/media/iqvia/iqvia-logo-color.svg"
              alt="IQVIA"
            />
          </div>
          <div className="max-w-2xl px-9 mx-auto">
            <h4 className="font-semibold text-3xl pt-3 text-gray-700 text-center">
              You're in the Gold Tier!
            </h4>
          </div>
        </div>
    </div>
        
      )
    }

    else {
      return(
        <div className="flex items-center min-h-screen bg-white dark:bg-gray-900">
          <div className="mb-3 m-auto py-10 mt-1 px-9 rounded border-b shadow border-gray-200">
            <div className="container mx-auto">
              <img
                className="block h-8 mx-auto "
                src="https://www.iqvia.com/-/media/iqvia/iqvia-logo-color.svg"
                alt="IQVIA"
              />
            </div>
            <div className="max-w-2xl px-9 mx-auto">
              <h4 className="font-semibold text-3xl pt-3 text-gray-700 text-center">
                There seems to be an issue. Please go back to the portal!
              </h4>
              <Link to="/">
                <button
                  className="mt-4 w-full px-3 py-4 text-white text-center bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
                  type="submit"
                >
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }

  return(
    <div>
      {renderContent()}
    </div>


  )
}