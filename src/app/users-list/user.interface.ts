export interface IUser {
  id: number;
  name: string;
  username?: string;
  email: string;
  address: {
    street?: string;
    suite?: string;
    city: string;
    zipcode?: string;
    geo?: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase?: string;
    bs?: string;
  };
}

export interface ICreateEditUser {
  id: number;
  name: string;
  address: {
    city: string;
  };
  company: {
    name: string;
  };
  email: string;
  website: string;
  phone: string;
}
