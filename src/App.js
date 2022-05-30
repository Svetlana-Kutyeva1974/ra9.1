import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HomePage} from './HomePage/HomePage.js';
import {DriftPage} from './DriftPage/DriftPage';
import {ForzaPage} from './ForzaPage/ForzaPage';
import {TimeAttackPage} from './TimeAttackPage/TimeAttackPage';
import {Menu} from './Menu/Menu';
import {Page404} from './Page404/Page404';

 export const App = (props) =>
  (
   <Router>
    <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage/>} />
            <Route path="/forza" element={<ForzaPage/>} />
            <Route path="/" exact element={<HomePage/>} />
            <Route element={<Page404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
//<Router.Redirect to="/"></Router.Redirect>
//import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
//<Redirect from='/CreatePost' to='/Register' />

//  <Route path="/drift" component={() => DriftPage} />
