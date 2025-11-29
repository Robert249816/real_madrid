"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoChevronForward } from "react-icons/io5";

import styles from "../navigation/menu.module.scss";

const Menu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (item: string) => {
    setExpandedItem(expandedItem === item ? null : item);
  };

  return (
    <div>
      {isMenuOpen && <div className={styles.overlay} onClick={toggleMenu} />}

      <header className={styles.header}>
        <nav className={styles.left}>
          <div className={styles.showClose} onClick={toggleMenu}>
            <div
              className={`${styles.show} ${isMenuOpen ? styles.hidden : ""}`}
            >
              <RxHamburgerMenu />
            </div>
            <div
              className={`${styles.close} ${isMenuOpen ? styles.visible : ""}`}
            >
              <IoMdClose />
            </div>
          </div>
          <img
            src="image/realLogo.png"
            alt=""
            style={{
              width: "50px",
              objectFit: "contain",
            }}
          />
          <div className={styles.up}></div>
          <img
            src="https://assets.realmadrid.com/is/image/realmadrid/CABECERA_PARCHE_15_nuevo?$Mobile$&fit=wrap"
            alt=""
            style={{ width: "40px" }}
          />
        </nav>

        <nav className={styles.centerNav}>
          <Link href={"/"} className={styles.nav_link}>
            Madridistas
          </Link>
          <Link href={"/tickets"} className={styles.nav_link}>
            Tickets
          </Link>
          <Link href={"/hospitality"} className={styles.nav_link}>
            Hospitality
          </Link>
          <Link href={"/Tour"} className={styles.nav_link}>
            Tour
          </Link>
          <Link href={"/Shop"} className={styles.nav_link}>
            Shop
          </Link>
          <Link href={"/RM Play"} className={styles.nav_link}>
            RM Play
          </Link>
        </nav>

        <nav className={styles.right}>
          <img
            src="https://assets.realmadrid.com/is/content/realmadrid/emirates_gray?$Mobile$&fit=wrap&wid=57"
            alt=""
            style={{ width: "57px", objectFit: "contain" }}
          />
          <img
            src="https://assets.realmadrid.com/is/content/realmadrid/adidas_gray?$Mobile$&fit=wrap&wid=57"
            alt=""
            style={{ width: "57px", objectFit: "contain" }}
          />
          <div
            style={{ fontSize: "18px", display: "flex" }}
            className={styles.sponsor}
          >
            <SlOptionsVertical />
          </div>
          <div className={styles.sign}>
            <div>
              <IoPersonOutline />
            </div>
            <p>Sign in</p>
          </div>
        </nav>
      </header>

      <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          <div className={styles.topMenuLinks}>
            <Link href={"/"} className={styles.topLink}>
              Madridistas
            </Link>
            <Link href={"/tickets"} className={styles.topLink}>
              Tickets
            </Link>
            <Link href={"/hospitality"} className={styles.topLink}>
              Hospitality
            </Link>
            <Link href={"/Tour"} className={styles.topLink}>
              Tour
            </Link>
            <Link href={"/Shop"} className={styles.topLink}>
              Shop
            </Link>
            <Link href={"/RM Play"} className={styles.topLink}>
              RM Play
            </Link>
          </div>

          <div className={styles.menuWrapper}>
            <div className={styles.leftMenu}>
              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "football" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("football")}
                >
                  <span>Football</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "basketball" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("basketball")}
                >
                  <span>Basketball</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <Link href="/schedule" className={styles.menuTitleLink}>
                  <span>Schedule</span>
                </Link>
              </div>

              <div className={styles.menuItem}>
                <Link href="/rmtv-live" className={styles.menuTitleLink}>
                  <span>RMTV live</span>
                </Link>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "club" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("club")}
                >
                  <span>The Club</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "stadium" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("stadium")}
                >
                  <span>Bernabéu Stadium</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "news" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("news")}
                >
                  <span>News</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "foundation" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("foundation")}
                >
                  <span>Foundation Real Madrid</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "graduate" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("graduate")}
                >
                  <span>RM Graduate School</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.menuItem}>
                <Link href="/rm-next" className={styles.menuTitleLink}>
                  <span>RM Next</span>
                </Link>
              </div>

              <div className={styles.menuItem}>
                <div
                  className={`${styles.menuTitle} ${
                    expandedItem === "shop" ? styles.active : ""
                  }`}
                  onClick={() => toggleSubmenu("shop")}
                >
                  <span>Online Shop</span>
                  <IoChevronForward />
                </div>
              </div>

              <div className={styles.languageSelector}>
                <span>🌐</span>
                <span>EN</span>
                <IoChevronForward style={{ fontSize: "12px" }} />
              </div>
            </div>

            <div
              className={`${styles.rightSubmenu} ${
                expandedItem ? styles.visible : ""
              }`}
            >
              {expandedItem === "football" && (
                <div className={styles.submenuContent}>
                  <Link href="/first-team">First Team</Link>
                  <Link href="/womens-team">Women's Team</Link>
                  <Link href="/academy">Academy</Link>
                </div>
              )}
              {expandedItem === "basketball" && (
                <div className={styles.submenuContent}>
                  <Link href="/basketball-team">Team</Link>
                </div>
              )}
            </div>
          </div>

          <div className={styles.bottomSponsors}>
            <img
              src="https://assets.realmadrid.com/is/content/realmadrid/emirates_gray?$Mobile$&fit=wrap&wid=57"
              alt=""
              style={{ width: "57px", objectFit: "contain" }}
            />
            <img
              src="https://assets.realmadrid.com/is/content/realmadrid/adidas_gray?$Mobile$&fit=wrap&wid=57"
              alt=""
              style={{ width: "57px", objectFit: "contain" }}
            />
            <div className={styles.sponsor}>
              <SlOptionsVertical />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Menu;
