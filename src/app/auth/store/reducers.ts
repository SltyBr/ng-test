import { Action, createReducer, on } from '@ngrx/store';
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from 'src/app/auth/store/actions/getUserProfile.action';
import { loginAction, loginFailureAction, loginSuccessAction } from 'src/app/auth/store/actions/login.action';
import { logoutAction } from 'src/app/auth/store/actions/logout.action';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
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
    getUserProfileAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      userProfile: action.userProfile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      userProfile: null
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => initialState
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}