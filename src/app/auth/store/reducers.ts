import { Action, createReducer, on } from '@ngrx/store';
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from 'src/app/auth/store/actions/getUserProfile.action';
import { loginAction, loginFailureAction, loginSuccessAction } from 'src/app/auth/store/actions/login.action';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  userProfile: null,
  isLoggedIn: null,
  error: null
};

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      error: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      userProfile: action.userProfile,
      isLoggedIn: true
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      error: action.error
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoggedIn: true,
      userProfile: action.userProfile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoggedIn: false,
      userProfile: null
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoggedIn: false,
      userProfile: null
    })
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}