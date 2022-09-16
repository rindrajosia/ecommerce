import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

class AppRoute extends Component {
  render() {
    return(
      <>
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
        </Routes>
      </>
    )
  }

}

export default AppRoute;
