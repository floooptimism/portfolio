import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={42}
    height={42}
    fill="none"
    viewBox="0 0 42 42"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
      <path
        d="M2.625 2.625v36.75h36.75V2.625H2.625Zm19.688 28.547c0 3.577-2.114 5.321-5.173 5.321-2.762 0-4.366-1.43-5.18-3.157l2.812-1.702c.542.962.954 1.776 2.138 1.776.984 0 1.793-.444 1.793-2.17V19.687h3.61v11.484Zm8.15 5.24c-3.207 0-5.28-1.448-6.29-3.446l2.815-1.63c.739 1.21 1.702 2.015 3.405 2.015 1.43 0 2.261-.634 2.261-1.62 0-1.184-.855-1.603-2.435-2.297l-.863-.371c-2.492-1.06-4.144-2.392-4.144-5.205 0-2.59 1.973-4.481 5.057-4.481 2.196 0 3.773.682 4.91 2.68l-2.695 1.732c-.592-1.06-1.23-1.477-2.22-1.477-1.01 0-1.652.642-1.652 1.477 0 1.036.641 1.455 2.121 2.097l.863.37c2.936 1.258 4.589 2.543 4.589 5.427 0 3.109-2.441 4.728-5.723 4.728Z"
        fill="#CFCFCF"
      />
    </svg>
)

export default SvgComponent
