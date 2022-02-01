import React from "react";

import AddStudent from "./components/AddStudent";
import StudentInfo from "./components/Table";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout";

import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Switch>
            <Provider store={store}>
              <Route exact path="/">
                <AddStudent />
              </Route>
              <Route path="/information">
                <StudentInfo />
              </Route>
            </Provider>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
