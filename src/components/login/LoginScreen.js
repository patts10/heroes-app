import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

  const { user, dispatch } = useContext( AuthContext );

  const handleLogin = () =>{
    // history.push('/');
    // history.replace('/');

    const lastPath = localStorage.getItem('lastPath') || '/';
    
    dispatch( {
      type: types.login,
      payload: {
        name: 'patts'
      }
    });
    history.replace( lastPath );
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>LoginScreen</h1>
        <hr />

        <button
          className="btn btn-primary"
          onClick={ handleLogin }
        >
          Login
        </button>
      </div>
    </div>
  )
}
