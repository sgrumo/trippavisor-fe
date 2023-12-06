export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GeometryLocation {
  lat: number;
  lng: number;
}

export interface Place {
  address_components: AddressComponent[];
  name: string;
  geometry: any;
}
