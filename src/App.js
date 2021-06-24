import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import {HashRouter, Route, Switch} from 'react-router-dom';
import {UrlProvider} from "./data/UrlContext";
import React from "react";
import {DiscussionsProvider} from "./data/StackOverflow/DiscussionsContext";
import {QueryProvider} from "./data/QueryContext";
import {PageProvider} from "./data/PageContext";
import {SiteProvider} from "./data/SiteContext";
import {TypoProvider} from "./data/TypoContext";
import {LoadingProvider} from "./data/LoadingContext";
import {ResContext, ResProvider} from "./data/ResContext";
import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB2sfQopgYRMXUN_NQoUPH7eaDcMbF0Lhk",
    authDomain: "devhuntr-c70d0.firebaseapp.com",
    projectId: "devhuntr-c70d0",
    storageBucket: "devhuntr-c70d0.appspot.com",
    messagingSenderId: "862065698050",
    appId: "1:862065698050:web:ec6c81e8c5716e043b0e1b",
    measurementId: "G-DYDR7CPFYJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function App() {


  return (
      <SiteProvider>
          <ResProvider>

      <PageProvider>
      <QueryProvider>
      <UrlProvider>
          <TypoProvider>
              <LoadingProvider>
      <main>
          <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
              <Route path='/search' component={SearchScreen}/>
              <Route path='/' component={HomeScreen}/>
          </Switch>
          </HashRouter>
      </main>
              </LoadingProvider>
          </TypoProvider>
      </UrlProvider>
      </QueryProvider>
      </PageProvider>

          </ResProvider>
      </SiteProvider>
  );
}

export default App;
