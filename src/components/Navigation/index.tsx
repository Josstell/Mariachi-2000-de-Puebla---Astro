import * as S from "./styled";
import { useState, type FC } from "react";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { Hamburger } from "./components/Hamburger";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/mariachi2000depuebla",
    Icon: <FaFacebookF />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@Mariachi2000depuebla",
    Icon: <FaYoutube />,
  },
  {
    name: "whatsapp",
    url: "https://api.whatsapp.com/send?phone=522222708050",
    Icon: <IoLogoWhatsapp />,
  },
];

export const Navigation: FC = () => {
  // to update values for all components, keep the state here
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.NavigationStyled>
      <S.NavigationListWrapper $isOpen={isOpen}>
        <S.NavigationList>
          <li>
            <a href="/servicios">Servicios</a>
          </li>
          {/* <li>
            <a
              href="contrato"
            >
              Contrataciones
            </a>
          </li> */}
          <li>
            <a href="/nosotros">Nosotros</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </S.NavigationList>
        {/* {socialMedia?.map((social) => (
          <div key={social.url}>{social.Icon}</div>
        ))} */}
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
