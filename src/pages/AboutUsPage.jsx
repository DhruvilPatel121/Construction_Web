import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";
import BackToTopButton from "../components/common/BackToTopButton.jsx";
import slideOne from "../assets/images/slide5.jpeg";
import slideTwo from "../assets/images/slide4.jpeg";
import slideThree from "../assets/images/slide1.JPG";
import slideFour from "../assets/images/abb.jpeg";
import heroAdani from "../assets/images/hero-adani.png";
import serviceBackground from "../assets/images/service-background.webp";
import contactBackground from "../assets/images/contact-background.webp";
import featureOne from "../assets/images/11.svg";
import featureTwo from "../assets/images/12.svg";
import featureThree from "../assets/images/13.svg";
import featureFour from "../assets/images/14.svg";
import aboutVideo from "../assets/videos/bann.mp4";

const aboutBanner =
  "https://www.siddhiconstructions.com/assets/images/bread/bread3.jpg";

const slides = [
  { src: slideOne, alt: "Siddhi Constructions project inauguration" },
  { src: slideTwo, alt: "Siddhi Constructions award ceremony" },
  { src: slideThree, alt: "Siddhi Constructions project gathering" },
  { src: slideFour, alt: "Siddhi Constructions event" },
];

const features = [
  { icon: featureOne, label: "Civil Engineering & Project Management." },
  { icon: featureTwo, label: "Land Development, Real Estate & Organizing." },
  { icon: featureThree, label: "Wind Energy Business." },
  { icon: featureFour, label: "Agriculture & Farming." },
];

const missionItems = [
  "To be a leading construction company.",
  "To become the customer's most preferred choice by attaining excellence in quality and timely completed value added projects.",
  "To continually improve the competence of our people and make them proud to work.",
  "To build a safety culture aimed at continually reducing the frequency severity rate towards achieving zero accidents.",
  "To identify and mitigate all the environmental impacts arising from our activities and comply with applicable environmental norms.",
  "To contribute to the development of the local community and society at large as a part of our corporate social responsibility.",
];

export default function AboutUsPage() {
  const [activeTab, setActiveTab] = useState("mission");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const gallerySwiperRef = useRef(null);
  const galleryPreviousRef = useRef(null);
  const galleryNextRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!gallerySwiperRef.current) return undefined;

    const swiper = new Swiper(gallerySwiperRef.current, {
      modules: [Navigation, Autoplay],
      slidesPerView: 1,
      speed: 700,
      loop: true,
      loopPreventsSliding: false,
      grabCursor: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        prevEl: galleryPreviousRef.current,
        nextEl: galleryNextRef.current,
      },
      observer: true,
      observeParents: true,
    });

    return () => swiper.destroy(true, true);
  }, []);

  useEffect(() => {
    if (!isVideoOpen) return undefined;
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsVideoOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVideoOpen]);

  const selectTab = (tab) => setActiveTab(tab);
  const onTabKeyDown = (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextTab =
      event.key === "ArrowLeft" || event.key === "End" ? "vision" : "mission";
    selectTab(nextTab);
    document.getElementById(`about-${nextTab}-tab`)?.focus();
  };
  return (
    <div className="page-shell about-page">
      <Header />
      <main>
        <section
          className="about-page-banner"
          style={{ "--about-banner": `url(${aboutBanner})` }}
          aria-labelledby="about-page-title"
        >
          <div className="about-page-banner__content">
            <span className="about-page-banner__watermark" aria-hidden="true">
              ABOUT US
            </span>
            <h1 id="about-page-title">About Us</h1>
            <nav className="about-page-crumbs" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">•</span>
              <span>About Us</span>
            </nav>
          </div>
        </section>

        <section className="about-intro" aria-labelledby="about-legacy-title">
          <div className="about-intro__grid">
            <div className="about-gallery about-image-slider">
              <div ref={gallerySwiperRef} className="swiper about-swiper">
                <div className="swiper-wrapper">
                  {slides.map((slide) => (
                    <div className="swiper-slide" key={slide.src}>
                      <img
                        className="about-slide-img"
                        src={slide.src}
                        alt={slide.alt}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <button
                ref={galleryPreviousRef}
                className="about-slider-nav about-nav-prev"
                type="button"
                aria-label="Previous slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
              </button>
              <button
                ref={galleryNextRef}
                className="about-slider-nav about-nav-next"
                type="button"
                aria-label="Next slide"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="about-intro__copy">
              <h2 id="about-legacy-title">
                Building Excellence Since 1986: The Siddhi Constructions Legacy
              </h2>
              <p className="about-intro__lead">
                Established in 1986, Siddhi Constructions has forged its
                identity on the principles of passion, dedication, and
                innovation within the construction and project management
                sectors.
              </p>
              <p>
                Drawing from decades of experience and expertise in successfully
                navigating diverse construction projects, Siddhi Constructions
                has emerged as a leading name, synonymous with the creation of
                advanced and secure facilities tailored for the next generation.
              </p>
              <p>
                The company&apos;s proven track record reflects its distinct,
                dedicated, and unique approach to each construction endeavor.
                Siddhi Constructions proudly holds CRISIL certification as "SE
                1A" and adheres to the ISO 9001-2008 Quality Management System.
              </p>
            </div>
          </div>

          <div className="about-tabs">
            <div
              className="about-tabs__list"
              role="tablist"
              aria-label="Company mission and vision"
            >
              <button
                id="about-mission-tab"
                className={activeTab === "mission" ? "is-active" : ""}
                type="button"
                role="tab"
                aria-selected={activeTab === "mission"}
                aria-controls="about-mission-panel"
                tabIndex={activeTab === "mission" ? 0 : -1}
                onClick={() => selectTab("mission")}
                onKeyDown={onTabKeyDown}
              >
                Our Mission
              </button>
              <button
                id="about-vision-tab"
                className={activeTab === "vision" ? "is-active" : ""}
                type="button"
                role="tab"
                aria-selected={activeTab === "vision"}
                aria-controls="about-vision-panel"
                tabIndex={activeTab === "vision" ? 0 : -1}
                onClick={() => selectTab("vision")}
                onKeyDown={onTabKeyDown}
              >
                Our Vision
              </button>
            </div>
            <div
              id="about-mission-panel"
              className={`about-tabs__panel${activeTab === "mission" ? " is-active" : ""}`}
              role="tabpanel"
              aria-labelledby="about-mission-tab"
              hidden={activeTab !== "mission"}
            >
              <p>
                We believe our every grand success is derived from the efforts,
                values, and commitment we carry in order to deliver the best of
                our services at the specified time.
              </p>
              <ul>
                {missionItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div
              id="about-vision-panel"
              className={`about-tabs__panel${activeTab === "vision" ? " is-active" : ""}`}
              role="tabpanel"
              aria-labelledby="about-vision-tab"
              hidden={activeTab !== "vision"}
            >
              <p>
                Every meaningful act led by us with a foresight to build better
                and smarter construction for newer generation. We, at Siddhi
                Constructions, have driven by world-class technology, talented
                human resource and high-end quality commitment towards business
                and community. Our vision is to built more with innovation that
                would introduce a future of construction to us.
              </p>
              <p>
                &quot; TO BE THE INDUSTRY LEADER CONSTRUCTION COMPANY RENOWNED
                FOR EXCELLENCE, QUALITY, PERFORMANCE AND RELIABILITY IN MANAGING
                COMPLEX CONSTRUCTION PROJECTS &quot;
              </p>
              <p>
                The Vision Statement has been inspired by the infrastructure
                development needs of tomorrow, with the Customer as the central
                focus. Senior Leaders within the organization are actively
                involved in developing and maintaining an effective and
                efficient management system to disseminate the Vision across
                Siddhi Constructions in order to achieve &quot;Customer
                Delight&quot;.
              </p>
            </div>
          </div>
        </section>

        <section
          className="about-features"
          style={{ "--about-features-bg": `url(${serviceBackground})` }}
          aria-labelledby="about-features-title"
        >
          <div className="about-features__grid">
            <div className="about-video-thumb">
              <img src={heroAdani} alt="Industrial construction facility" />
              <button
                className="about-video-thumb__play"
                type="button"
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play Siddhi Constructions video"
              >
                <span aria-hidden="true" />
              </button>
            </div>
            <div className="about-features__content">
              <p className="about-features__eyebrow">Core Features</p>
              <h2 id="about-features-title">
                We maintain the highest standards with the following
                construction activities
              </h2>
              <div className="about-feature-grid">
                {features.map((feature, index) => (
                  <article
                    className={`about-feature-card`}
                    key={feature.label}
                  >
                    <img src={feature.icon} alt="" />
                    <p>{feature.label}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div
            className="about-cta__card"
            style={{ "--about-cta-bg": `url(${contactBackground})` }}
          >
            <h2>Ready to build your legacy?</h2>
            <p>
              Whether you are planning a high-value industrial facility or a
              dream residential project in Surat, partner with the experts who
              have been building trust since 1986.
            </p>
            <a className="btn-primary about-cta__button" href="/#contact">
              Make An Appointment
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />

      {isVideoOpen && (
        <div
          className="about-video-dialog"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === dialogRef.current) setIsVideoOpen(false);
          }}
          ref={dialogRef}
        >
          <section
            className="about-video-dialog__content"
            role="dialog"
            aria-modal="true"
            aria-label="Siddhi Constructions video"
          >
            <button
              ref={closeButtonRef}
              className="about-video-dialog__close"
              type="button"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              ×
            </button>
            <video controls playsInline preload="metadata" poster={heroAdani}>
              <source src={aboutVideo} type="video/mp4" />
              Your browser does not support video playback.
            </video>
          </section>
        </div>
      )}
    </div>
  );
}
