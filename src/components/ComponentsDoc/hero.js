import React from "react";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div class="header">
      <div class="container">
        <nav class="nav navbar navbar-dark bg-dark navbar-expand-lg  top-1 rounded">
          <div class="container-fluid">
            <a class="navbar-brand mx-2" href="#">
              <svg
                width="18"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="5.43395" height="22" fill="#FE1F27" />
                <rect x="12.5664" width="5.43395" height="22" fill="#FE1F27" />
                <path d="M0 0H5.43395L18 22H12.566L0 0Z" fill="#FE1F27" />
              </svg>
              <h5 class="logo-title">NAIROBI</h5>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-2"
              aria-controls="navbar-2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-2">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-start">
                <li class="nav-item">
                  <a
                    class="nav-link me-5"
                    aria-current="page"
                    href="https://templates.iqonic.design/lite/nairobi/documentation/html/dist/main/index.html"
                  >
                    <p class="mb-0">Documentation</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    type="button"
                    href="https://templates.iqonic.design/lite/nairobi/html/dist/"
                    class="btn btn-success nav-link"
                  >
                    <svg
                      width="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 5H20.6915C21.9095 5 22.8446 6.07941 22.6711 7.28494L21.5196 15.2849C21.3779 16.2693 20.5345 17 19.54 17H7.46001C6.46551 17 5.6221 16.2693 5.48041 15.2849L4 5Z"
                        stroke="white"
                      />
                      <path
                        d="M1 2.27273L3.14286 2L4 5"
                        stroke="white"
                        stroke-linecap="round"
                      />
                      <circle
                        cx="9.5"
                        cy="20.5"
                        r="0.5"
                        fill="white"
                        stroke="white"
                      />
                      <circle
                        cx="18.5"
                        cy="20.5"
                        r="0.5"
                        fill="white"
                        stroke="white"
                      />
                      <line
                        x1="14.5"
                        y1="8.5"
                        x2="19.5"
                        y2="8.5"
                        stroke="white"
                        stroke-linecap="round"
                      />
                    </svg>
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div class="slider-content position-relative">
        <div class="main-img vh-100">
          <div class="container">
            <div class="banner-img">
              <svg
                width="362"
                viewBox="0 0 362 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="362" height="108" fill="url(#paint0_linear)" />
                <path
                  d="M38.8 25H50.8L64.8 58.6L66.24 62.12L66.88 63.8H67.2L66.96 62.12C66.8533 61.48 66.8 60.3067 66.8 58.6V25H78V81H66L52 47.4L50.56 43.88L49.92 42.2H49.6L49.76 43.88C49.92 45.96 50 47.1333 50 47.4V81H38.8V25ZM86.0125 81L102.413 25H115.213L131.613 81H120.413L116.813 68.2H100.813L97.2125 81H86.0125ZM114.813 61L110.013 44.2C109.853 43.6133 109.693 42.92 109.533 42.12C109.373 41.2667 109.266 40.6533 109.213 40.28L108.973 38.2H108.653L108.332 40.28C108.226 40.76 108.093 41.4267 107.933 42.28C107.826 43.08 107.719 43.72 107.613 44.2L102.813 61H114.813ZM139.581 81V25H150.781V81H139.581Z"
                  fill="white"
                />
                <path
                  d="M164.347 25H179.547C186.96 25 192.4 26.52 195.867 29.56C199.387 32.6 201.147 37.08 201.147 43C201.147 48.4933 199.414 52.8133 195.947 55.96C194.4 57.3467 192.667 58.36 190.747 59L204.347 81H191.547L179.947 61H175.547V81H164.347V25ZM179.547 53.8C183.227 53.8 185.867 52.9733 187.467 51.32C189.12 49.6133 189.947 46.84 189.947 43C189.947 39.16 189.12 36.4133 187.467 34.76C185.867 33.0533 183.227 32.2 179.547 32.2H175.547V53.8H179.547ZM230.716 81.8C224.049 81.8 218.849 79.48 215.116 74.84C211.382 70.1467 209.516 62.8667 209.516 53C209.516 43.1333 211.382 35.88 215.116 31.24C218.849 26.5467 224.049 24.2 230.716 24.2C237.382 24.2 242.582 26.5467 246.316 31.24C250.049 35.88 251.916 43.1333 251.916 53C251.916 62.8667 250.049 70.1467 246.316 74.84C242.582 79.48 237.382 81.8 230.716 81.8ZM230.716 74.6C233.649 74.6 236.049 72.9467 237.916 69.64C239.782 66.3333 240.716 60.7867 240.716 53C240.716 45.2133 239.782 39.6667 237.916 36.36C236.049 33.0533 233.649 31.4 230.716 31.4C227.782 31.4 225.382 33.0533 223.516 36.36C221.649 39.6667 220.716 45.2133 220.716 53C220.716 60.7867 221.649 66.3333 223.516 69.64C225.382 72.9467 227.782 74.6 230.716 74.6ZM262.706 25H279.506C285.853 25 290.626 26.3067 293.826 28.92C297.08 31.5333 298.706 35.0267 298.706 39.4C298.706 43.72 297.026 47.0267 293.666 49.32C292.173 50.3333 290.52 51.0267 288.706 51.4C290.893 51.7733 292.893 52.5467 294.706 53.72C296.413 54.84 297.826 56.36 298.946 58.28C300.12 60.2 300.706 62.5733 300.706 65.4C300.706 75.8 293.64 81 279.506 81H262.706V25ZM279.506 48.2C281.906 48.2 283.826 47.48 285.266 46.04C286.76 44.5467 287.506 42.6 287.506 40.2C287.506 37.8 286.76 35.88 285.266 34.44C283.826 32.9467 281.906 32.2 279.506 32.2H273.906V48.2H279.506ZM279.506 73.8C286.173 73.8 289.506 70.7333 289.506 64.6C289.506 58.4667 286.173 55.4 279.506 55.4H273.906V73.8H279.506ZM311.534 81V25H322.734V81H311.534Z"
                  fill="#FF0404"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-0.853773"
                    y1="54.7606"
                    x2="362.854"
                    y2="54.7605"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF0404" />
                    <stop offset="0.687864" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 class="my-5">
              <span>Design System</span>
            </h1>
            <h4 class="text-white">
              Production ready FREE Open Source <b>Dashboard UI Kit</b> and{" "}
              <b>Design System</b>.
            </h4>
            <a
              href="https://templates.iqonic.design/lite/nairobi/html/dist/dashboard/"
              type="button"
              class="btn btn-primary mt-3 me-3"
            >
              Dashboard Demo
            </a>
            <a href="#components" type="button" class="btn btn-white mt-3">
              UI Kit
            </a>
          </div>
        </div>
        <div class="slider-banner">
          <img
            src="./assets/images/pages/11.png"
            class="img-fluid"
            alt="images"
          />
        </div>
        <div class="slider-bg">
          <img
            src="./assets/images/pages/12.png"
            class="slider-bg-1 wow fadeInUp no-repeat top"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "y",
            }}
          />
          <img
            src="./assets/images/pages/13.png"
            class="slider-bg-2 wow fadeInUp no-repeat top"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "y",
            }}
          />
          <img
            src="./assets/images/pages/14.png"
            class="slider-bg-3 wow fadeInUp no-repeat top"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "y",
            }}
          />
          <img
            src="./assets/images/pages/14.png"
            class="slider-bg-4 wow fadeInUp no-repeat top"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "y",
            }}
          />
          <img
            src="./assets/images/pages/14.png"
            class="slider-bg-5 wow fadeInUp no-repeat top"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "y",
            }}
          />
          <img
            src="./assets/images/pages/14.png"
            class="slider-bg-6 wow fadeInUp no-repeat top"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.5s",
              animationName: "y",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
