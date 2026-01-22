import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill || "#fff"}
        d="m6.57 0 5.709 8.287L19.399 0h1.94l-8.195 9.581 8.9 12.992h-6.547l-5.996-8.73-.264.22-7.319 8.509H.001l8.583-10.03L0 0h6.57Zm-.927 1.455H2.646l13.777 19.707h2.932l-.184-.323L5.643 1.455Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h23v23H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
