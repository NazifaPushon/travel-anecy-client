import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AddTour from './components/AddTour/AddTour';
import BookingInfo from './components/BookingInfo/BookingInfo';
import Footer from './components/Footer/Footer';
import GoogleSignIn from './components/GoogleSignIn/GoogleSignIn';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ManageBookings from './components/ManageBookings/ManageBookings';
import MyBookings from './components/MyBookings/MyBookings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter >
        <Header/>
          <Switch className="flex-grow">
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/signIn">
              <GoogleSignIn/>
            </Route>
            <PrivateRoute  path="/myBookings">
              <MyBookings/>
            </PrivateRoute>
            <PrivateRoute  path="/manageBookings">
              <ManageBookings/>
            </PrivateRoute>
            <PrivateRoute  path="/addTour">
             <AddTour/>
            </PrivateRoute>
            <PrivateRoute  path="/booking/:id">
                <BookingInfo/>
            </PrivateRoute>
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
