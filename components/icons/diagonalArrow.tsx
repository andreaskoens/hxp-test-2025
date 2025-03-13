"use client";

interface Props {
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

export const DiagonalArrow = (props: Props) => {
  const { color = "#000", classes = "", height = 20, width = 21 } = props;

  return (
    <i className={`arrow inline-block align-baseline ${classes}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 21 20`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-auto"
      >
        <path
          d="M1.25005 13.701C0.532607 14.1152 0.286794 15.0326 0.701008 15.75C1.11522 16.4674 2.03261 16.7133 2.75005 16.299L1.25005 13.701ZM20.7694 5.38823C20.9839 4.58803 20.509 3.76552 19.7088 3.55111L6.66878 0.0570541C5.86858 -0.157359 5.04608 0.317515 4.83167 1.11771C4.61725 1.91791 5.09213 2.74042 5.89233 2.95483L17.4834 6.06066L14.3776 17.6518C14.1632 18.452 14.6381 19.2745 15.4383 19.4889C16.2385 19.7033 17.061 19.2284 17.2754 18.4282L20.7694 5.38823ZM2.75005 16.299L20.0706 6.29904L18.5706 3.70096L1.25005 13.701L2.75005 16.299Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
