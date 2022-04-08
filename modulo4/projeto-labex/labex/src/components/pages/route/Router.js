import React from 'react';

import {BrowserRouter,Switch,Route} from "react-router-dom";
import ApplicationFormPage from '../ApplicationFormPage';
import HomePage from '../HomePage';
import ListTripsPage from '../ListTripsPage';
import {LoginPage} from '../LoginPage';
import CreateTripPage from '../CreateTripPage';
import AdminHomePage  from '../AdminHomePage';
import TripDetailsPage from '../TripDetailsPage';



export const Router =()=>{

  return (
    <BrowserRouter>
    <Switch>


     
        <Route exact path={"/"}>
          <HomePage/>
        </Route>

        <Route exact path={"/listtrip"}>
          <ListTripsPage/>
        </Route>

        <Route exact path={"/form"}>
          <ApplicationFormPage/>
        </Route>
        
        <Route exact path={"/log"}>
          <LoginPage/>
        </Route>

        <Route exact path={"/create"}>
          <CreateTripPage/>
        </Route>


        <Route exact path={"/admn"}>
          <AdminHomePage/>
        </Route>

        <Route exact path={"/details"}>
          <TripDetailsPage/>
        </Route>


        {/* <Route>
          <ErrorPage />
        </Route> */}


        
      </Switch>
    </BrowserRouter>

  )
}

