import { Spinner } from "@components/Spinner";
import { Container, Icon } from "./styles";
import { useSwitchTheme } from "@hooks/switchTheme";

interface Props {
  onClick: () => void;
  lastPage: boolean;
  nextPageLoading: boolean;
}

export function ConfirmButton({ onClick, lastPage, nextPageLoading }: Props) {
  const { theme } = useSwitchTheme();

  return (
    <Container
      role="confirm-button"
      onClick={onClick}
      disabled={nextPageLoading}
    >
      {lastPage ? (
        "last page reached"
      ) : (
        <>
          {nextPageLoading ? (
            <Spinner
              width={25}
              height={25}
              schemeColor={
                theme.TITLE === "light"
                  ? theme.COLORS.WHITE
                  : theme.COLORS.WARNING
              }
            />
          ) : (
            <>
              <Icon src="/icon/add.svg" />
              View more
            </>
          )}
        </>
      )}
    </Container>
  );
}
