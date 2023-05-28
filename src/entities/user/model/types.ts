import { PostModel } from "../../post";

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface UserInitState {
  loading: boolean;
  error: string | null;
  user: UserModel;
  posts: PostModel[];
}

export interface UserFirstInfo {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
