import SearchScreen from "./screens/SearchScreen";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UrlProvider} from "./data/UrlContext";
import React from "react";
import {DiscussionsProvider} from "./data/DiscussionsContext";
import {QueryProvider} from "./data/QueryContext";
import {PageProvider} from "./data/PageContext";

function App() {
  return (
      <QueryProvider>
          <PageProvider>
      <UrlProvider>
          <DiscussionsProvider>
      <main>
          <BrowserRouter>
          <Switch>
              <Route path='/search' component={SearchScreen} />
          </Switch>
          </BrowserRouter>
      </main>
          </DiscussionsProvider>
      </UrlProvider>
          </PageProvider>
      </QueryProvider>
  );
}

export default App;
