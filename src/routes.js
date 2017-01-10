import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import PhotoBlock from './components/PhotoBlock';


const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={PhotoBlock}/>
    
  </Route>
);

export default routes;
