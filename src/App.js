import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UrlProvider} from "./data/UrlContext";
import React from "react";
import {DiscussionsProvider} from "./data/StackOverflow/DiscussionsContext";
import {QueryProvider} from "./data/QueryContext";
import {PageProvider} from "./data/PageContext";
import {SiteProvider} from "./data/SiteContext";
import {IssuesProvider} from "./data/Github/IssuseContext";
import {TypoProvider} from "./data/TypoContext";

function App() {
  return (
      <SiteProvider>
      <PageProvider>
      <QueryProvider>
      <UrlProvider>
          <TypoProvider>
      <main>
          <BrowserRouter>
          <Switch>
              <Route path='/search' component={SearchScreen} />
              <Route path='/' component={HomeScreen} />
          </Switch>
          </BrowserRouter>
      </main>
          </TypoProvider>
      </UrlProvider>
      </QueryProvider>
      </PageProvider>
      </SiteProvider>
  );
}

export default App;
