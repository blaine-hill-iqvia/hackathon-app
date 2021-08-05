import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import Tier from "./components/Tier";

import "./App.css";
import { SignInPage } from "./components/SignInPage";
import { SurveySecondPage } from "./components/SurveySecondPage";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div class="min-h-screen bg-gradient-to-r from-iqviaBlue to-transparent">
      <div class="py-5 px-10">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <SignInPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/survey">
              <SurveySecondPage score={score} setScore={setScore} />
            </Route>
          </Switch>
          <Switch>
            <Route path="/tier">
              <Tier score={score} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
