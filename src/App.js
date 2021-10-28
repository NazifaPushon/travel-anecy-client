import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BookingInfo from './components/BookingInfo/BookingInfo';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/signIn">
              <GoogleSignIn/>
            </Route>
            <PrivateRoute  path="/booking/:id">
                <BookingInfo/>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
