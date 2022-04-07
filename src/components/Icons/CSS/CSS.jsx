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
        d="m5.25 2.625 2.871 33.077 12.86 3.673 12.898-3.68 2.871-33.07H5.25Zm23.845 27.472-8.09 2.305-8.076-2.316-.554-6.379h3.96l.28 3.245 4.397 1.244.01.023L25.408 27l.463-5.263h-9.219l-.328-4.101h9.897l.357-4.184H11.484l-.328-4.02h19.735l-1.796 20.664Z"
        fill="#CFCFCF"
      />
    </svg>
)

export default SvgComponent;
