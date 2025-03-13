"use client";

interface Props {
  bg?: string;
  color?: string;
  classes?: string;
  width?: number;
  height?: number;
}

export const SocialLinkedin = (props: Props) => {
  const {
    bg = "#000",
    color = "#fff",
    classes = "",
    height = 30,
    width = 30,
  } = props;

  return (
    <i className={classes}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-auto"
      >
        <circle cx="15" cy="15" r="15" fill={bg} />
        <path
          d="M8.22154 22.0586H11.3056V12.0742H8.22154V22.0586Z"
          fill={color}
        />
        <path
          d="M7.94116 8.88672C7.94116 9.87109 8.73555 10.668 9.76359 10.668C10.7449 10.668 11.5393 9.87109 11.5393 8.88672C11.5393 7.90234 10.7449 7.05859 9.76359 7.05859C8.73555 7.05859 7.94116 7.90234 7.94116 8.88672Z"
          fill={color}
        />
        <path
          d="M19.8103 22.0586H22.9412V16.5742C22.9412 13.9023 22.3337 11.793 19.2028 11.793C17.7075 11.793 16.6795 12.6367 16.2589 13.4336H16.2122V12.0742H13.2683V22.0586H16.3524V17.1367C16.3524 15.8242 16.586 14.5586 18.2215 14.5586C19.8103 14.5586 19.8103 16.0586 19.8103 17.1836V22.0586Z"
          fill={color}
        />
      </svg>
    </i>
  );
};
