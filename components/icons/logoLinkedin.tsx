"use client";

interface Props {
  bg?: string;
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

export const LogoLinkedin = (props: Props) => {
  const {
    bg = "#000",
    color = "#fff",
    classes = "",
    height = 34,
    width = 34,
  } = props;

  return (
    <i className={`inline-block align-baseline ${classes}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 34 34`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-auto"
      >
        <circle cx="17" cy="17" r="17" fill={bg} />
        <path d="M9.31776 25H12.8131V13.6844H9.31776V25Z" fill={color} />
        <path
          d="M9 10.0719C9 11.1875 9.90031 12.0906 11.0654 12.0906C12.1776 12.0906 13.0779 11.1875 13.0779 10.0719C13.0779 8.95625 12.1776 8 11.0654 8C9.90031 8 9 8.95625 9 10.0719Z"
          fill={color}
        />
        <path
          d="M22.4517 25H26V18.7844C26 15.7562 25.3115 13.3656 21.7632 13.3656C20.0685 13.3656 18.9034 14.3219 18.4268 15.225H18.3738V13.6844H15.0374V25H18.5327V19.4219C18.5327 17.9344 18.7975 16.5 20.6511 16.5C22.4517 16.5 22.4517 18.2 22.4517 19.475V25Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
