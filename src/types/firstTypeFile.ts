// side Nav Bar

import { SVGProps } from "react";

interface SvgComponent
  extends React.FunctionComponent<SVGProps<SVGSVGElement>> {}

export interface navItems {
  id: string;
  navText: string;
  isLink:boolean;
  link?:string;
  navIcon?: string | SvgComponent;
}
