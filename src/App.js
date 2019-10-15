import React, { Component }         from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';

import * as routes    from './constants/routes';
import Nav            from './components/Nav'

import HomeHeader   from './components/Home/HomeHeader';
import HomeMain   from './components/Home/HomeMain';
import AboutHeader   from './components/About/AboutHeader';
import AboutMain   from './components/About/AboutMain';
import PackageDisplay from './components/PackageDisplay';
import MeetStephanie  from './components/MeetStephanie';

import './App.css';



// import firebase from 'firebase/app'

export default class App extends Component {
  state = {
    showNav: false,
  };

  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  showNavBar = (e) => {
      this.setState({
        showNav: e.currentTarget.name
      })
  };
  render(){
    const { showNav } = this.state;
    return(
      <div className="grid-container">

      <Nav show={this.state.showNav} onClose={this.showNavBar} />
        <div className="grid-contact">
          <img src="instagram-icon.png" alt="IG"/>
          <section>info@pranawellness.life</section>
        </div>

        <div className="grid-nav">

          <div className="home-logo">
            <div className="logo-box">
              <img src="icon_white.png" alt="icon-white" />
            </div>
          </div>

          <div className="home-hamburger">
            <section></section><section></section><section></section>
          </div>
        </div>

        <div className="grid-header">
          <Switch>
          
            <Route path={routes.HOME} exact render={() => 
                    <HomeHeader /> }/>
            <Route path={routes.INFO} exact render={() => 
                    <AboutHeader /> }/>
          </Switch>

        </div>

        <div className="grid-main">
        <Switch>
          <Route path={routes.HOME} exact render={() => 
                    <HomeMain /> }/>
          <Route path={routes.INFO} exact render={() => 
                    <AboutMain /> }/>
        </Switch>

          <PackageDisplay />
          <MeetStephanie />
        </div>

        <div className="grid-contact">
          <img src="instagram-icon.png" alt="IG"/><section>info@pranawellness.life</section>
        </div>



        <div className="grid-footer">
          <div className="logo-box">
            <img src="icon_white.png" alt="icon-white" />
            <section className="pranaText" >PRANA</section>
            <section className="wellnessText">wellness</section>
          </div>
        </div>
        
      </div>
    )
  }
}
