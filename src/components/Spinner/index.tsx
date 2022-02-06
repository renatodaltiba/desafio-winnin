import { SpinnerContainer } from "./styles";

export interface Props {
  width?: number;
  height?: number;
  schemeColor?: string;
}

export function Spinner({ schemeColor, height = 50, width = 50 }: Props) {
  return (
    <SpinnerContainer
      role={`spinner`}
      viewBox="0 0 50 50"
      color={schemeColor}
      height={height}
      width={width}
    >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </SpinnerContainer>
  );
}
