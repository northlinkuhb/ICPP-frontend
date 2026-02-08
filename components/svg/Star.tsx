import * as React from "react"
import { SVGProps } from "react"
const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    viewBox="0 0 80 80"
    {...props}
  >
    <path
      fill="#fff"
      d="M40 80c0-22.091-17.909-40-40-40 22.091 0 40-17.909 40-40 0 22.091 17.909 40 40 40-22.091 0-40 17.909-40 40Z"
    />
  </svg>
)
export default Star
