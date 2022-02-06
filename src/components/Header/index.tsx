import Switch from "react-switch";

import { ImSun } from "react-icons/im";
import { MdDarkMode } from "react-icons/md";

import { Container, TitlePage, IconChecked, SwitchContainer } from "./styles";

import { useSwitchTheme } from "@hooks/switchTheme";

export function Header() {
  const { toggleTheme, theme } = useSwitchTheme();

  return (
    <Container>
      <TitlePage>
        REACT<span>JS</span>
      </TitlePage>

      <SwitchContainer>
        <Switch
          onChange={toggleTheme}
          checked={theme.TITLE === "dark"}
          handleDiameter={18}
          checkedIcon={
            <IconChecked>
              <MdDarkMode size={18} color="#fff" />
            </IconChecked>
          }
          uncheckedIcon={
            <IconChecked>
              <ImSun size={18} color="#f1f08f" />
            </IconChecked>
          }
          offColor="#333"
          onColor="#333"
        />
      </SwitchContainer>
    </Container>
  );
}
