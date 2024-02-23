export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface AddressCoordinates {
  lat: number;
  lng: number;
}

export interface Address {
  route: string;
  locality: string;
  administrative_area_level_3: string;
  administrative_area_level_2: string;
  administrative_area_level_1: string;
  country: string;
  postal_code: string;
  name: string;
  formatted_address: string;
  coordinates: AddressCoordinates;
}

export interface IPeriod {
  startdate: string;
  enddate: string;
}

export interface ITag {
  tag: string;
}

export interface MultiselectValue {
  value: string;
  label: string;
}

export interface IImage {
  responsiveImage: IResponsiveImage;
}

export interface IResponsiveImage {
  alt: string;
  src: string;
  srcSet: string;
  sizes: string;
  height: number;
  width: number;
}

export interface IGalleryImage {
  responsiveImage: IResponsiveImage;
}

export interface IMedia {
  url: string;
  filename: string;
}

export interface IBaseFestival {
  id: string;
  title: string;
  slug: string;
  period: IPeriod[];
  tags: ITag[];
  address: Address;
  thumbnail: IImage;
}

export interface SEOAttribute {
  property: string;
  content: string;
}

export interface SEOTag {
  attributes: SEOAttribute | null;
  content: string | null;
  tag: "meta";
}

export type IFestivalDetail = IBaseFestival & {
  description: string;
  gallery: IGalleryImage[];
  menus: IMedia[];
  email: string;
  phoneNumber?: string;
  seo: SEOTag[];
};
