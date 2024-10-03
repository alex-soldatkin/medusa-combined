import React from "react";
import { IconProps } from "../../../types/icon";

const Logo: React.FC<IconProps> = ({
  size = "20",
  color = "red",
  ...attributes
}) => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 103 132"
      stroke="currentColor"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attributes}
    >
      <rect x="0.5" y="0.5" width="102" height="131" rx="39.5" />
      <rect x="4.5" y="5.5" width="94" height="121" rx="39.5" />
      <path
        d="M49.506 38.2885C49.2159 38.5849 48.9861 38.6824 48.9861 38.6824C48.9861 38.6824 49.174 38.5424 49.506 38.2885C50.3361 37.4405 51.6598 34.9647 49.5077 28.4871C46.6034 19.7454 60.0531 10.5533 60.0531 10.5533C60.0531 10.5533 64.2491 20.429 62.7008 25.0247C61.3449 29.0491 51.846 36.499 49.506 38.2885Z"
      />
      <path
        d="M48.9861 38.6824C48.9861 38.6824 52.412 37.2289 49.5077 28.4871C46.6034 19.7454 60.0531 10.5533 60.0531 10.5533C60.0531 10.5533 64.2491 20.429 62.7008 25.0247C61.1525 29.6203 48.9861 38.6824 48.9861 38.6824Z"
      />
      <path
        d="M58.314 30.7099C50.9472 37.0632 50.0968 38.3412 50.0968 38.3412C50.0968 38.3412 55.095 37.866 60.043 39.8857C64.9909 41.9055 79.9191 34.4478 79.9191 34.4478C79.9191 34.4478 65.6809 24.3566 58.314 30.7099ZM58.314 30.7099C65.6809 24.3566 78.0378 20.056 78.0378 20.056M59.9904 29.3597C67.3573 23.0064 68.3179 12.156 68.3179 12.156"
        strokeLinecap="round"
      />
      <path
        d="M49.554 38.1412C49.554 38.1412 3.36412 86.0782 34.2294 79.4764C65.0947 72.8747 54.3802 127 54.3802 127"
      />
      <path
        d="M29.6201 88V87.4L33.2801 86.5V47.02L29.6201 46.12V45.52H63.4601L61.4201 60.52H60.6401L58.7201 50.86C58.3601 49.3 57.7401 48.18 56.8601 47.5C55.9801 46.78 54.9001 46.42 53.6201 46.42H40.1801V65.98H47.8001C48.3601 65.98 48.8801 65.84 49.3601 65.56C49.8401 65.24 50.2801 64.86 50.6801 64.42C51.2401 63.78 51.7201 62.88 52.1201 61.72C52.5601 60.56 52.8001 59.3 52.8401 57.94H53.4401V72.88H52.8401L48.5801 66.76H40.1801V86.62L43.8401 87.4V88H29.6201Z"
      />
      <path
        d="M39.1601 103V102.4L42.8801 101.62L58.9601 60.52H63.5201L79.3601 101.62L83.0201 102.4V103H67.7201V102.52L71.9801 101.68L58.3601 66.1H57.7001L50.2601 85.9C49.5401 87.7 48.9801 89.42 48.5801 91.06C48.2201 92.7 48.0401 94.14 48.0401 95.38C48.0401 96.74 48.2801 97.96 48.7601 99.04C49.2801 100.12 50.1001 100.96 51.2201 101.56C52.3401 102.12 53.8001 102.4 55.6001 102.4V103H39.1601ZM49.4801 85.72V85.12L66.2201 84.46V85.72H49.4801Z"
      />
    </svg>
  );
};

export default Logo;