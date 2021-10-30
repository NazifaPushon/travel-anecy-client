import React from 'react';
import { Redirect, Route } from 'react-router';
import { ClipLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';

//Private Route
// it redirects the user if he is not logged in
const PrivateRoute = ({ children, ...rest }) => {
    const {user , isLoading} = useAuth()
    
    //spinner loading
    if(isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <ClipLoader color="#ff0000"  size={60} />
            </div>
        
        )
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/signIn",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;