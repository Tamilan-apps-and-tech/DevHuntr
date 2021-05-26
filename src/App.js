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
              <Route path='/search' component={SearchScreen} />
              <Route path='/' component={HomeScreen} />
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
