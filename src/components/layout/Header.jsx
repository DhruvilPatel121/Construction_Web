import { useState, useEffect, useRef } from "react";
import companyLogo from "../../assets/images/company-logo.png";
import barIcon from "../../assets/images/bar.svg";
import skylineIcon from "../../assets/images/skyline.png";
import constructionIcon from "../../assets/images/construction-site.png";
import residentialIcon from "../../assets/images/residential.png";
import landIcon from "../../assets/images/land.png";
import megaphoneIcon from "../../assets/images/megaphone.png";
import bannerThumb from "../../assets/images/04.jpg";

const siteUrl = "#";

const megaMenuProjects = [
  {
    title: "Commercial & Institutional",
    desc: "Our commercial and institutional projects combine modern architectural aesthetics with functional integrity, providing state-of-the-art office spaces.",
    icon: skylineIcon,
    href: `${siteUrl}/commercial-institutional`,
  },
  {
    title: "Industrial Construction",
    desc: "We specialize in high-stakes industrial infrastructure, delivering robust distillery units and specialized manufacturing facilities designed.",
    icon: constructionIcon,
    href: `${siteUrl}/industrial-construction`,
  },
  {
    title: "Residential",
    desc: "We craft premium living environments that prioritize superior craftsmanship for generations to come in the heart of Surat.",
    icon: residentialIcon,
    href: `${siteUrl}/residential`,
  },
  {
    title: "Developer",
    desc: "As a visionary developer established in 1986, we handle everything from raw land transformation to the delivery of commercial hubs.",
    icon: landIcon,
    href: `${siteUrl}/developer`,
  },
  {
    title: "Ongoing",
    desc: "Explore our upcoming landmark developments that will define the future of Gujarat’s skyline through innovative civil engineering.",
    icon: megaphoneIcon,
    href: `${siteUrl}/ongoing`,
  },
];

function Chevron({ className = "nav-arrow" }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/SIDDHICONSTRUCTIONSOFFICIAL",
    icon: (
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/siddhiconstructionsofficial/",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </g>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/siddhi-constructions/",
    icon: (
      <g fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </g>
    ),
  },
];

// Mobile drawer structure, taken from the reference recording
const drawerMenu = [
  { id: "home", label: "Home", href: "#home" },
  {
    id: "about",
    label: "About Us",
    children: [
      { label: "About Company", href: "/about-us" },
      {
        label: "Achievements",
        href: "/achievements",
      },
      { label: "Awards", href: "/awards" },
      { label: "Technology", href: `${siteUrl}/technology`, external: true },
      {
        label: "Quality Assurance",
        href: `${siteUrl}/quality-assurance`,
        external: true,
      },
      { label: "Equipped", href: `${siteUrl}/equipped`, external: true },
    ],
  },
  {
    id: "management",
    label: "Management",
    children: [
      { label: "Management", href: "#leadership" },
      {
        label: "Organization Chart",
        href: `${siteUrl}/organization-chart`,
        external: true,
      },
    ],
  },
  {
    id: "projects",
    label: "Projects",
    children: [
      {
        label: "Industrial Construction",
        href: `${siteUrl}/industrial-construction`,
        external: true,
      },
      {
        label: "Commercial & Institutional",
        href: `${siteUrl}/commercial-institutional`,
        external: true,
      },
      { label: "Residential", href: `${siteUrl}/residential`, external: true },
      { label: "Ongoing", href: `${siteUrl}/ongoing`, external: true },
      { label: "Developer", href: `${siteUrl}/developer`, external: true },
    ],
  },
  { id: "career", label: "Career", href: `${siteUrl}/careers`, external: true },
  { id: "video", label: "Video", href: `${siteUrl}/video`, external: true },
  { id: "contact", label: "Contact Us", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const closeBtnRef = useRef(null);
  const toggleBtnRef = useRef(null);
  const scrolledRef = useRef(false);
  const isAboutPage = window.location.pathname.replace(/\/+$/, "") === "/about-us";
  const homeHref = isAboutPage ? "/" : "#home";

  // Header gets a shadow once the page has been scrolled
  useEffect(() => {
    let frameId = 0;
    const onScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        frameId = 0;
        const nextScrolled = window.scrollY > 8;
        if (nextScrolled !== scrolledRef.current) {
          scrolledRef.current = nextScrolled;
          setScrolled(nextScrolled);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Lock background scroll, close on Escape, and manage focus while the drawer is open
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const toggleBtn = toggleBtnRef.current;
    const scrollbarGap =
      window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    document.body.style.overflow = "hidden";
    if (scrollbarGap > 0)
      document.body.style.paddingRight = `${scrollbarGap}px`;
    closeBtnRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      window.removeEventListener("keydown", handleKeyDown);
      toggleBtn?.focus();
    };
  }, [mobileMenuOpen]);

  // If the window grows to the desktop layout while the drawer is open, close it
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1200px)");
    const onChange = (e) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const closeDrawer = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="contact-bar">
        <div className="site-container contact-bar-inner">
          <div className="contact-details">
            <div className="contact-item">
              <svg
                class="contact-icon"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>

              <a href="tel:+912612475383">+91261 - 2475383</a>
              <a href="tel:+918238433406">+918238433406</a>
            </div>
            <div className="contact-item">
              <svg
                className="contact-icon"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a href="mailto:hr@siddhiconstructions.com">
                hr@siddhiconstructions.com
              </a>
            </div>
            <div className="contact-item address-item">
              <svg
                className="contact-icon"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <a
                href="https://maps.app.goo.gl/sZCFW3ZEotT41DuS8"
                target="_blank"
                rel="noreferrer"
              >
                102, Ashirwad Flats, Anchal Plots, City Light, SURAT-395007
              </a>
            </div>
          </div>

          <div className="social-block">
            <span className="social-label">Follow Us On:</span>
            <div className="social-links">
              <a
                href="https://www.facebook.com/SIDDHICONSTRUCTIONSOFFICIAL"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/siddhiconstructionsofficial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/siddhi-constructions/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`navigation-bar header--sticky${scrolled ? " is-scrolled" : ""}`}
        id="home"
      >
        <div className="site-container navigation-inner">
          <a
            className="brand-link"
            href={homeHref}
            aria-label="Siddhi Constructions Home"
          >
            <img
              src={companyLogo}
              alt="Siddhi Constructions - Excellence in Civil Engineering"
            />
          </a>

          <nav className="main-navigation" aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <a className="nav-link" href={homeHref}>
                  Home
                </a>
              </li>

              <li className="nav-item has-dropdown">
                <a className="nav-link" href="/about-us">
                  About Us <Chevron />
                </a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="/about-us">About Company</a>
                  </li>
                  <li>
                    <a
                      href="/achievements"
                    >
                      Achievements
                    </a>
                  </li>
                  <li>
                    <a href="/awards">Awards</a>
                  </li>
                  <li>
                    <a
                      href={`${siteUrl}/certificate`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${siteUrl}/technology`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Technology
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${siteUrl}/quality-assurance`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Quality Assurance
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${siteUrl}/equipped`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Equipped
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item has-dropdown">
                <a className="nav-link" href="#leadership">
                  Management <Chevron />
                </a>
                <ul className="nav-dropdown">
                  <li>
                    <a href="#leadership">Management</a>
                  </li>
                  <li>
                    <a
                      href={`${siteUrl}/organization-chart`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Organization Chart
                    </a>
                  </li>
                </ul>
              </li>

              {/* Mega Menu for Projects */}
              <li className="nav-item has-mega-menu">
                <a className="nav-link" href="#projects">
                  Projects <Chevron />
                </a>
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-inner">
                    <div className="mega-menu-col">
                      {megaMenuProjects.slice(0, 3).map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="single-service-menu"
                        >
                          <div className="menu-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                          <div className="menu-info">
                            <h5 className="menu-title">{item.title}</h5>
                            <p className="menu-details">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>

                    <div className="mega-menu-col">
                      {megaMenuProjects.slice(3).map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="single-service-menu"
                        >
                          <div className="menu-icon">
                            <img src={item.icon} alt={item.title} />
                          </div>
                          <div className="menu-info">
                            <h5 className="menu-title">{item.title}</h5>
                            <p className="menu-details">{item.desc}</p>
                          </div>
                        </a>
                      ))}

                      {/* Start Your Project Right CTA Card */}
                      <a
                        href="#contact"
                        className="single-service-menu free-consultation-card"
                      >
                        <div className="menu-info">
                          <h5 className="menu-title">
                            Start Your Project Right
                          </h5>
                          <p className="menu-details">
                            We offer strategic insights and technical expertise
                            to turn your vision into a successful reality.
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="mega-menu-thumb-col">
                      <div className="menu-thumb">
                        <img
                          src={bannerThumb}
                          alt="Siddhi Constructions Projects"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#clients">
                  Clients
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`${siteUrl}/careers`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Career
                </a>
              </li>

              <li className="nav-item has-dropdown">
                <a className="nav-link" href="#awards">
                  Media <Chevron />
                </a>
                <ul className="nav-dropdown">
                  <li>
                    <a
                      href={`${siteUrl}/video`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Video Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href={`${siteUrl}/gallery`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Image Gallery
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="header-end">
            <a className="btn-primary contact-btn" href="#contact">
              Contact Us
            </a>
            <button
              type="button"
              ref={toggleBtnRef}
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="side-bar"
            >
              <img src={barIcon} alt="" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop overlay for the right-side mobile drawer */}
      <div
        id="anywhere-home"
        className={mobileMenuOpen ? "bgshow" : ""}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Right-side off-canvas mobile navigation drawer */}
      <aside
        id="side-bar"
        className={`side-bar${mobileMenuOpen ? " show" : ""}`}
        aria-label="Mobile navigation"
        inert={!mobileMenuOpen}
      >
        <button
          type="button"
          ref={closeBtnRef}
          className="close-icon-menu"
          onClick={closeDrawer}
          aria-label="Close navigation menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        </button>

        <div className="side-bar-content-wrapper">
          <nav className="mobile-menu-drawer-nav" aria-label="Mobile menu">
            <ul className="mobile-drawer-menu">
              {drawerMenu.map((item) => {
                if (!item.children) {
                  return (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        className="mobile-link"
                        onClick={closeDrawer}
                        {...(item.external
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                }
                const isOpen = openSubmenu === item.id;
                return (
                  <li
                    key={item.id}
                    className={`has-dropdown-item${isOpen ? " is-open" : ""}`}
                  >
                    <div className="mobile-dropdown-header">
                      <span className="mobile-link">{item.label}</span>
                      <button
                        type="button"
                        className="dropdown-caret"
                        onClick={() => toggleSubmenu(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`submenu-${item.id}`}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                      >
                        <Chevron className="caret-icon" />
                      </button>
                    </div>
                    <div
                      className="mobile-submenu-wrap"
                      id={`submenu-${item.id}`}
                    >
                      <ul className="mobile-submenu-links" inert={!isOpen}>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              onClick={closeDrawer}
                              {...(child.external
                                ? { target: "_blank", rel: "noreferrer" }
                                : {})}
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="drawer-social">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
