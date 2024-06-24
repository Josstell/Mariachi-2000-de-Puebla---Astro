import * as S from "./styled";
import { useState, type FC } from "react";
import { Hamburger } from "./components/Hamburger";

export const Navigation: FC = () => {
  // to update values for all components, keep the state here
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavigationStyled>
      <S.NavigationListWrapper $isOpen={isOpen}>
        <S.NavigationList>
          <li>
            <a href="/">Servicios</a>
          </li>
          <li>
            <a
              href="https://codexcode.store/themes/cybernetic-website-template"
              target="_blank"
            >
              Contrataciones
            </a>
          </li>
          <li>
            <a href="/Nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </S.NavigationList>
      </S.NavigationListWrapper>
      <Hamburger
        state={{
          open: isOpen,
          setOpen: setIsOpen,
        }}
      />
    </S.NavigationStyled>
  );
};
