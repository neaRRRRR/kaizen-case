import * as React from "react";

const BackButton = (props) => (
  <svg
    width="41px"
    height="41px"
    viewBox="0 0 41 41"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Back_Button" transform="translate(0.5 0.5)">
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
        id="Oval"
        fill="#1D1E1C"
        stroke="none"
      />
      <g id="Back" transform="translate(12 13)">
        <path
          d="M0.410653 5.90488L5.90476 0.410779C6.15764 0.157901 6.50425 0 6.85213 0C7.2 0 7.54661 0.125823 7.79949 0.410779C8.33608 0.947368 8.33608 1.79975 7.79949 2.3376L4.6416 5.49426L15.662 5.49426C16.4194 5.49426 17.0202 6.09376 17.0202 6.85241C17.0202 7.6098 16.4207 8.21056 15.662 8.21056L4.6416 8.21056L7.83171 11.4007C8.36829 11.9373 8.36829 12.7896 7.83171 13.3275C7.29512 13.8641 6.44274 13.8641 5.90488 13.3275L0.410779 7.79991C0.157901 7.54703 0 7.20041 0 6.85254C0 6.50466 0.157895 6.15805 0.410779 5.90517L0.410653 5.90488Z"
          transform="matrix(1 0 0 1 -1.1368684E-13 1.4210855E-14)"
          id="Path"
          fill="#FFFFFF"
          fillRule="evenodd"
          stroke="none"
        />
      </g>
    </g>
  </svg>
);

export default BackButton;
