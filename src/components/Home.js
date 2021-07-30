import React from 'react';
import {BrowserRouter, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';

export default function Home() {
  let match = useRouteMatch();
  return(
    <div>
      <h2>
        Welcome to Reward Hub!
      </h2>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Survey
      </button>
    </div>
  );
}
