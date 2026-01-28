import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill="#131516"
      d="M1.063 11 0 9.937 8.438 1.5H1V0h10v10H9.5V2.562L1.062 11Z"
    />
  </svg>
)
export default SvgComponent
