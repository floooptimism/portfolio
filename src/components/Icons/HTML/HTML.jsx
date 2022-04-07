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
      <g clipPath="url(#a)">
        <path
          d="m5.25 2.625 2.866 33.076 12.865 3.674 12.898-3.68 2.871-33.07H5.25Zm25.266 10.828H15.422l.328 4.184h14.438l-1.109 12.418L21 32.36l-8.095-2.297-.556-6.356h3.959l.28 3.223L21 28.142l4.382-1.223.458-5.263h-13.7l-1.032-12.27H30.86l-.344 4.067Z"
          fill="#CFCFCF"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h42v42H0z" />
        </clipPath>
      </defs>
    </svg>
)

  export default SvgComponent;
