import { Container } from "./styles";

interface Props {
  title: string;
  selected?: boolean;
  onClick: () => void;
}

export function SelectButton({ title, selected = false, onClick }: Props) {
  return (
    <Container selected={selected} onClick={onClick}>
      {title}
    </Container>
  );
}
