import React, { Component }         from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';

import * as routes    from './constants/routes';
import Nav            from './components/Nav';


import GlobalNav        from './components/GlobalNav';
import HomeNav          from './components/home/HomeNav';
import HomeHeader       from './components/home/HomeHeader';
import HomeMain         from './components/home/HomeMain';
import AboutHeader      from './components/about/AboutHeader';
import AboutMain        from './components/about/AboutMain';
import ServicesHeader   from './components/services/ServicesHeader';
import ServicesMain     from './components/services/ServicesMain';
import PackageDisplay   from './components/PackageDisplay';


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
        <Switch>
          <Route path={routes.HOME} exact render={() => 
                    <HomeNav /> }/>
          <Route path={routes.INFO} exact render={() => 
                    <GlobalNav /> }/>
          <Route path={routes.SERV} exact render={() => 
                    <GlobalNav /> }/>                    
        </Switch>


        </div>

        <div className="grid-header">
          <Switch>
          
            <Route path={routes.HOME} exact render={() => 
                    <HomeHeader /> }/>
            <Route path={routes.INFO} exact render={() => 
                    <AboutHeader /> }/>
            <Route path={routes.SERV} exact render={() => 
                    <ServicesHeader /> }/>
          </Switch>

        </div>

        <div className="grid-main">
        <Switch>
          <Route path={routes.HOME} exact render={() => 
                    <HomeMain /> }/>
          <Route path={routes.INFO} exact render={() => 
                    <AboutMain /> }/>
          <Route path={routes.SERV} exact render={() => 
                  <ServicesMain /> }/>
        </Switch>

          <PackageDisplay />

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
