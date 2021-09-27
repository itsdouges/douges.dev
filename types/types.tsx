export interface BlogMeta {
  title: string;
  blurb: string;
  publishDate: string;
  minutesToRead: number;
  slug: string;
  heroImage?: StaticImageData;
}

export interface ResponsiveObject<TProp> {
  s?: TProp;
  m?: TProp;
  l?: TProp;
}

export type ResponsiveProp<TProp> = TProp | ResponsiveObject<TProp>;
