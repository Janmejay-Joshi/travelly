interface UserInterface {
  full_name: string;
  phone_number: string;
  gravtar: string;
  user_type: "Driver" | "Normal" | "Admin";
  rides: Array<RideInterface>;
}

interface RideInterface {
  // user_ref: string;
  transit_ref: string;
  from: string | Geolocation;
  to: string | Geolocation;
  cost: number;
  transaction_mode?: "Cash";
}

interface RouteInterface {
  gravtar: string;
  media: Array<string>;
  info: string;
  geoJSON: Geolocation;
  major_stops: Geolocation;
}

interface TransitInterface {
  owner_ref: string;
  route_ref: string;
  media: Array<string>;
  registration_number: string;
  gravtar: string;
  capacity: number;
  activity_status: boolean;
}

interface UserLocationInterface {
  user_ref: string;
  location: Geolocation;
}

interface TransitLocationInterface {
  transit_ref: string;
  location: Geolocation;
}

interface RideReviewInterface {
  user_ref: string;
  transit_ref: string;
  rating: 1 | 2 | 3 | 4 | 5;
  Q1: string;
  Q2: string;
  Q3: string;
}

interface AppReviewInterface {
  user_ref: string;
  rating: 1 | 2 | 3 | 4 | 5;
  Q1: string;
  Q2: string;
  Q3: string;
}

interface LegendInterface {
  gravtar: string;
  media: Array<string>;
  info: string;
  location: Geolocation;
}

export {
  LegendInterface,
  AppReviewInterface,
  RideReviewInterface,
  UserInterface,
  UserLocationInterface,
  TransitInterface,
  TransitLocationInterface,
  RideInterface,
  RouteInterface,
};
