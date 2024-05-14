import { follower, following } from "./FollowType";
export type UserType = {
  id: number;
  email: string;
  // password: string;
  full_name: string;
  profile_description: string;
  username: string;
  profile_picture: string;
  followers: follower[]
  following: following[]
};

export type UserRegisterType = {
  full_name: string;
  username: string;
  email: string;
  password: string;
}

export type UserLoginType = {
  username: string;
  password: string;
}