import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import homeData from "../../data/home.json";
import logoImg from "../../assets/logo.png";
import "./Navbar.css";

const { navbar } = homeData;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const hoverTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openDropdown = useCallback(() => {
    clearTimeout(hoverTimeoutRef.current);
    setServicesOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setServicesOpen(false), 120);
  }, []);

  const toggleDropdown = useCallback(() => {
    setServicesOpen((prev) => !prev);
  }, []);
  const handleDropdownKeyDown = useCallback((e) => {
    if (!dropdownRef.current) return;
    const items = Array.from(
      dropdownRef.current.querySelectorAll(".services-dropdown-link"),
    );
    const idx = items.indexOf(document.activeElement);

    if (e.key === "ArrowDown") {
      e.preventDefault();
      items[(idx + 1) % items.length]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      items[(idx - 1 + items.length) % items.length]?.focus();
    } else if (e.key === "Escape") {
      setServicesOpen(false);
      triggerRef.current?.focus();
    }
  }, []);

  const handleTriggerKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown();
      } else if (e.key === "Escape") {
        setServicesOpen(false);
      } else if (e.key === "ArrowDown" && servicesOpen) {
        e.preventDefault();
        dropdownRef.current?.querySelector(".services-dropdown-link")?.focus();
      }
    },
    [toggleDropdown, servicesOpen],
  );

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <a className="skip-link" href="#main-content">
        {navbar.skipLinkLabel}
      </a>

      <div className="navbar-shell">
        <div className="navbar-inner">
          <Link
            className="brand"
            to={navbar.brand.href}
            aria-label={navbar.brand.label}
          >
            <img
              src={logoImg}
              alt="Microrage Solutions"
              className="brand-mark"
            />
          </Link>

          <button
            className={`menu-toggle${menuOpen ? " is-active" : ""}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? navbar.closeLabel : navbar.toggleLabel}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primary-navigation"
            className={`nav-panel${menuOpen ? " is-open" : ""}`}
            aria-label="Primary"
          >
            <ul className="nav-list">
              {navbar.links.map((item) => (
                <li
                  key={item.label}
                  className={
                    item.hasDropdown ? "nav-item--has-dropdown" : undefined
                  }
                  onMouseEnter={item.hasDropdown ? openDropdown : undefined}
                  onMouseLeave={item.hasDropdown ? closeDropdown : undefined}
                >
                  {item.hasDropdown ? (
                    <>
                      <NavLink
                        ref={triggerRef}
                        to={item.href}
                        className={({ isActive }) =>
                          `nav-link services-trigger${servicesOpen ? " is-dropdown-open" : ""}${isActive ? " is-active" : ""}`
                        }
                        aria-haspopup="true"
                        aria-expanded={servicesOpen}
                        aria-controls="services-dropdown"
                        onClick={() => {
                          setServicesOpen(false);
                          setMenuOpen(false);
                        }}
                        onKeyDown={handleTriggerKeyDown}
                      >
                        {item.label}
                        <svg
                          className="dropdown-chevron"
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path
                            d="M2 4l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </NavLink>

                      <ul
                        id="services-dropdown"
                        ref={dropdownRef}
                        className={`services-dropdown${servicesOpen ? " is-visible" : ""}`}
                        role="menu"
                        aria-label={navbar.servicesDropdown.dropdownLabel}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}
                        onKeyDown={handleDropdownKeyDown}
                      >
                        {navbar.servicesDropdown.items.map((svc) => (
                          <li key={svc.label} role="none">
                            {svc.href.startsWith("/") ? (
                              <Link
                                className="services-dropdown-link"
                                to={svc.href}
                                role="menuitem"
                                tabIndex={servicesOpen ? 0 : -1}
                                onClick={() => {
                                  setServicesOpen(false);
                                  setMenuOpen(false);
                                }}
                              >
                                {svc.label}
                              </Link>
                            ) : (
                              <a
                                className="services-dropdown-link"
                                href={svc.href}
                                role="menuitem"
                                tabIndex={servicesOpen ? 0 : -1}
                                onClick={() => {
                                  setServicesOpen(false);
                                  setMenuOpen(false);
                                }}
                              >
                                {svc.label}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : item.href.startsWith("/") ? (
                    <NavLink
                      end={item.href === "/"}
                      className={({ isActive }) =>
                        `nav-link${isActive ? " is-active" : ""}`
                      }
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      className="nav-link"
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                {navbar.cta.href.startsWith("/") ? (
                  <Link
                    className="nav-cta"
                    to={navbar.cta.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {navbar.cta.label}
                  </Link>
                ) : (
                  <a
                    className="nav-cta"
                    href={navbar.cta.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {navbar.cta.label}
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
