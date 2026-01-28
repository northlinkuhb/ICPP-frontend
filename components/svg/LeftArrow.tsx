import * as React from "react";
import { SVGProps } from "react";
const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m3.825 9 5.6 5.6L8 16 0 8l8-8 1.425 1.4-5.6 5.6H16v2H3.825Z"
    />
  </svg>
);
export default LeftArrow;
