import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={42}
    height={42}
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <g
        opacity={0.42}
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8.75 9.625A6.125 6.125 0 0 1 14.875 3.5H21v12.25h-6.125A6.125 6.125 0 0 1 8.75 9.625ZM21 3.5h6.125a6.125 6.125 0 0 1 0 12.25H21V3.5Z" />
        <path d="M21 21.875a6.125 6.125 0 1 1 12.25 0 6.125 6.125 0 0 1-12.25 0v0ZM8.75 34.125A6.125 6.125 0 0 1 14.875 28H21v6.125a6.125 6.125 0 1 1-12.25 0ZM8.75 21.875a6.125 6.125 0 0 1 6.125-6.125H21V28h-6.125a6.125 6.125 0 0 1-6.125-6.125Z" />
      </g>
    </svg>
)

export default SvgComponent
