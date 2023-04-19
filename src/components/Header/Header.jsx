import React from "react";
import Classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import { ButtonAddNew } from "../Ui/ButtonAddNew/ButtonAddNew";
import { Nav } from "../Nav/Nav";
import MySelect from "../Ui/MySelect/MySelect";

export const Header = ({ headerProps }) => {
  // lightTheme,
  //   colorHeaderFooter,
  return (
    <header
      className={Classes.header}
      style={headerProps.lightTheme ? headerProps.colorHeaderFooter : null}
    >
      <Logo
        animationLogoRed={headerProps.animationLogoRed}
        animationLogoGreen={headerProps.animationLogoGreen}
      />

      <ButtonAddNew setActiveModal={headerProps.setActiveModal} />
      <MySelect
        headerProps={headerProps}
        defaultValue="Sort by"
        options={[
          { value: "task", name: "Task : a - z" },
          { value: "taskRev", name: "Task : z - a" },
          { value: "id", name: "Date : new last" },
          { value: "idRev", name: "Date : new first" },
        ]}
      />
      <Nav
        items={headerProps.items}
        setCurrentPage={headerProps.setCurrentPage}
        setCopyItems={headerProps.setCopyItems}
      />
    </header>
  );
};
