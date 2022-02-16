// state model

export interface Session {
  access_token: string | undefined;
  expires_in: number | undefined;
  refresh_expires_in: number | undefined;
  refresh_token: string | undefined;
  token_type: string | undefined;
  scope: string | undefined;
  session_state: string | undefined;
}

export interface User {
  sub: string;
  email_verified: boolean;
  roles: [string];
  name: string;
  groups: [string];
  preferred_username: string;
  locale: string;
  given_name: string;
  family_name: string;
  email: string;
  access_token?: string;
}

export interface AuthState {
  isSignedIn: boolean;
  isSignedOut: boolean;
  isNewUser: false;
  refreshToken: string | undefined;
  user: User | undefined;
  isLoading: boolean;
  isInitiLoading: boolean;
  userToken: string | undefined;
  tokenExpire: string | undefined;
  isSuccess: boolean;
  isError: boolean;
  session: Session | undefined;
  errorMessage: string;
}
