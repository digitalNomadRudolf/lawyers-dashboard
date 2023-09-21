export interface UserProfile {
  userId: string;
  name: string;
  role: UserRole;
  avatar: string;
  email: string;
  password: string;
  address: {
    city: string;
    zipcode: string;
  };
  phoneNumber: string;
}

export enum UserRole {
  admin = "admin",
  user = "user",
}

export interface UserProfileState {
  userProfile: UserProfile | null;
}

export type UserInfo = Pick<UserProfile, "name" | "avatar" | "role">;
