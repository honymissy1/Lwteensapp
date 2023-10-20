import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';

import { playCircle, radio, library, search } from 'ionicons/icons';
import TapTv from './TapTv';
import Tracker from './Tracker';
import Activities from './Activities';
import User from './User';
import Home from './Home';


//
import Activity from '../assets/images/activity.png'
import HomeIcon from '../assets/images/home.svg';
import Todo from '../assets/images/todo.png';
import Tv from '../assets/images/tv.png';
import UserIcon from '../assets/images/user.png'
import Devotion from './Devotion';

const Index: React.FC = () => {
  return (
    <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/" to="/home" />
        <Route path="/home" render={() => <Home />} exact={true} />
        <Route path="/tap" render={() => <TapTv />} exact={true} />
        <Route path="/tracker" render={() => <Tracker />} exact={true} />
        <Route path="/activities" render={() => <Activities />} exact={true} />
        <Route path="/user" render={() => <User />} exact={true} />
        {/* I want to render the remaining pages here */}

        <Route path="/devotion" render={() => <Devotion />} exact={true} />
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tracker" href="/tracker">
          {/* <IonIcon icon={playCircle} /> */}
          <img src={Todo} alt="Todo List" />
          <IonLabel>Tracker</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tap tv" href="/tap">
        <img src={Tv} alt="" className='icon-inner ionicon' />
          <IonLabel>Tap Tv</IonLabel>
        </IonTabButton>

        <IonTabButton tab="home" href="/home">
          {/* <IonIcon icon={library} /> */}
          <img src={HomeIcon} alt=""  />
          <IonLabel>Home</IonLabel>
        </IonTabButton>

        <IonTabButton tab="activities" href="/activities">
          <img src={Activity} alt="" />
          <IonLabel>Activities</IonLabel>
        </IonTabButton>

        <IonTabButton tab="user" href="/user">
          <img src={UserIcon} alt="" />
          <IonLabel>User</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
  );
};

export default Index;
