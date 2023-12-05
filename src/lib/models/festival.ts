export interface Localization {
  latitude: number;
  longitude: number;
}

export interface IPeriod {
  startdate: string;
  enddate: string;
}

export interface ITag {
  tag: string;
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

export interface IMedia {
  url: string;
  filename: string;
}

export interface IBaseFestival {
  id: string;
  title: string;
  period: IPeriod[];
  tags: ITag[];
  thumbnail: IImage;
}

export type IFestivalDetail = IBaseFestival & {
  description: string;
  gallery: IResponsiveImage[];
  menus: IMedia[];
  email: string;
  phoneNumber: string;
  localization: Localization;
};
