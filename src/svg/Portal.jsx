import * as React from "react";

const Portal = (props) => (
  <svg
    width="71px"
    height="73px"
    viewBox="0 0 71 73"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
        id="filter_1"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          radius={2}
          operator="dilate"
          in="SourceAlpha"
          result="effect0_dropShadow"
        />
        <feOffset dx={0} dy={4} />
        <feGaussianBlur stdDeviation={0} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.84705883 0 0 0 0 0.84705883 0 0 0 0 0.84705883 0 0 0 0.5019608 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect0_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect0_dropShadow"
          result="shape"
        />
      </filter>
      <path
        d="M0 0L14.7991 0L14.7991 14.7992L0 14.7992L0 0Z"
        transform="translate(0.04273789 0.05837322)"
        id="path_1"
      />
      <path
        d="M0 0L14.7992 0L14.7992 14.6721L0 14.6721L0 0Z"
        transform="translate(0.042648148 0.0003988604)"
        id="path_2"
      />
      <path
        d="M0 0L14.7992 0L14.7992 14.7992L0 14.7992L0 0Z"
        transform="translate(0 0.015695157)"
        id="path_3"
      />
      <path
        d="M0 0L14.7992 0L14.7992 14.7991L0 14.7991L0 0Z"
        transform="translate(0.08526638 0.01570513)"
        id="path_4"
      />
      <clipPath id="mask_1">
        <use xlinkHref="#path_1" />
      </clipPath>
      <clipPath id="mask_2">
        <use xlinkHref="#path_2" />
      </clipPath>
      <clipPath id="mask_3">
        <use xlinkHref="#path_3" />
      </clipPath>
      <clipPath id="mask_4">
        <use xlinkHref="#path_4" />
      </clipPath>
    </defs>
    <g id="PORTAL" transform="translate(1 1)">
      <g id="Group-6" transform="translate(0 0.115469806)">
        <path
          d="M34.5 0C34.5 -3.01609e-06 34.5 -3.01609e-06 34.5 -3.01609e-06C36.0532 0.00856071 37.6066 0.00395548 39.1597 0.0256882C40.0549 0.0382133 40.9498 0.0653675 41.8442 0.102764C42.5886 0.133889 43.3327 0.176743 44.0757 0.231232C49.5237 0.630726 55.1424 1.78747 59.6472 5.04953C60.3086 5.52842 60.9386 6.04739 61.5341 6.60602C62.425 7.44165 63.234 8.36333 63.9503 9.35254C64.9563 10.7418 65.7772 12.2595 66.4282 13.8451C67.3885 16.184 67.9858 18.6591 68.3575 21.1556C69.0154 25.5743 68.9754 30.045 69 34.5C69 34.5 69 34.5 69 34.5C68.9914 36.0533 68.996 37.6066 68.9743 39.1598C68.9618 40.0549 68.9346 40.9498 68.8972 41.8442C68.8661 42.5886 68.8233 43.3327 68.7688 44.0757C68.3693 49.5237 67.2125 55.1424 63.9505 59.6472C63.4716 60.3086 62.9526 60.9386 62.394 61.5341C61.5583 62.425 60.6367 63.234 59.6475 63.9503C58.2582 64.9563 56.7405 65.7772 55.1549 66.4282C52.816 67.3885 50.3409 67.9858 47.8443 68.3575C43.4257 69.0154 38.955 68.9754 34.5 69C34.5 69 34.5 69 34.5 69C32.9467 68.9914 31.3934 68.996 29.8402 68.9743C28.9451 68.9618 28.0502 68.9346 27.1558 68.8972C26.4113 68.8661 25.6673 68.8233 24.9243 68.7688C19.4763 68.3693 13.8576 67.2125 9.35275 63.9505C8.69145 63.4716 8.06136 62.9526 7.46585 62.394C6.57501 61.5583 5.76601 60.6367 5.04968 59.6475C4.04369 58.2582 3.22284 56.7405 2.57179 55.1549C1.61146 52.816 1.01416 50.3409 0.64246 47.8444C-0.0154192 43.4257 0.024567 38.955 -1.50804e-06 34.5C-1.50804e-06 34.5 -1.50804e-06 34.5 -1.50804e-06 34.5C0.00856172 32.9467 0.00395572 31.3934 0.0256882 29.8402C0.0382131 28.9451 0.0653674 28.0502 0.102764 27.1557C0.133889 26.4113 0.176744 25.6673 0.231232 24.9243C0.630728 19.4763 1.78747 13.8576 5.04953 9.35275C5.52841 8.69143 6.04742 8.06137 6.60604 7.46584C7.44167 6.57499 8.36334 5.766 9.35255 5.04967C10.7418 4.04368 12.2595 3.22284 13.8451 2.5718C16.184 1.61146 18.6591 1.01415 21.1557 0.642456C25.5743 -0.0154175 30.045 0.024567 34.5 0Z"
          transform="translate(0 0.8845302)"
          id="Rectangle"
          fill="#FFFFFF"
          stroke="none"
          filter="url(#filter_1)"
        />
        <g id="Group-13" transform="matrix(-1 0 0 1 69 -2.842171E-14)">
          <path
            d="M0 0C1.66083 1.04141 3.14992 2.27605 4.45507 3.69167C5.72383 5.06783 6.81877 6.61502 7.72867 8.32201L7.96567 8.77601C9.90439 12.572 10.9343 16.7418 10.9343 25.6317L10.9343 35.6031L10.9293 36.6475C10.8471 45.1667 9.73991 49.1397 7.72867 52.9128C5.98988 56.1748 3.5754 58.8532 0.563439 60.8697"
            transform="matrix(-1 0 0 1 10.934264 4.88453)"
            id="Shape-Copy"
            fill="none"
            stroke="#F1DE02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M0 0C1.66083 1.03799 3.14992 2.26857 4.45507 3.67954C5.72383 5.05118 6.81877 6.59328 7.72867 8.29466L7.96567 8.74718C9.90439 12.5307 10.9343 16.6868 10.9343 25.5475L10.9343 35.4861L10.9293 36.5271C10.8471 45.0183 9.73991 48.9783 7.72867 52.739C5.98988 55.9902 3.5754 58.6599 0.563439 60.6697"
            transform="matrix(-4.371139E-08 -1 1 -4.371139E-08 4 11.801983)"
            id="Shape-Copy-3"
            fill="none"
            stroke="#009639"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.29163 -1.14478e-13C5.56039 1.37163 6.65533 2.91374 7.56523 4.61512L7.80224 5.06764C9.74096 8.85119 10.7708 13.0073 10.7708 21.868L10.7708 31.8066L10.7659 32.8476C10.6837 41.3388 9.57647 45.2987 7.56523 49.0594C5.82644 52.3107 3.01196 54.9803 0 56.9902"
            transform="translate(58.229176 8.547262)"
            id="Shape"
            fill="none"
            stroke="#F40000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.89163 -2.03083e-13C5.16039 1.37163 6.25533 2.91374 7.16523 4.61512L7.40223 5.06764C9.34096 8.85119 10.3708 13.0073 10.3708 21.868L10.3708 31.8066L10.3659 32.8476C10.2837 41.3388 9.17647 45.2987 7.16523 49.0594C6.85564 49.6383 6.52462 50.1988 6.17263 50.7403C4.54769 53.2404 2.47568 55.1382 1.1211e-13 56.7902"
            transform="matrix(4.371139E-08 1 -1 4.371139E-08 61.006973 59.496895)"
            id="Shape-Copy-2"
            fill="none"
            stroke="#FF8300"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.16523 -7.04392e-15C5.42644 3.25126 3.01196 5.92091 0 7.93075"
            transform="matrix(-1 0 0 1 10.370826 57.82349)"
            id="Shape-Copy-4"
            fill="none"
            stroke="#FFCF08"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <g id="Plus_Vector" transform="translate(15 16)">
        <g id="Group-3" transform="translate(11.965812 23.931225)">
          <path
            d="M0 0L14.7991 0L14.7991 14.7992L0 14.7992L0 0Z"
            transform="translate(0.04273789 0.05837322)"
            id="Clip-2"
            fill="none"
            fillRule="evenodd"
            stroke="none"
          />
          <g clipPath="url(#mask_1)">
            <path
              d="M7.39976 12.0085C10.127 12.0085 12.0084 10.2326 12.0084 7.67457L12.0084 2.79073L2.79063 2.79073L2.79063 7.67457C2.79063 10.2326 4.67215 12.0085 7.39976 12.0085M7.39976 14.7992C3.23456 14.7992 0 11.7548 0 7.67457L0 0L14.7991 0L14.7991 7.67457C14.7991 11.7548 11.5646 14.7992 7.39976 14.7992"
              transform="translate(0.04273789 0.05837322)"
              id="Fill-1"
              fill="#1D1D1B"
              fillRule="evenodd"
              stroke="none"
            />
          </g>
        </g>
        <g id="Group-6" transform="translate(11.965812 0.09931624)">
          <path
            d="M0 0L14.7992 0L14.7992 14.6721L0 14.6721L0 0Z"
            transform="translate(0.042648148 0.0003988604)"
            id="Clip-5"
            fill="none"
            fillRule="evenodd"
            stroke="none"
          />
          <g clipPath="url(#mask_2)">
            <path
              d="M7.39936 2.79073C4.67215 2.79073 2.79073 4.56665 2.79073 7.12464L2.79073 11.8815L12.0085 11.8815L12.0085 7.12464C12.0085 4.56665 10.127 2.79073 7.39936 2.79073M7.39936 0C11.5646 0 14.7992 3.0444 14.7992 7.12464L14.7992 14.6721L0 14.6721L0 7.12464C0 3.0444 3.23456 0 7.39936 0"
              transform="translate(0.042648148 0.00038888888)"
              id="Fill-4"
              fill="#1D1D1B"
              fillRule="evenodd"
              stroke="none"
            />
          </g>
        </g>
        <g id="Group-9" transform="translate(0 11.965413)">
          <path
            d="M0 0L14.7992 0L14.7992 14.7992L0 14.7992L0 0Z"
            transform="translate(0 0.015695157)"
            id="Clip-8"
            fill="none"
            fillRule="evenodd"
            stroke="none"
          />
          <g clipPath="url(#mask_3)">
            <path
              d="M2.79073 7.39986C2.79073 10.127 4.56665 12.0085 7.12464 12.0085L12.0085 12.0085L12.0085 2.79073L7.12464 2.79073C4.56665 2.79073 2.79073 4.67225 2.79073 7.39986M0 7.39986C0 3.23456 3.0444 0 7.12464 0L14.7992 0L14.7992 14.7992L7.12464 14.7992C3.0444 14.7992 0 11.5647 0 7.39986"
              transform="translate(-2.991453E-05 0.015695157)"
              id="Fill-7"
              fill="#1D1D1B"
              fillRule="evenodd"
              stroke="none"
            />
          </g>
        </g>
        <g id="Group-12" transform="translate(23.931623 11.965413)">
          <path
            d="M0 0L14.7992 0L14.7992 14.7991L0 14.7991L0 0Z"
            transform="translate(0.08526638 0.01570513)"
            id="Clip-11"
            fill="none"
            fillRule="evenodd"
            stroke="none"
          />
          <g clipPath="url(#mask_4)">
            <path
              d="M12.0086 7.39936C12.0086 4.67215 10.2326 2.79073 7.67457 2.79073L2.79083 2.79073L2.79083 12.0085L7.67457 12.0085C10.2326 12.0085 12.0086 10.127 12.0086 7.39936M14.7992 7.39936C14.7992 11.5646 11.7548 14.7991 7.67457 14.7991L0 14.7991L0 0L7.67457 0C11.7548 0 14.7992 3.23456 14.7992 7.39936"
              transform="translate(0.08526638 0.01570513)"
              id="Fill-10"
              fill="#1D1D1B"
              fillRule="evenodd"
              stroke="none"
            />
          </g>
        </g>
        <path
          d="M9.21776 4.60863C9.21776 1.88142 7.44174 0 4.88375 0L0 0L0 9.21776L4.88375 9.21776C7.44174 9.21776 9.21776 7.33624 9.21776 4.60863"
          transform="translate(26.807716 14.771845)"
          id="Fill-13"
          fill="#F1DE02"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.60863 0C1.88142 0 0 1.77593 0 4.33392L0 9.09073L9.21776 9.09073L9.21776 4.33392C9.21776 1.77593 7.33624 0 4.60863 0"
          transform="translate(14.799187 2.8904316)"
          id="Fill-15"
          fill="#009639"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M4.60913 9.21776C7.33634 9.21776 9.21776 7.44184 9.21776 4.88385L9.21776 0L0 0L0 4.88385C0 7.44184 1.88152 9.21776 4.60913 9.21776"
          transform="translate(14.799176 26.780325)"
          id="Fill-17"
          fill="#FF8300"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M0 4.60913C0 7.33624 1.77593 9.21776 4.33392 9.21776L9.21776 9.21776L9.21776 0L4.33392 0C1.77593 0 0 1.88152 0 4.60913"
          transform="translate(2.7906966 14.771834)"
          id="Fill-19"
          fill="#F40000"
          fillRule="evenodd"
          stroke="none"
        />
      </g>
    </g>
  </svg>
);

export default Portal;
