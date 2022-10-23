import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { UserProfileInterface } from 'src/app/shared/types/userProfile.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  userProfile: UserProfileInterface | null;
  isLoggedIn: boolean | null;
  error: BackendErrorsInterface | null;
}
