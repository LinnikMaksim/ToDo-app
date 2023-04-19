import { useState, useEffect, useCallback } from "react";
import Classes from "./Nav.module.css";

export const Nav = ({ items, setCurrentPage, setCopyItems }) => {
  const [activeNav, setActiveNav] = useState("Active");

  const activeFiilter = useCallback(() => {
    return items.filter((i) => i.complete === false);
  }, [items]);

  const doneFiilter = useCallback(() => {
    return items.filter((i) => i.complete === true);
  }, [items]);

  const allFiilter = useCallback(() => {
    return items;
  }, [items]);

  const navBar = [
    {
      title: "Active",
      navFilter: activeFiilter(),
    },
    {
      title: "Done",
      navFilter: doneFiilter(),
    },
    {
      title: "All",
      navFilter: allFiilter(),
    },
  ];

  const filterNav = useCallback(
    (activeNav) => {
      if (activeNav === "Active") {
        return activeFiilter();
      }
      if (activeNav === "Done") {
        return doneFiilter();
      }
      return allFiilter();
    },
    [activeFiilter, doneFiilter, allFiilter]
  );

  useEffect(() => {
    const filteredItems = filterNav(activeNav);
    setCopyItems(filteredItems);
  }, [items, activeNav, filterNav, setCopyItems]);

  function changeNav(item) {
    setActiveNav(item);
    setCurrentPage(1);
  }

  return (
    <nav>
      <ul className={Classes.navigation}>
        {navBar.map((item) => (
          <li
            key={item.title}
            className={
              Classes.item +
              " " +
              (item.title === activeNav ? Classes.active : {})
            }
            onClick={() => changeNav(item.title)}
          >
            <div className={Classes.title}>
              <h6>{item.title}</h6>
              <div className={Classes.line}></div>
            </div>
            <span className={Classes.score}>{item.navFilter.length}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
