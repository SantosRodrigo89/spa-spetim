import React from "react";
import { TopHeaderStyle, PhoneStyle } from "./styled";
import { MdPhone, MdShoppingCart, LinkStyle } from "react-icons/md";
import Logo from "../../assets/images/Logo.png";

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
        <div>Rua Ilacir Pereira Lima, 518</div>
      </TopHeaderStyle>

      <div>
        <img src={Logo} alt="Logo Spetim"></img>
        <div>
          <button>home</button>
          <button>sobre</button>
          <button>especiais</button>
          <button>comdida de buteco </button>
        </div>
        <div>
          <div>Pedidos</div>
          <MdShoppingCart />
          <div>
            {" "}
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=3134821232"
              target="_blank"
            >
              (31) 3482-1232
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
