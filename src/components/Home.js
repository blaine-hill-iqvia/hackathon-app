import React from 'react';
import {BrowserRouter, Switch, Link, useRouteMatch, useParams} from 'react-router-dom';

export default function Home() {
  let match = useRouteMatch();
  return(
    <div>
      <h2 class="text-lg font-semibold">
        Welcome to the Retention Portal!
      </h2>
      <a href="/survey">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Survey
        </button>
      </a>
    </div>
  );
}
