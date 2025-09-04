/** @format */

const Icons = {
  dashboard: ({
    color = "#7D7E8E",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.5 11.5C5.90905 11.5 5.32389 11.3836 4.77792 11.1575C4.23196 10.9313 3.73588 10.5998 3.31802 10.182C2.90016 9.76412 2.56869 9.26804 2.34254 8.72208C2.1164 8.17611 2 7.59095 2 7C2 6.40905 2.1164 5.82389 2.34254 5.27792C2.56869 4.73196 2.90016 4.23588 3.31802 3.81802C3.73588 3.40016 4.23196 3.06869 4.77792 2.84254C5.32389 2.6164 5.90905 2.5 6.5 2.5C7.69347 2.5 8.83807 2.97411 9.68198 3.81802C10.5259 4.66193 11 5.80653 11 7C11 8.19347 10.5259 9.33807 9.68198 10.182C8.83807 11.0259 7.69347 11.5 6.5 11.5ZM7 21.5C5.80653 21.5 4.66193 21.0259 3.81802 20.182C2.97411 19.3381 2.5 18.1935 2.5 17C2.5 15.8065 2.97411 14.6619 3.81802 13.818C4.66193 12.9741 5.80653 12.5 7 12.5C8.19347 12.5 9.33807 12.9741 10.182 13.818C11.0259 14.6619 11.5 15.8065 11.5 17C11.5 18.1935 11.0259 19.3381 10.182 20.182C9.33807 21.0259 8.19347 21.5 7 21.5ZM17 11.5C16.4091 11.5 15.8239 11.3836 15.2779 11.1575C14.732 10.9313 14.2359 10.5998 13.818 10.182C13.4002 9.76412 13.0687 9.26804 12.8425 8.72208C12.6164 8.17611 12.5 7.59095 12.5 7C12.5 6.40905 12.6164 5.82389 12.8425 5.27792C13.0687 4.73196 13.4002 4.23588 13.818 3.81802C14.2359 3.40016 14.732 3.06869 15.2779 2.84254C15.8239 2.6164 16.4091 2.5 17 2.5C18.1935 2.5 19.3381 2.97411 20.182 3.81802C21.0259 4.66193 21.5 5.80653 21.5 7C21.5 8.19347 21.0259 9.33807 20.182 10.182C19.3381 11.0259 18.1935 11.5 17 11.5ZM17 21.5C15.8065 21.5 14.6619 21.0259 13.818 20.182C12.9741 19.3381 12.5 18.1935 12.5 17C12.5 15.8065 12.9741 14.6619 13.818 13.818C14.6619 12.9741 15.8065 12.5 17 12.5C18.1935 12.5 19.3381 12.9741 20.182 13.818C21.0259 14.6619 21.5 15.8065 21.5 17C21.5 18.1935 21.0259 19.3381 20.182 20.182C19.3381 21.0259 18.1935 21.5 17 21.5ZM6.5 9.5C7.16304 9.5 7.79893 9.23661 8.26777 8.76777C8.73661 8.29893 9 7.66304 9 7C9 6.33696 8.73661 5.70107 8.26777 5.23223C7.79893 4.76339 7.16304 4.5 6.5 4.5C5.83696 4.5 5.20107 4.76339 4.73223 5.23223C4.26339 5.70107 4 6.33696 4 7C4 7.66304 4.26339 8.29893 4.73223 8.76777C5.20107 9.23661 5.83696 9.5 6.5 9.5ZM7 19.5C7.66304 19.5 8.29893 19.2366 8.76777 18.7678C9.23661 18.2989 9.5 17.663 9.5 17C9.5 16.337 9.23661 15.7011 8.76777 15.2322C8.29893 14.7634 7.66304 14.5 7 14.5C6.33696 14.5 5.70107 14.7634 5.23223 15.2322C4.76339 15.7011 4.5 16.337 4.5 17C4.5 17.663 4.76339 18.2989 5.23223 18.7678C5.70107 19.2366 6.33696 19.5 7 19.5ZM17 9.5C17.663 9.5 18.2989 9.23661 18.7678 8.76777C19.2366 8.29893 19.5 7.66304 19.5 7C19.5 6.33696 19.2366 5.70107 18.7678 5.23223C18.2989 4.76339 17.663 4.5 17 4.5C16.337 4.5 15.7011 4.76339 15.2322 5.23223C14.7634 5.70107 14.5 6.33696 14.5 7C14.5 7.66304 14.7634 8.29893 15.2322 8.76777C15.7011 9.23661 16.337 9.5 17 9.5ZM17 19.5C17.663 19.5 18.2989 19.2366 18.7678 18.7678C19.2366 18.2989 19.5 17.663 19.5 17C19.5 16.337 19.2366 15.7011 18.7678 15.2322C18.2989 14.7634 17.663 14.5 17 14.5C16.337 14.5 15.7011 14.7634 15.2322 15.2322C14.7634 15.7011 14.5 16.337 14.5 17C14.5 17.663 14.7634 18.2989 15.2322 18.7678C15.7011 19.2366 16.337 19.5 17 19.5Z'
        fill={color}
      />
    </svg>
  ),
  search: ({
    color = "white",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21 21L16.65 16.65'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  building: ({
    color = "#7D7E8E",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21 19H23V21H1V19H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V19H19V11H17V9H20C20.2652 9 20.5196 9.10536 20.7071 9.29289C20.8946 9.48043 21 9.73478 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z'
        fill={color}
      />
    </svg>
  ),
  document: ({
    color = "#7D7E8E",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g opacity='0.5' clip-path='url(#clip0_7100_28061)'>
        <path
          d='M16 20V4H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H16ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V10H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22ZM18 12V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_7100_28061'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  profile: ({
    color = "#7D7E8E",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g opacity='0.5' clip-path='url(#clip0_6888_24664)'>
        <path
          d='M3 4.995C3 3.893 3.893 3 4.995 3H19.005C20.107 3 21 3.893 21 4.995V19.005C21 19.5341 20.7898 20.0415 20.4157 20.4157C20.0415 20.7898 19.5341 21 19.005 21H4.995C4.46589 21 3.95846 20.7898 3.58432 20.4157C3.21019 20.0415 3 19.5341 3 19.005V4.995ZM5 5V19H19V5H5ZM7.972 18.18C7.35698 17.9136 6.77036 17.586 6.221 17.202C6.85527 16.219 7.72596 15.4108 8.75339 14.8514C9.78082 14.292 10.9322 13.9993 12.102 14C14.502 14 16.619 15.207 17.88 17.047C17.3412 17.4456 16.7636 17.789 16.156 18.072C15.6929 17.43 15.0838 16.9073 14.3789 16.547C13.674 16.1868 12.8936 15.9993 12.102 16C10.387 16 8.872 16.864 7.972 18.18ZM12 13C11.5404 13 11.0852 12.9095 10.6606 12.7336C10.236 12.5577 9.85013 12.2999 9.52513 11.9749C9.20012 11.6499 8.94231 11.264 8.76642 10.8394C8.59053 10.4148 8.5 9.95963 8.5 9.5C8.5 9.04037 8.59053 8.58525 8.76642 8.16061C8.94231 7.73597 9.20012 7.35013 9.52513 7.02513C9.85013 6.70012 10.236 6.44231 10.6606 6.26642C11.0852 6.09053 11.5404 6 12 6C12.9283 6 13.8185 6.36875 14.4749 7.02513C15.1313 7.6815 15.5 8.57174 15.5 9.5C15.5 10.4283 15.1313 11.3185 14.4749 11.9749C13.8185 12.6313 12.9283 13 12 13ZM12 11C12.3978 11 12.7794 10.842 13.0607 10.5607C13.342 10.2794 13.5 9.89782 13.5 9.5C13.5 9.10218 13.342 8.72064 13.0607 8.43934C12.7794 8.15804 12.3978 8 12 8C11.6022 8 11.2206 8.15804 10.9393 8.43934C10.658 8.72064 10.5 9.10218 10.5 9.5C10.5 9.89782 10.658 10.2794 10.9393 10.5607C11.2206 10.842 11.6022 11 12 11Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6888_24664'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  info: ({
    color = "#7D7E8E",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_6783_63867)'>
        <path
          d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6783_63867'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  arrowLeft: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19 12H5'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 5L5 12L12 19'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  arrowRight: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 12H19'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 19L19 12L12 5'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  lock: ({
    color = "#C8230D",
    width = "17",
    height = "17",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.4667 7.8335H4.13338C3.397 7.8335 2.80005 8.43045 2.80005 9.16683V13.8335C2.80005 14.5699 3.397 15.1668 4.13338 15.1668H13.4667C14.2031 15.1668 14.8 14.5699 14.8 13.8335V9.16683C14.8 8.43045 14.2031 7.8335 13.4667 7.8335Z'
        fill={color}
      />
      <path
        d='M5.4668 7.8335V5.16683C5.4668 4.28277 5.81799 3.43493 6.44311 2.80981C7.06823 2.18469 7.91608 1.8335 8.80013 1.8335C9.68418 1.8335 10.532 2.18469 11.1572 2.80981C11.7823 3.43493 12.1335 4.28277 12.1335 5.16683V7.8335'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  bulb: ({
    color = "#7344AC",
    width = "17",
    height = "17",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.29997 13.833H10.3V15.1663H6.29997V13.833ZM11.5706 9.64101C12.2573 8.83701 12.9666 8.00567 12.9666 6.49967C12.9666 3.92701 10.8726 1.83301 8.29997 1.83301C5.7273 1.83301 3.6333 3.92701 3.6333 6.49967C3.6333 8.02301 4.34463 8.85167 5.03397 9.65301C5.27263 9.93167 5.51997 10.2203 5.75663 10.5523C5.85263 10.6897 6.00997 11.2163 6.15063 11.833H5.62263V13.1663H10.9773V11.833H10.4506C10.5926 11.215 10.7506 10.687 10.846 10.5497C11.0806 10.2143 11.33 9.92301 11.5706 9.64101Z'
        fill={color}
      />
    </svg>
  ),
  star: ({
    color = "#7344AC",
    width = "17",
    height = "17",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.49992 1.83398L10.5599 6.00732L15.1666 6.68065L11.8333 9.92732L12.6199 14.514L8.49992 12.3473L4.37992 14.514L5.16659 9.92732L1.83325 6.68065L6.43992 6.00732L8.49992 1.83398Z'
        fill={color}
      />
    </svg>
  ),
  starOutline: ({
    color = "#3662AE",
    width = "17",
    height = "17",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.49992 1.83398L10.5599 6.00732L15.1666 6.68065L11.8333 9.92732L12.6199 14.514L8.49992 12.3473L4.37992 14.514L5.16659 9.92732L1.83325 6.68065L6.43992 6.00732L8.49992 1.83398Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  globe: ({
    color = "#E0EEF9",
    width = "17",
    height = "17",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_1543_17869)'>
        <path
          d='M8.29997 15.1668C11.9819 15.1668 14.9666 12.1821 14.9666 8.50016C14.9666 4.81826 11.9819 1.8335 8.29997 1.8335C4.61807 1.8335 1.6333 4.81826 1.6333 8.50016C1.6333 12.1821 4.61807 15.1668 8.29997 15.1668Z'
          fill='#3662AE'
        />
        <path
          d='M1.6333 8.5H14.9666'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8.29997 1.8335C9.96749 3.65906 10.9151 6.02819 10.9666 8.50016C10.9151 10.9721 9.96749 13.3413 8.29997 15.1668C6.63245 13.3413 5.6848 10.9721 5.6333 8.50016C5.6848 6.02819 6.63245 3.65906 8.29997 1.8335V1.8335Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1543_17869'>
          <rect
            width={Number(width) - 1}
            height={Number(height) - 1}
            fill='white'
            transform='translate(0.300049 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
  candleSticks: ({
    color = "#E4E4E7",
    width = "48",
    height = "35",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='43.9629'
        y='34.7495'
        width='34.4982'
        height='4.03713'
        rx='2.01856'
        transform='rotate(-90 43.9629 34.7495)'
        fill={color}
        fill-opacity='0.1'
      />
      <rect
        x='43.9629'
        y='34.7495'
        width='8.22649'
        height='4.03713'
        rx='2.01857'
        transform='rotate(-90 43.9629 34.7495)'
        fill={color}
      />
      <rect
        x='32.9717'
        y='34.7495'
        width='34.4982'
        height='4.03709'
        rx='2.01855'
        transform='rotate(-90 32.9717 34.7495)'
        fill={color}
        fill-opacity='0.1'
      />
      <rect
        x='32.9717'
        y='34.7495'
        width='31.3137'
        height='4.03713'
        rx='2.01857'
        transform='rotate(-90 32.9717 34.7495)'
        fill={color}
      />
      <rect
        x='21.9814'
        y='34.7495'
        width='34.4982'
        height='4.03713'
        rx='2.01857'
        transform='rotate(-90 21.9814 34.7495)'
        fill={color}
        fill-opacity='0.1'
      />
      <rect
        x='21.9814'
        y='34.7495'
        width='23.8834'
        height='4.03714'
        rx='2.01857'
        transform='rotate(-90 21.9814 34.7495)'
        fill={color}
      />
      <rect
        x='10.9912'
        y='34.7495'
        width='34.4982'
        height='4.03714'
        rx='2.01857'
        transform='rotate(-90 10.9912 34.7495)'
        fill={color}
        fill-opacity='0.1'
      />
      <rect
        x='10.9912'
        y='34.7495'
        width='17.7798'
        height='4.03714'
        rx='2.01857'
        transform='rotate(-90 10.9912 34.7495)'
        fill={color}
      />
      <rect
        y='34.7495'
        width='34.4982'
        height='4.03714'
        rx='2.01857'
        transform='rotate(-90 0 34.7495)'
        fill={color}
        fill-opacity='0.1'
      />
      <rect
        y='34.7495'
        width='28.3946'
        height='4.03715'
        rx='2.01857'
        transform='rotate(-90 0 34.7495)'
        fill={color}
      />
    </svg>
  ),
  user: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.0001 14.75C14.4164 14.75 16.3751 12.7912 16.3751 10.375C16.3751 7.95875 14.4164 6 12.0001 6C9.58388 6 7.62512 7.95875 7.62512 10.375C7.62512 12.7912 9.58388 14.75 12.0001 14.75ZM12.0001 14.75C15.4102 14.75 18.2507 16.5788 18.8733 19M12.0001 14.75C8.59007 14.75 5.74953 16.5788 5.12695 19M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
        stroke={color}
        stroke-width='1.2'
        stroke-linecap='round'
      />
    </svg>
  ),
  export: ({
    color = "#686868",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M17.5 13V16.3333C17.5 16.7754 17.3244 17.1993 17.0118 17.5118C16.6993 17.8244 16.2754 18 15.8333 18H4.16667C3.72464 18 3.30072 17.8244 2.98816 17.5118C2.67559 17.1993 2.5 16.7754 2.5 16.3333V13'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M5.83325 8.83325L9.99992 12.9999L14.1666 8.83325'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10 13V3'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  plus: ({
    color = "white",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10 4.66675V16.3334'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4.16675 10.5H15.8334'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  upNdownArrow: ({
    color = "#686868",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5.83325 13L9.99992 17.1667L14.1666 13'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M5.83325 7.99992L9.99992 3.83325L14.1666 7.99992'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  picture: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.00559 8C3 8.41261 3 8.87562 3 9.4V14.6C3 16.8402 3 17.9603 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C6.03968 21 7.15979 21 9.4 21H14.6C15.1244 21 15.5874 21 16 20.9944M3.00559 8C3.02389 6.6499 3.10205 5.8394 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03968 3 7.15979 3 9.4 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03968 21 7.15979 21 9.4V14.6C21 16.1138 21 17.1162 20.8655 17.8711M3.00559 8L8.00559 13M16 20.9944C17.3501 20.9761 18.1606 20.8979 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7054 18.5385 20.8009 18.2333 20.8655 17.8711M16 20.9944L8.00559 13M8.00559 13L9.73726 11.2683C10.5293 10.4763 10.9253 10.0803 11.382 9.93191C11.7837 9.80139 12.2163 9.80139 12.618 9.93191C13.0747 10.0803 13.4707 10.4763 14.2627 11.2683L20.8655 17.8711M17.01 7H16.99'
        stroke={color}
        stroke-width='1.2'
        stroke-linecap='round'
      />
    </svg>
  ),
  card: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20 5H4C2.89543 5 2 5.89543 2 7V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V7C22 5.89543 21.1046 5 20 5Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2 10H22'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  alert: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M21.7301 18L13.7301 3.99998C13.5556 3.69218 13.3027 3.43617 12.997 3.25805C12.6913 3.07993 12.3438 2.98608 11.9901 2.98608C11.6363 2.98608 11.2888 3.07993 10.9831 3.25805C10.6774 3.43617 10.4245 3.69218 10.2501 3.99998L2.25005 18C2.07373 18.3053 1.98128 18.6519 1.98206 19.0045C1.98284 19.3571 2.07683 19.7032 2.2545 20.0078C2.43217 20.3124 2.6872 20.5646 2.99375 20.7388C3.30029 20.9131 3.64746 21.0032 4.00005 21H20.0001C20.351 20.9996 20.6956 20.9069 20.9993 20.7313C21.3031 20.5556 21.5553 20.3031 21.7306 19.9991C21.9059 19.6951 21.9981 19.3504 21.998 18.9995C21.9979 18.6486 21.9055 18.3039 21.7301 18Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 9V13'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 17H12.01'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  cogWheel: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V4.18C9.77964 4.53073 9.68706 4.87519 9.51154 5.17884C9.33602 5.48248 9.08374 5.73464 8.78 5.91L8.35 6.16C8.04596 6.33554 7.70108 6.42795 7.35 6.42795C6.99893 6.42795 6.65404 6.33554 6.35 6.16L6.2 6.08C5.74107 5.81526 5.19584 5.74344 4.684 5.88031C4.17217 6.01717 3.73555 6.35154 3.47 6.81L3.25 7.19C2.98526 7.64893 2.91345 8.19416 3.05031 8.706C3.18717 9.21783 3.52154 9.65445 3.98 9.92L4.13 10.02C4.43228 10.1945 4.68362 10.4451 4.85905 10.7468C5.03448 11.0486 5.1279 11.391 5.13 11.74V12.25C5.1314 12.6024 5.03965 12.949 4.86405 13.2545C4.68844 13.5601 4.43521 13.8138 4.13 13.99L3.98 14.08C3.52154 14.3456 3.18717 14.7822 3.05031 15.294C2.91345 15.8058 2.98526 16.3511 3.25 16.81L3.47 17.19C3.73555 17.6485 4.17217 17.9828 4.684 18.1197C5.19584 18.2566 5.74107 18.1847 6.2 17.92L6.35 17.84C6.65404 17.6645 6.99893 17.5721 7.35 17.5721C7.70108 17.5721 8.04596 17.6645 8.35 17.84L8.78 18.09C9.08374 18.2654 9.33602 18.5175 9.51154 18.8212C9.68706 19.1248 9.77964 19.4693 9.78 19.82V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V19.82C14.2204 19.4693 14.3129 19.1248 14.4885 18.8212C14.664 18.5175 14.9163 18.2654 15.22 18.09L15.65 17.84C15.954 17.6645 16.2989 17.5721 16.65 17.5721C17.0011 17.5721 17.346 17.6645 17.65 17.84L17.8 17.92C18.2589 18.1847 18.8042 18.2566 19.316 18.1197C19.8278 17.9828 20.2645 17.6485 20.53 17.19L20.75 16.8C21.0147 16.3411 21.0866 15.7958 20.9497 15.284C20.8128 14.7722 20.4785 14.3356 20.02 14.07L19.87 13.99C19.5648 13.8138 19.3116 13.5601 19.136 13.2545C18.9604 12.949 18.8686 12.6024 18.87 12.25V11.75C18.8686 11.3976 18.9604 11.051 19.136 10.7455C19.3116 10.4399 19.5648 10.1862 19.87 10.01L20.02 9.92C20.4785 9.65445 20.8128 9.21783 20.9497 8.706C21.0866 8.19416 21.0147 7.64893 20.75 7.19L20.53 6.81C20.2645 6.35154 19.8278 6.01717 19.316 5.88031C18.8042 5.74344 18.2589 5.81526 17.8 6.08L17.65 6.16C17.346 6.33554 17.0011 6.42795 16.65 6.42795C16.2989 6.42795 15.954 6.33554 15.65 6.16L15.22 5.91C14.9163 5.73464 14.664 5.48248 14.4885 5.17884C14.3129 4.87519 14.2204 4.53073 14.22 4.18V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2V2Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  logout: ({
    color = "#C8230D",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 17L21 12L16 7'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21 12H9'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  folder1: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6H12.07C11.7406 5.9983 11.4167 5.91525 11.1271 5.75824C10.8375 5.60123 10.5912 5.37512 10.41 5.1L9.59 3.9C9.40882 3.62488 9.1625 3.39877 8.8729 3.24176C8.58331 3.08475 8.25941 3.0017 7.93 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 19.1 2.9 20 4 20Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M2 10H22'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  users: ({
    color = "#7D7E8E",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g opacity='0.5' clip-path='url(#clip0_6888_24659)'>
        <path
          d='M9.55 11.5C8.95326 11.5 8.38097 11.2629 7.95901 10.841C7.53705 10.419 7.3 9.84674 7.3 9.25C7.3 8.65326 7.53705 8.08097 7.95901 7.65901C8.38097 7.23705 8.95326 7 9.55 7C10.1467 7 10.719 7.23705 11.141 7.65901C11.5629 8.08097 11.8 8.65326 11.8 9.25C11.8 9.84674 11.5629 10.419 11.141 10.841C10.719 11.2629 10.1467 11.5 9.55 11.5ZM10 19.748V16.4C10 15.912 10.144 15.463 10.404 15.062C9.51266 14.9352 8.60468 14.9957 7.73806 15.2397C6.87144 15.4837 6.06525 15.9058 5.371 16.479C6.46407 18.0966 8.11014 19.2594 10 19.749V19.748ZM4.453 14.66C5.91349 13.5792 7.68308 12.9971 9.5 13C10.543 13 11.543 13.188 12.467 13.532C13.345 13.189 14.392 13 15.5 13C17.16 13 18.685 13.424 19.706 14.156C20.0435 12.9459 20.0913 11.6733 19.8455 10.4412C19.5997 9.20918 19.0671 8.05236 18.291 7.06444C17.5149 6.07652 16.517 5.28527 15.3782 4.75478C14.2394 4.2243 12.9916 3.96948 11.736 4.01097C10.4803 4.05246 9.2521 4.38909 8.15077 4.9936C7.04945 5.59811 6.10597 6.4535 5.39676 7.4905C4.68755 8.5275 4.23254 9.71695 4.06858 10.9625C3.90461 12.2081 4.03631 13.4748 4.453 14.66ZM18.879 16.086C18.486 15.553 17.171 15 15.5 15C13.494 15 12 15.797 12 16.4V20C13.3878 20.0008 14.752 19.6403 15.9583 18.954C17.1646 18.2678 18.1715 17.2794 18.88 16.086H18.879ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM15.5 12.5C14.9696 12.5 14.4609 12.2893 14.0858 11.9142C13.7107 11.5391 13.5 11.0304 13.5 10.5C13.5 9.96957 13.7107 9.46086 14.0858 9.08579C14.4609 8.71071 14.9696 8.5 15.5 8.5C16.0304 8.5 16.5391 8.71071 16.9142 9.08579C17.2893 9.46086 17.5 9.96957 17.5 10.5C17.5 11.0304 17.2893 11.5391 16.9142 11.9142C16.5391 12.2893 16.0304 12.5 15.5 12.5Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6888_24659'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  circleCheck: ({
    color = "#198841",
    width = "17",
    height = "16",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.1666 7.38625V7.99958C15.1658 9.4372 14.7003 10.836 13.8395 11.9875C12.9787 13.1389 11.7688 13.9812 10.3902 14.3889C9.01154 14.7965 7.53809 14.7475 6.18957 14.2493C4.84104 13.7511 3.68969 12.8303 2.90723 11.6243C2.12476 10.4183 1.75311 8.99163 1.8477 7.55713C1.94229 6.12263 2.49806 4.75713 3.43211 3.6643C4.36615 2.57146 5.62844 1.80984 7.03071 1.49301C8.43298 1.17619 9.9001 1.32114 11.2133 1.90625'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M15.1667 2.66699L8.5 9.34033L6.5 7.34033'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  circleCancel: ({
    color = "#C8230D",
    width = "17",
    height = "16",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 17 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.4999 6.00065L8.49992 8.00065M8.49992 8.00065L6.49992 10.0006M8.49992 8.00065L10.4999 10.0007M8.49992 8.00065L6.49992 6.00065M15.1666 8.00065C15.1666 11.6825 12.1818 14.6673 8.49992 14.6673C4.81802 14.6673 1.83325 11.6825 1.83325 8.00065C1.83325 4.31875 4.81802 1.33398 8.49992 1.33398C12.1818 1.33398 15.1666 4.31875 15.1666 8.00065Z'
        stroke={color}
        stroke-width='1.2'
        stroke-linecap='round'
      />
    </svg>
  ),
  options: ({
    color = "#1E1E1E",
    width = "2",
    height = "13",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 2 13'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 0.5C0.45 0.5 0 0.95 0 1.5C0 2.05 0.45 2.5 1 2.5C1.55 2.5 2 2.05 2 1.5C2 0.95 1.55 0.5 1 0.5ZM1 10.5C0.45 10.5 0 10.95 0 11.5C0 12.05 0.45 12.5 1 12.5C1.55 12.5 2 12.05 2 11.5C2 10.95 1.55 10.5 1 10.5ZM1 5.5C0.45 5.5 0 5.95 0 6.5C0 7.05 0.45 7.5 1 7.5C1.55 7.5 2 7.05 2 6.5C2 5.95 1.55 5.5 1 5.5Z'
        fill={color}
      />
    </svg>
  ),
  eye: ({
    color = "#4B4B4B",
    width = "16",
    height = "16",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_702_31134)'>
        <path
          d='M0.666748 7.99935C0.666748 7.99935 3.33341 2.66602 8.00008 2.66602C12.6667 2.66602 15.3334 7.99935 15.3334 7.99935C15.3334 7.99935 12.6667 13.3327 8.00008 13.3327C3.33341 13.3327 0.666748 7.99935 0.666748 7.99935Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z'
          stroke={color}
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_702_31134'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  team: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13'
        stroke='#686868'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88'
        stroke='#686868'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  goal: ({
    color = "#198841",
    width = "25",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.5 18C15.8137 18 18.5 15.3137 18.5 12C18.5 8.68629 15.8137 6 12.5 6C9.18629 6 6.5 8.68629 6.5 12C6.5 15.3137 9.18629 18 12.5 18Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12.5 14C13.6046 14 14.5 13.1046 14.5 12C14.5 10.8954 13.6046 10 12.5 10C11.3954 10 10.5 10.8954 10.5 12C10.5 13.1046 11.3954 14 12.5 14Z'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  revenue: ({
    color = "#A17C07",
    width = "26",
    height = "26",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 26 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.3161 10.0977C15.1776 9.70816 14.9221 9.37092 14.5845 9.13218C14.247 8.89343 13.8439 8.76484 13.4304 8.764H11.8824C11.4408 8.76169 11.014 8.92322 10.6846 9.21735C10.3551 9.51148 10.1464 9.91732 10.0989 10.3564C10.0513 10.7955 10.1683 11.2366 10.4271 11.5944C10.6859 11.9523 11.0683 12.2014 11.5001 12.2937L13.8573 12.808C14.3393 12.9135 14.7653 13.1934 15.0534 13.5939C15.3415 13.9944 15.4715 14.4873 15.4184 14.9778C15.3652 15.4683 15.1327 15.9219 14.7654 16.2514C14.3982 16.5809 13.9221 16.763 13.4287 16.7629H12.0967C11.2259 16.7629 10.4853 16.2074 10.211 15.4309M12.7636 8.764V6.76343M12.7636 18.7634V16.7646M4.42529 24.1394V19.8537H8.71101'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M23.9509 10.9497C24.406 13.3758 24.0427 15.8843 22.9179 18.0816C21.7931 20.2788 19.9706 22.0404 17.7364 23.0898C15.5022 24.1392 12.9828 24.4171 10.5736 23.8798C8.16438 23.3425 6.00177 22.0205 4.42519 20.1211M2.04919 15.0503C1.59409 12.6242 1.95744 10.1157 3.0822 7.91844C4.20697 5.7212 6.02948 3.95962 8.26368 2.91019C10.4979 1.86076 13.0173 1.58289 15.4265 2.12019C17.8357 2.65749 19.9983 3.97955 21.5749 5.87886'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M21.575 1.86057V6.14628H17.2893'
        stroke={color}
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  flag: ({
    color = "#C8230D",
    width = "16",
    height = "17",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_1534_3177)'>
        <path
          d='M4.66675 15.1666V1.83331L11.3334 5.16665L4.66675 8.49998'
          stroke={color}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1534_3177'>
          <rect
            width={width}
            height={Number(height) - 1}
            fill='white'
            transform='translate(0 0.5)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
  trophy: ({
    color = "#686868",
    width = "24",
    height = "24",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6 9H4.5C3.83696 9 3.20107 8.73661 2.73223 8.26777C2.26339 7.79893 2 7.16304 2 6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H6'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M18 9H19.5C20.163 9 20.7989 8.73661 21.2678 8.26777C21.7366 7.79893 22 7.16304 22 6.5C22 5.83696 21.7366 5.20107 21.2678 4.73223C20.7989 4.26339 20.163 4 19.5 4H18'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 22H20'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10 14.66V17C10 17.55 9.53 17.98 9.03 18.21C7.85 18.75 7 20.24 7 22'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14 14.66V17C14 17.55 14.47 17.98 14.97 18.21C16.15 18.75 17 20.24 17 22'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M18 2H6V9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V2Z'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  arrowRight1: ({
    color = "#198841",
    width = "18",
    height = "18",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.75 9H14.25'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9 14.25L14.25 9L9 3.75'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  profileCard: ({
    color = "black",
    size = "24",
  }: {
    color?: string;
    size?: string;
  }) => (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_6832_15114)'>
        <path
          d='M14 21L12 23L10 21H4.995C4.46589 21 3.95846 20.7898 3.58432 20.4157C3.21019 20.0415 3 19.5341 3 19.005V4.995C3 3.893 3.893 3 4.995 3H19.005C20.107 3 21 3.893 21 4.995V19.005C21 19.5341 20.7898 20.0415 20.4157 20.4157C20.0415 20.7898 19.5341 21 19.005 21H14ZM6.357 18H17.847C17.2026 17.0734 16.3435 16.3166 15.3431 15.7942C14.3427 15.2717 13.2306 14.9993 12.102 15C10.9734 14.9993 9.86134 15.2717 8.86091 15.7942C7.86048 16.3166 7.00137 17.0734 6.357 18ZM12 13C12.4596 13 12.9148 12.9095 13.3394 12.7336C13.764 12.5577 14.1499 12.2999 14.4749 11.9749C14.7999 11.6499 15.0577 11.264 15.2336 10.8394C15.4095 10.4148 15.5 9.95963 15.5 9.5C15.5 9.04037 15.4095 8.58525 15.2336 8.16061C15.0577 7.73597 14.7999 7.35013 14.4749 7.02513C14.1499 6.70012 13.764 6.44231 13.3394 6.26642C12.9148 6.09053 12.4596 6 12 6C11.0717 6 10.1815 6.36875 9.52513 7.02513C8.86875 7.6815 8.5 8.57174 8.5 9.5C8.5 10.4283 8.86875 11.3185 9.52513 11.9749C10.1815 12.6313 11.0717 13 12 13Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6832_15114'>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  bell: ({
    color = "#1A1A1A",
    width = "33",
    height = "33",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 33 33'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.3336 29.8333H20.3336M7.00026 12.5C7.00026 7.34534 11.1789 3.16667 16.3336 3.16667C21.4882 3.16667 25.6669 7.34534 25.6669 12.5V15.9371C25.6669 18.0429 26.2903 20.1017 27.4584 21.8539L28.1112 22.8331C28.2232 23.0011 28.1448 23.2296 27.9533 23.2934C20.4108 25.8076 12.2564 25.8076 4.71392 23.2934C4.52237 23.2296 4.44397 23.0011 4.55597 22.8331L5.20879 21.8539C6.37692 20.1017 7.00026 18.0429 7.00026 15.9371V12.5Z'
        stroke={color}
        stroke-width='1.2'
        stroke-linecap='round'
      />
    </svg>
  ),
  eye1: ({
    color = "#000",
    width = "19",
    height = "19",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <path
        fill={color}
        d='M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0'
      />
    </svg>
  ),
  menu: ({
    color = "#1A1A1A",
    width = "32",
    height = "32",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 8H28'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 16H28'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M4 24H28'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
  close: ({
    color = "#1A1A1A",
    width = "32",
    height = "32",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M24 8L8 24M24 24L8 8.00001'
        stroke={color}
        stroke-width='1.2'
        stroke-linecap='round'
      />
    </svg>
  ),
  eyeSlash: ({
    color = "#000",
    width = "19",
    height = "19",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <path
        fill={color}
        d='M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13'
      />
    </svg>
  ),
  flash: ({
    color = "#7D7E8E",
    width = "21",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 21 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15.7338 9.15119H13.096V3.00485C13.096 1.5707 12.3192 1.28046 11.3716 2.35607L10.6887 3.1329L4.9094 9.70607C4.11549 10.6024 4.44842 11.3366 5.64354 11.3366H8.28135V17.4829C8.28135 18.917 9.05818 19.2073 10.0057 18.1317L10.6887 17.3548L16.4679 10.7817C17.2618 9.88534 16.9289 9.15119 15.7338 9.15119Z'
        fill={color}
      />
    </svg>
  ),
  infoSolid: ({
    color = "#b4b4b4",
    width = "19",
    height = "19",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_6805_7853)'>
        <path
          d='M8.00016 14.6668C4.31816 14.6668 1.3335 11.6822 1.3335 8.00016C1.3335 4.31816 4.31816 1.3335 8.00016 1.3335C11.6822 1.3335 14.6668 4.31816 14.6668 8.00016C14.6668 11.6822 11.6822 14.6668 8.00016 14.6668ZM7.3335 7.3335V11.3335H8.66683V7.3335H7.3335ZM7.3335 4.66683V6.00016H8.66683V4.66683H7.3335Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6805_7853'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  ),
  uploadCloud: ({
    color = "#7D7E8E",
    width = "57",
    height = "57",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 57 57'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_6888_21577)'>
        <path
          d='M28.5007 29.9805L38.4011 39.8784L35.0994 43.1801L30.8341 38.9148V51.9464H26.1674V38.9101L21.9021 43.1801L18.6004 39.8784L28.5007 29.9805ZM28.5007 5.27979C32.507 5.27998 36.3736 6.75238 39.3652 9.41706C42.3568 12.0817 44.2649 15.7529 44.7267 19.7325C47.63 20.5242 50.1628 22.311 51.8823 24.7807C53.6018 27.2503 54.3987 30.2457 54.1338 33.2434C53.8689 36.241 52.559 39.0502 50.433 41.18C48.3071 43.3098 45.5002 44.6248 42.5031 44.8951L42.5007 40.2798C42.5044 36.6098 41.0669 33.0851 38.4975 30.4645C35.9282 27.8439 32.4326 26.337 28.7633 26.2682C25.0939 26.1994 21.5443 27.5741 18.8785 30.0965C16.2127 32.6189 14.644 36.0872 14.5101 39.7548L14.5007 40.2798V44.8951C11.5034 44.6252 8.69634 43.3105 6.57004 41.1809C4.44374 39.0513 3.13349 36.2421 2.8683 33.2444C2.60311 30.2467 3.39985 27.2511 5.11926 24.7813C6.83867 22.3114 9.37138 20.5244 12.2747 19.7325C12.736 15.7527 14.644 12.0812 17.6357 9.41647C20.6275 6.7517 24.4943 5.27947 28.5007 5.27979Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6888_21577'>
          <rect
            width={Number(width) - 1}
            height={Number(height) - 1}
            fill='white'
            transform='translate(0.5 0.613281)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
  folder: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.49935 17.5908C2.27834 17.5908 2.06637 17.503 1.91009 17.3467C1.75381 17.1905 1.66602 16.9785 1.66602 16.7575V3.42415C1.66602 3.20314 1.75381 2.99118 1.91009 2.8349C2.06637 2.67862 2.27834 2.59082 2.49935 2.59082H8.67768L10.3443 4.25749H16.666C16.887 4.25749 17.099 4.34528 17.2553 4.50156C17.4116 4.65785 17.4993 4.86981 17.4993 5.09082V7.59082H3.33268V15.9208L4.99935 9.25749H18.7493L16.8244 16.96C16.7792 17.1402 16.6751 17.3001 16.5287 17.4144C16.3822 17.5287 16.2018 17.5908 16.016 17.5908H2.49935Z'
        fill={color}
      />
    </svg>
  ),
  excel: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2.38268 2.48834L12.8577 0.992504C12.9168 0.984023 12.977 0.98835 13.0343 1.00519C13.0916 1.02203 13.1447 1.05099 13.1898 1.09011C13.2349 1.12923 13.2711 1.1776 13.2959 1.23193C13.3207 1.28626 13.3335 1.34528 13.3335 1.405V18.7767C13.3335 18.8363 13.3207 18.8953 13.2959 18.9495C13.2712 19.0038 13.2351 19.0521 13.1901 19.0912C13.145 19.1303 13.0921 19.1593 13.0349 19.1762C12.9777 19.1931 12.9176 19.1975 12.8585 19.1892L2.38185 17.6933C2.1832 17.665 2.00143 17.566 1.86992 17.4145C1.73842 17.2629 1.66602 17.069 1.66602 16.8683V3.31334C1.66602 3.11268 1.73842 2.91876 1.86992 2.76721C2.00143 2.61565 2.1832 2.51663 2.38185 2.48834H2.38268ZM14.1668 2.59084H17.5002C17.7212 2.59084 17.9332 2.67863 18.0894 2.83491C18.2457 2.99119 18.3335 3.20316 18.3335 3.42417V16.7575C18.3335 16.9785 18.2457 17.1905 18.0894 17.3468C17.9332 17.503 17.7212 17.5908 17.5002 17.5908H14.1668V2.59084ZM8.50018 10.0908L10.8335 6.7575H8.83352L7.50018 8.6625L6.16685 6.7575H4.16685L6.50018 10.0908L4.16685 13.4242H6.16685L7.50018 11.5192L8.83352 13.4242H10.8335L8.50018 10.0908Z'
        fill={color}
      />
    </svg>
  ),
  docs: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 20 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_6888_24830)'>
        <path
          d='M16.6667 18.424H3.33333C3.11232 18.424 2.90036 18.3362 2.74408 18.1799C2.5878 18.0236 2.5 17.8117 2.5 17.5907V2.59066C2.5 2.36964 2.5878 2.15768 2.74408 2.0014C2.90036 1.84512 3.11232 1.75732 3.33333 1.75732H16.6667C16.8877 1.75732 17.0996 1.84512 17.2559 2.0014C17.4122 2.15768 17.5 2.36964 17.5 2.59066V17.5907C17.5 17.8117 17.4122 18.0236 17.2559 18.1799C17.0996 18.3362 16.8877 18.424 16.6667 18.424ZM5.83333 5.09066V8.42399H9.16667V5.09066H5.83333ZM5.83333 10.0907V11.7573H14.1667V10.0907H5.83333ZM5.83333 13.424V15.0907H14.1667V13.424H5.83333ZM10.8333 5.92399V7.59066H14.1667V5.92399H10.8333Z'
          fill={color}
        />
      </g>
      <defs>
        <clipPath id='clip0_6888_24830'>
          <rect
            width={width}
            height={height}
            fill='white'
            transform='translate(0 0.0908203)'
          />
        </clipPath>
      </defs>
    </svg>
  ),
  image: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <path
        fill={color}
        d='M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm1-2h12l-3.75-5l-3 4L9 13zm-1 2V5z'
      />
    </svg>
  ),
  pdf: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <g fill='none' fill-rule='evenodd'>
        <path d='m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z' />
        <path
          fill={color}
          d='M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zM12 4H6v16h12V10h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5zm.988 7.848a6.22 6.22 0 0 0 2.235 3.872c.887.717.076 2.121-.988 1.712a6.22 6.22 0 0 0-4.47 0c-1.065.41-1.876-.995-.989-1.712a6.22 6.22 0 0 0 2.235-3.872c.178-1.127 1.8-1.126 1.977 0m-.99 2.304l-.688 1.196h1.38zM14 4.414V8h3.586z'
        />
      </g>
    </svg>
  ),
  otherDoc: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'>
      <g
        fill='none'
        stroke='#000'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='2'>
        <path
          stroke-dasharray='64'
          stroke-dashoffset='64'
          d='M13 3l6 6v12h-14v-18h8'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            dur='0.6s'
            values='64;0'
          />
        </path>
        <path
          stroke-dasharray='14'
          stroke-dashoffset='14'
          stroke-width='1'
          d='M12.5 3v5.5h6.5'>
          <animate
            fill='freeze'
            attributeName='stroke-dashoffset'
            begin='0.7s'
            dur='0.2s'
            values='14;0'
          />
        </path>
      </g>
      <path fill={color} fill-opacity='0' d='M5 3H12.5V8.5H19V21H5V3Z'>
        <animate
          fill='freeze'
          attributeName='fill-opacity'
          begin='1s'
          dur='0.15s'
          values='0;0.3'
        />
      </path>
    </svg>
  ),
  file: ({
    color = "#7D7E8E",
    width = "20",
    height = "21",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 16 16'>
      <path
        fill={color}
        d='M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1'
      />
    </svg>
  ),
  chartLine: ({
    color = "#198841",
    width = "16",
    height = "16",
  }: {
    color?: string;
    width?: string;
    height?: string;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M14 4.99999L10 9.33332L7.33333 5.33332L2 11.6667'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  ),
};

export default Icons;
