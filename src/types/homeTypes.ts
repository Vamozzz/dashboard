// side Nav Bar

import { CSSProperties, SVGProps } from "react";

// type of svg image as component
export interface SvgComponent
  extends React.FunctionComponent<SVGProps<SVGSVGElement>> {}

// nav bar
export interface navItems {
  id: string;
  navText: string;
  isLink:boolean;
  link?:string;
  navIcon?: string | SvgComponent;
}

// cardA

export interface CardInfoCardA {
  type:string;
  title: string;
  amount: string;
  Image1?: SvgComponent;
  Image1Fill?:string;
  desc?: string;
  Image2?: SvgComponent;
  Image2Fill?:string;
  bgColor:string;
  strokeColor:string;
  bgImage:SvgComponent;
}

export interface CardInfoCardB {
  title: string;
  Image1?: SvgComponent;
  Image2?:SvgComponent;
}

export interface CardInfoCardC {
  type:string;
  title: string;
  amount:string;
  average: string;
  averageStats: string;
  thisMonth: string;
  thisMonthStats: string;
  Image1: SvgComponent;
  Image2:SvgComponent;
  Image3:SvgComponent;
  cardStyle?:CSSProperties;
}

export interface CardInfoCardD {
  Image1:SvgComponent;
  Image2:SvgComponent;
  title:string;
  totalTransaction:string;
  transactionCount:string;
  totalTransactionStats:string;
  transactionCountStats:string;
  cardStyle:CSSProperties;
}
