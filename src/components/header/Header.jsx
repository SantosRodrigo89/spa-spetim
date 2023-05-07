import React from "react";
import { MdPhone, MdShoppingCart } from "react-icons/md";
import Logo from "../../assets/images/Logo.png";
import {
  ButtonStyle,
  LinkStyle,
  LinkStyle2,
  LogoStyle,
  MainHeaderStyle,
  PhoneStyle,
  TopHeaderStyle,
} from "./styled";

function Header() {
  return (
    <div>
      <TopHeaderStyle>
        <PhoneStyle>
          <MdPhone />
          <LinkStyle
            href="https://api.whatsapp.com/send?1=pt_BR&phone=3134821232"
            target="_blank"
          >
            (31) 3482-1232
          </LinkStyle>
        </PhoneStyle>
        <address>Rua Ilacir Pereira Lima, 518</address>
      </TopHeaderStyle>

      <MainHeaderStyle>
        <LogoStyle src={Logo} alt="Logo Spetim"></LogoStyle>
        <div>
          <ButtonStyle>HOME</ButtonStyle>
          <ButtonStyle>SOBRE</ButtonStyle>
          <ButtonStyle>ESPECIALIDADES</ButtonStyle>
          <ButtonStyle>COMIDA DI BUTECO</ButtonStyle>
        </div>

        <div>
          <div>Pedidos</div>
          <div>
            <MdShoppingCart />
            <LinkStyle2
              href="https://api.whatsapp.com/send?1=pt_BR&phone=3134821232"
              target="_blank"
            >
              (31) 3482-1232
            </LinkStyle2>
          </div>
        </div>
      </MainHeaderStyle>
    </div>
  );
}

export default Header;
