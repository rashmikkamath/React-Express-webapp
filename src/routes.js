import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import DataBlock from './components/DataBlock';


const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={DataBlock}/>

  </Route>
);

export default routes;
