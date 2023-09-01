export interface UserProfile {
  userId: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
  password: string;
  address: {
    city: string;
    zipcode: string;
  };
  phoneNumber: string;
}

export interface UserProfileState {
  userProfile: UserProfile | null;
}
