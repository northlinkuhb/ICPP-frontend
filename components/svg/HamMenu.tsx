import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 2V0h18v2H0Zm0 12v-2h18v2H0Zm0-6V6h18v2H0Z" />
  </svg>
)
export default SvgComponent
