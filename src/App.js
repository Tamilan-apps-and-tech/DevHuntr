import SearchScreen from "./screens/SearchScreen";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {UrlProvider} from "./data/UrlContext";
import React from "react";
import {DiscussionsProvider} from "./data/StackOverflow/DiscussionsContext";
import {QueryProvider} from "./data/QueryContext";
import {PageProvider} from "./data/PageContext";
import {SiteProvider} from "./data/SiteContext";
import {IssuesProvider} from "./data/Github/IssuseContext";

function App() {
  return (
      <SiteProvider>
      <PageProvider>
      <QueryProvider>
      <UrlProvider>
      <main>
          <BrowserRouter>
          <Switch>
              <Route path='/search' component={SearchScreen} />
          </Switch>
          </BrowserRouter>
      </main>
      </UrlProvider>

      </QueryProvider>
      </PageProvider>
      </SiteProvider>
  );
}

export default App;
