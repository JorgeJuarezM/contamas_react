import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import AppSidebar from './components/sidebar';
import AppHeader from './components/header';
import HomeIndexPage from './pages/home';
import { useFirebaseApp, AuthCheck, useAuth } from 'reactfire';
import 'firebase/auth';
import 'firebase/database';
import LoginPage from './pages/home/login';
import Loader from 'react-loader-spinner';


const AdminLayout = (props) => {
  return (
    <Fragment>
      <AppSidebar></AppSidebar>
      <div className="page">
        <AppHeader></AppHeader>
        {props.children}
      </div>
    </Fragment>
  )
}

const OtherPage = () => {
  return <h1>Other Page</h1>
}

function App() {
  const firebase = useFirebaseApp();
  let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof firebase[feature] === 'function');
  const auth = useAuth()

  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(`firebase has been initialized with ${features.join(", ")}`);
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged((user, error) => {
      if (user != null) {
        console.log(user.uid)
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }


      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
      if (isLoading) {
        setIsLoading(false);
      }
    });
  }, [auth])

  if (isLoading) {
    return (<div style={{
      position: "absolute",
      left: "0px",
      top: "0px",
      bottom: "0px",
      right: "0px",
      backgroundColor: "#212121"
    }}>
      <Loader style={{
        position: "relative",
        left: "50%",
        marginLeft: "-110px",
        top: "50%",
        marginTop: "-110px"
      }} type="ThreeDots" height={220} width={220} color="#379392"></Loader>
    </div>)
  } else {
    return (
      <Router>
        <Switch>
          {
            (isLogged && (
              <AuthCheck>
                <AdminLayout>
                  <Route path="/home" component={HomeIndexPage} />
                  <Route path="/invoices" component={OtherPage} />
                  <Route exact path="/login" render={() => <Redirect to="/home" />} />
                  <Route exact path="/" render={() => <Redirect to="/home" />} />
                </AdminLayout>
              </AuthCheck>
            )) || (
              <Fragment>
                <Route path="/login" component={LoginPage} />
                <Route path="*" exact={true}>
                  <Redirect to="/login" />
                </Route>
              </Fragment>
            )
          }
        </Switch>
      </Router>
    )
  }
}

export default App;
