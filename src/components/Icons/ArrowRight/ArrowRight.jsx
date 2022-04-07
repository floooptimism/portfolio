import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 28 28"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <path
        d="m25.2 14.852-7.578 7.609a1.201 1.201 0 0 1-.852.365c-.305 0-.61-.122-.853-.365a1.213 1.213 0 0 1 0-1.735l5.51-5.509H3.651c-.67 0-1.217-.547-1.217-1.217s.548-1.217 1.217-1.217h17.774l-5.539-5.54a1.213 1.213 0 0 1 0-1.734 1.213 1.213 0 0 1 1.735 0l7.578 7.608c.487.487.487 1.279 0 1.735Z"
        fill="#000"
      />
    </svg>
)

export default SvgComponent
