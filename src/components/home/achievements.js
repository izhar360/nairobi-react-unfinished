import icons8 from "../../assets/images/icons/08.png";
import icons9 from "../../assets/images/icons/09.png";
import icons10 from "../../assets/images/icons/10.png";
import icons1 from "../../assets/images/icons/01.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
/**
 * @author
 * @function Achievements
 **/

const Achievements = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const mediumView = useMediaQuery({ query: "(max-width: 550px)" });
  const [slidePerV, setSlidePV] = useState(2);

  useEffect(() => {
    if (isTabletOrMobile) {
      setSlidePV(1);
    } else if (mediumView) {
      setSlidePV(2);
    }
  }, [window.innerWidth]);

  return (
    <div class="col-lg-12">
      <div class="d-flex justify-content-between mb-3">
        <h5>Achievements</h5>
        <a href="#">View All</a>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <Swiper
            spaceBetween={32}
            slidesPerView={slidePerV}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="card achievements-card">
                  <div class="card-header">
                    <div class="d-flex">
                      <span class="badge text-primary achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M3.375 0.500009C2.78688 0.500009 2.17875 0.721884 1.695 1.14438C1.2125 1.56688 0.875 2.21626 0.875 3.00001C0.875 3.66438 1.15312 4.23063 1.5 4.68001C1.84688 5.12876 2.26687 5.48313 2.6525 5.83188C3.42375 6.53001 4 7.10376 4 8.00001C4 8.09501 3.9075 8.32501 3.785 8.50813C3.66313 8.69063 3.55063 8.80063 3.55063 8.80063L4.44937 9.68001C4.44937 9.68001 4.64937 9.48001 4.84 9.19126C5.00312 8.94501 5.18187 8.62751 5.23063 8.21501C5.30125 8.41751 5.36937 8.62501 5.44562 8.82001C5.875 9.92876 6.37063 10.9225 6.92938 11.6719C7.1325 11.9456 7.34188 12.1869 7.57438 12.3944C6.2825 12.4875 5.25 13.5613 5.25 14.875V15.5H12.75V14.875C12.75 13.5469 11.6975 12.4675 10.3869 12.3944C10.6313 12.176 10.8537 11.934 11.0506 11.6719C11.6125 10.925 12.1006 9.92813 12.535 8.82001C12.6163 8.61251 12.6938 8.39063 12.7694 8.17626C12.8112 8.60563 12.9919 8.93751 13.16 9.19126C13.3506 9.47938 13.5506 9.68001 13.5506 9.68001L14.4494 8.80063C14.4494 8.80063 14.3369 8.69063 14.215 8.50813C14.0925 8.32501 14 8.09501 14 8.00001C14 7.10376 14.5763 6.53001 15.3475 5.83188C15.7331 5.48313 16.1538 5.12876 16.5 4.67938C16.8469 4.23063 17.125 3.66438 17.125 3.00001C17.125 2.21626 16.7875 1.56688 16.3044 1.14438C15.8401 0.734893 15.244 0.506163 14.625 0.500009C14.0197 0.4984 13.4352 0.721056 12.9844 1.12501H5.01562C4.5648 0.721056 3.98033 0.4984 3.375 0.500009ZM3.375 1.75001C3.67062 1.75001 3.86063 1.84251 4 1.92563C4.01688 3.20063 4.23687 4.64563 4.58625 6.06626C4.25375 5.61688 3.83875 5.24376 3.4725 4.91376C3.07687 4.55751 2.71625 4.22813 2.47688 3.91813C2.2375 3.60813 2.125 3.33938 2.125 3.00001C2.125 2.56251 2.29563 2.29188 2.535 2.08188C2.775 1.87188 3.10375 1.75001 3.375 1.75001ZM14.625 1.75001C14.8962 1.75001 15.225 1.87188 15.465 2.08188C15.7044 2.29188 15.875 2.56313 15.875 3.00001C15.875 3.33938 15.7625 3.60813 15.5231 3.91813C15.2844 4.22813 14.9231 4.55751 14.5275 4.91438C14.1537 5.25126 13.7312 5.63938 13.3944 6.10563C13.7531 4.67438 13.9831 3.21751 14 1.92563C14.1871 1.80822 14.4041 1.74724 14.625 1.75001ZM5.32812 2.37501H12.6719C12.5769 4.23313 12.0956 6.49876 11.3631 8.37126C10.9581 9.40626 10.4894 10.3044 10.035 10.91C9.58125 11.5156 9.16625 11.75 8.98063 11.75C8.7975 11.75 8.39687 11.5156 7.94562 10.91C7.49375 10.305 7.02 9.40876 6.61688 8.37126C5.88938 6.49626 5.42312 4.22313 5.32812 2.37501ZM8.375 4.25001V7.37501H9.625V4.25001H8.375ZM7.75 13.625H10.25C10.6994 13.625 11.0062 13.9006 11.2269 14.25H6.77375C6.99312 13.9006 7.30062 13.625 7.75 13.625Z"
                            fill="#FFD233"
                          />
                        </svg>
                        0.0055 ETH
                      </span>
                      <span class="badge ms-2 achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Time Circle">
                            <path
                              id="Stroke 1"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7077 9.00033C16.7077 13.2578 13.2568 16.7087 8.99935 16.7087C4.74185 16.7087 1.29102 13.2578 1.29102 9.00033C1.29102 4.74283 4.74185 1.29199 8.99935 1.29199C13.2568 1.29199 16.7077 4.74283 16.7077 9.00033Z"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Stroke 3"
                              d="M11.8585 11.4524L8.7168 9.57823V5.53906"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                        35:49:43
                      </span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex  justify-content-start align-items-center mb-3">
                      <div class="pe-3">
                        <img
                          src={icons9}
                          class="img-fluid avatar avatar-50 avatar-rounded"
                          alt="img23"
                        />
                      </div>
                      <div>
                        <h5 class="achievements-header">Win 25 Matches</h5>
                        <span class="text-primary achievements-label">
                          Apex legends
                        </span>
                      </div>
                    </div>
                    <div class="progress mt-2" style={{ height: "8px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        class="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <small>06/10</small>
                      <small class="text-primary">4 Left</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="card achievements-card">
                  <div class="card-header">
                    <div class="d-flex">
                      <span class="badge text-primary achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M3.375 0.500009C2.78688 0.500009 2.17875 0.721884 1.695 1.14438C1.2125 1.56688 0.875 2.21626 0.875 3.00001C0.875 3.66438 1.15312 4.23063 1.5 4.68001C1.84688 5.12876 2.26687 5.48313 2.6525 5.83188C3.42375 6.53001 4 7.10376 4 8.00001C4 8.09501 3.9075 8.32501 3.785 8.50813C3.66313 8.69063 3.55063 8.80063 3.55063 8.80063L4.44937 9.68001C4.44937 9.68001 4.64937 9.48001 4.84 9.19126C5.00312 8.94501 5.18187 8.62751 5.23063 8.21501C5.30125 8.41751 5.36937 8.62501 5.44562 8.82001C5.875 9.92876 6.37063 10.9225 6.92938 11.6719C7.1325 11.9456 7.34188 12.1869 7.57438 12.3944C6.2825 12.4875 5.25 13.5613 5.25 14.875V15.5H12.75V14.875C12.75 13.5469 11.6975 12.4675 10.3869 12.3944C10.6313 12.176 10.8537 11.934 11.0506 11.6719C11.6125 10.925 12.1006 9.92813 12.535 8.82001C12.6163 8.61251 12.6938 8.39063 12.7694 8.17626C12.8112 8.60563 12.9919 8.93751 13.16 9.19126C13.3506 9.47938 13.5506 9.68001 13.5506 9.68001L14.4494 8.80063C14.4494 8.80063 14.3369 8.69063 14.215 8.50813C14.0925 8.32501 14 8.09501 14 8.00001C14 7.10376 14.5763 6.53001 15.3475 5.83188C15.7331 5.48313 16.1538 5.12876 16.5 4.67938C16.8469 4.23063 17.125 3.66438 17.125 3.00001C17.125 2.21626 16.7875 1.56688 16.3044 1.14438C15.8401 0.734893 15.244 0.506163 14.625 0.500009C14.0197 0.4984 13.4352 0.721056 12.9844 1.12501H5.01562C4.5648 0.721056 3.98033 0.4984 3.375 0.500009ZM3.375 1.75001C3.67062 1.75001 3.86063 1.84251 4 1.92563C4.01688 3.20063 4.23687 4.64563 4.58625 6.06626C4.25375 5.61688 3.83875 5.24376 3.4725 4.91376C3.07687 4.55751 2.71625 4.22813 2.47688 3.91813C2.2375 3.60813 2.125 3.33938 2.125 3.00001C2.125 2.56251 2.29563 2.29188 2.535 2.08188C2.775 1.87188 3.10375 1.75001 3.375 1.75001ZM14.625 1.75001C14.8962 1.75001 15.225 1.87188 15.465 2.08188C15.7044 2.29188 15.875 2.56313 15.875 3.00001C15.875 3.33938 15.7625 3.60813 15.5231 3.91813C15.2844 4.22813 14.9231 4.55751 14.5275 4.91438C14.1537 5.25126 13.7312 5.63938 13.3944 6.10563C13.7531 4.67438 13.9831 3.21751 14 1.92563C14.1871 1.80822 14.4041 1.74724 14.625 1.75001ZM5.32812 2.37501H12.6719C12.5769 4.23313 12.0956 6.49876 11.3631 8.37126C10.9581 9.40626 10.4894 10.3044 10.035 10.91C9.58125 11.5156 9.16625 11.75 8.98063 11.75C8.7975 11.75 8.39687 11.5156 7.94562 10.91C7.49375 10.305 7.02 9.40876 6.61688 8.37126C5.88938 6.49626 5.42312 4.22313 5.32812 2.37501ZM8.375 4.25001V7.37501H9.625V4.25001H8.375ZM7.75 13.625H10.25C10.6994 13.625 11.0062 13.9006 11.2269 14.25H6.77375C6.99312 13.9006 7.30062 13.625 7.75 13.625Z"
                            fill="#FFD233"
                          />
                        </svg>
                        0.0040 ETH
                      </span>
                      <span class="badge ms-2 achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Time Circle">
                            <path
                              id="Stroke 1"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7077 9.00033C16.7077 13.2578 13.2568 16.7087 8.99935 16.7087C4.74185 16.7087 1.29102 13.2578 1.29102 9.00033C1.29102 4.74283 4.74185 1.29199 8.99935 1.29199C13.2568 1.29199 16.7077 4.74283 16.7077 9.00033Z"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Stroke 3"
                              d="M11.8585 11.4524L8.7168 9.57823V5.53906"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                        35:00:00
                      </span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex  justify-content-start align-items-center mb-3">
                      <div class="pe-3">
                        <img
                          src={icons8}
                          class="img-fluid avatar avatar-50 avatar-rounded"
                          alt="img23"
                        />
                      </div>
                      <div>
                        <h5 class="achievements-header">Win 20 Matches</h5>
                        <span class="text-primary achievements-label">
                          Goal Diggers
                        </span>
                      </div>
                    </div>
                    <div class="progress mt-2" style={{ height: "8px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        class="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <small>06/10</small>
                      <small class="text-primary">4 Left</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="card achievements-card">
                  <div class="card-header">
                    <div class="d-flex">
                      <span class="badge text-primary achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M3.375 0.500009C2.78688 0.500009 2.17875 0.721884 1.695 1.14438C1.2125 1.56688 0.875 2.21626 0.875 3.00001C0.875 3.66438 1.15312 4.23063 1.5 4.68001C1.84688 5.12876 2.26687 5.48313 2.6525 5.83188C3.42375 6.53001 4 7.10376 4 8.00001C4 8.09501 3.9075 8.32501 3.785 8.50813C3.66313 8.69063 3.55063 8.80063 3.55063 8.80063L4.44937 9.68001C4.44937 9.68001 4.64937 9.48001 4.84 9.19126C5.00312 8.94501 5.18187 8.62751 5.23063 8.21501C5.30125 8.41751 5.36937 8.62501 5.44562 8.82001C5.875 9.92876 6.37063 10.9225 6.92938 11.6719C7.1325 11.9456 7.34188 12.1869 7.57438 12.3944C6.2825 12.4875 5.25 13.5613 5.25 14.875V15.5H12.75V14.875C12.75 13.5469 11.6975 12.4675 10.3869 12.3944C10.6313 12.176 10.8537 11.934 11.0506 11.6719C11.6125 10.925 12.1006 9.92813 12.535 8.82001C12.6163 8.61251 12.6938 8.39063 12.7694 8.17626C12.8112 8.60563 12.9919 8.93751 13.16 9.19126C13.3506 9.47938 13.5506 9.68001 13.5506 9.68001L14.4494 8.80063C14.4494 8.80063 14.3369 8.69063 14.215 8.50813C14.0925 8.32501 14 8.09501 14 8.00001C14 7.10376 14.5763 6.53001 15.3475 5.83188C15.7331 5.48313 16.1538 5.12876 16.5 4.67938C16.8469 4.23063 17.125 3.66438 17.125 3.00001C17.125 2.21626 16.7875 1.56688 16.3044 1.14438C15.8401 0.734893 15.244 0.506163 14.625 0.500009C14.0197 0.4984 13.4352 0.721056 12.9844 1.12501H5.01562C4.5648 0.721056 3.98033 0.4984 3.375 0.500009ZM3.375 1.75001C3.67062 1.75001 3.86063 1.84251 4 1.92563C4.01688 3.20063 4.23687 4.64563 4.58625 6.06626C4.25375 5.61688 3.83875 5.24376 3.4725 4.91376C3.07687 4.55751 2.71625 4.22813 2.47688 3.91813C2.2375 3.60813 2.125 3.33938 2.125 3.00001C2.125 2.56251 2.29563 2.29188 2.535 2.08188C2.775 1.87188 3.10375 1.75001 3.375 1.75001ZM14.625 1.75001C14.8962 1.75001 15.225 1.87188 15.465 2.08188C15.7044 2.29188 15.875 2.56313 15.875 3.00001C15.875 3.33938 15.7625 3.60813 15.5231 3.91813C15.2844 4.22813 14.9231 4.55751 14.5275 4.91438C14.1537 5.25126 13.7312 5.63938 13.3944 6.10563C13.7531 4.67438 13.9831 3.21751 14 1.92563C14.1871 1.80822 14.4041 1.74724 14.625 1.75001ZM5.32812 2.37501H12.6719C12.5769 4.23313 12.0956 6.49876 11.3631 8.37126C10.9581 9.40626 10.4894 10.3044 10.035 10.91C9.58125 11.5156 9.16625 11.75 8.98063 11.75C8.7975 11.75 8.39687 11.5156 7.94562 10.91C7.49375 10.305 7.02 9.40876 6.61688 8.37126C5.88938 6.49626 5.42312 4.22313 5.32812 2.37501ZM8.375 4.25001V7.37501H9.625V4.25001H8.375ZM7.75 13.625H10.25C10.6994 13.625 11.0062 13.9006 11.2269 14.25H6.77375C6.99312 13.9006 7.30062 13.625 7.75 13.625Z"
                            fill="#FFD233"
                          />
                        </svg>
                        0.0030 ETH
                      </span>
                      <span class="badge ms-2 achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Time Circle">
                            <path
                              id="Stroke 1"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7077 9.00033C16.7077 13.2578 13.2568 16.7087 8.99935 16.7087C4.74185 16.7087 1.29102 13.2578 1.29102 9.00033C1.29102 4.74283 4.74185 1.29199 8.99935 1.29199C13.2568 1.29199 16.7077 4.74283 16.7077 9.00033Z"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Stroke 3"
                              d="M11.8585 11.4524L8.7168 9.57823V5.53906"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                        34:00:00
                      </span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex  justify-content-start align-items-center mb-3">
                      <div class="pe-3">
                        <img
                          src={icons10}
                          class="img-fluid avatar avatar-50 avatar-rounded"
                          alt="img23"
                        />
                      </div>
                      <div>
                        <h5 class="achievements-header">Win 13 Matches</h5>
                        <span class="text-primary achievements-label">
                          Dominators
                        </span>
                      </div>
                    </div>
                    <div class="progress mt-2" style={{ height: "8px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        class="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <small>06/10</small>
                      <small class="text-primary">4 Left</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="card achievements-card">
                  <div class="card-header">
                    <div class="d-flex">
                      <span class="badge text-primary achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M3.375 0.500009C2.78688 0.500009 2.17875 0.721884 1.695 1.14438C1.2125 1.56688 0.875 2.21626 0.875 3.00001C0.875 3.66438 1.15312 4.23063 1.5 4.68001C1.84688 5.12876 2.26687 5.48313 2.6525 5.83188C3.42375 6.53001 4 7.10376 4 8.00001C4 8.09501 3.9075 8.32501 3.785 8.50813C3.66313 8.69063 3.55063 8.80063 3.55063 8.80063L4.44937 9.68001C4.44937 9.68001 4.64937 9.48001 4.84 9.19126C5.00312 8.94501 5.18187 8.62751 5.23063 8.21501C5.30125 8.41751 5.36937 8.62501 5.44562 8.82001C5.875 9.92876 6.37063 10.9225 6.92938 11.6719C7.1325 11.9456 7.34188 12.1869 7.57438 12.3944C6.2825 12.4875 5.25 13.5613 5.25 14.875V15.5H12.75V14.875C12.75 13.5469 11.6975 12.4675 10.3869 12.3944C10.6313 12.176 10.8537 11.934 11.0506 11.6719C11.6125 10.925 12.1006 9.92813 12.535 8.82001C12.6163 8.61251 12.6938 8.39063 12.7694 8.17626C12.8112 8.60563 12.9919 8.93751 13.16 9.19126C13.3506 9.47938 13.5506 9.68001 13.5506 9.68001L14.4494 8.80063C14.4494 8.80063 14.3369 8.69063 14.215 8.50813C14.0925 8.32501 14 8.09501 14 8.00001C14 7.10376 14.5763 6.53001 15.3475 5.83188C15.7331 5.48313 16.1538 5.12876 16.5 4.67938C16.8469 4.23063 17.125 3.66438 17.125 3.00001C17.125 2.21626 16.7875 1.56688 16.3044 1.14438C15.8401 0.734893 15.244 0.506163 14.625 0.500009C14.0197 0.4984 13.4352 0.721056 12.9844 1.12501H5.01562C4.5648 0.721056 3.98033 0.4984 3.375 0.500009ZM3.375 1.75001C3.67062 1.75001 3.86063 1.84251 4 1.92563C4.01688 3.20063 4.23687 4.64563 4.58625 6.06626C4.25375 5.61688 3.83875 5.24376 3.4725 4.91376C3.07687 4.55751 2.71625 4.22813 2.47688 3.91813C2.2375 3.60813 2.125 3.33938 2.125 3.00001C2.125 2.56251 2.29563 2.29188 2.535 2.08188C2.775 1.87188 3.10375 1.75001 3.375 1.75001ZM14.625 1.75001C14.8962 1.75001 15.225 1.87188 15.465 2.08188C15.7044 2.29188 15.875 2.56313 15.875 3.00001C15.875 3.33938 15.7625 3.60813 15.5231 3.91813C15.2844 4.22813 14.9231 4.55751 14.5275 4.91438C14.1537 5.25126 13.7312 5.63938 13.3944 6.10563C13.7531 4.67438 13.9831 3.21751 14 1.92563C14.1871 1.80822 14.4041 1.74724 14.625 1.75001ZM5.32812 2.37501H12.6719C12.5769 4.23313 12.0956 6.49876 11.3631 8.37126C10.9581 9.40626 10.4894 10.3044 10.035 10.91C9.58125 11.5156 9.16625 11.75 8.98063 11.75C8.7975 11.75 8.39687 11.5156 7.94562 10.91C7.49375 10.305 7.02 9.40876 6.61688 8.37126C5.88938 6.49626 5.42312 4.22313 5.32812 2.37501ZM8.375 4.25001V7.37501H9.625V4.25001H8.375ZM7.75 13.625H10.25C10.6994 13.625 11.0062 13.9006 11.2269 14.25H6.77375C6.99312 13.9006 7.30062 13.625 7.75 13.625Z"
                            fill="#FFD233"
                          />
                        </svg>
                        0.0030 ETH
                      </span>
                      <span class="badge ms-2 achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Time Circle">
                            <path
                              id="Stroke 1"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7077 9.00033C16.7077 13.2578 13.2568 16.7087 8.99935 16.7087C4.74185 16.7087 1.29102 13.2578 1.29102 9.00033C1.29102 4.74283 4.74185 1.29199 8.99935 1.29199C13.2568 1.29199 16.7077 4.74283 16.7077 9.00033Z"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Stroke 3"
                              d="M11.8585 11.4524L8.7168 9.57823V5.53906"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                        33:00:43
                      </span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex  justify-content-start align-items-center mb-3">
                      <div class="pe-3">
                        <img
                          src={icons1}
                          class="img-fluid avatar avatar-50 avatar-rounded"
                          alt="img23"
                        />
                      </div>
                      <div>
                        <h5 class="achievements-header">Win 7 Matches</h5>
                        <span class="text-primary achievements-label">
                          Shinning Stars
                        </span>
                      </div>
                    </div>
                    <div class="progress mt-2" style={{ height: "8px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        class="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <small>06/10</small>
                      <small class="text-primary">4 Left</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="swiper-slide">
                <div class="card achievements-card">
                  <div class="card-header">
                    <div class="d-flex">
                      <span class="badge text-primary achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            id="Vector"
                            d="M3.375 0.500009C2.78688 0.500009 2.17875 0.721884 1.695 1.14438C1.2125 1.56688 0.875 2.21626 0.875 3.00001C0.875 3.66438 1.15312 4.23063 1.5 4.68001C1.84688 5.12876 2.26687 5.48313 2.6525 5.83188C3.42375 6.53001 4 7.10376 4 8.00001C4 8.09501 3.9075 8.32501 3.785 8.50813C3.66313 8.69063 3.55063 8.80063 3.55063 8.80063L4.44937 9.68001C4.44937 9.68001 4.64937 9.48001 4.84 9.19126C5.00312 8.94501 5.18187 8.62751 5.23063 8.21501C5.30125 8.41751 5.36937 8.62501 5.44562 8.82001C5.875 9.92876 6.37063 10.9225 6.92938 11.6719C7.1325 11.9456 7.34188 12.1869 7.57438 12.3944C6.2825 12.4875 5.25 13.5613 5.25 14.875V15.5H12.75V14.875C12.75 13.5469 11.6975 12.4675 10.3869 12.3944C10.6313 12.176 10.8537 11.934 11.0506 11.6719C11.6125 10.925 12.1006 9.92813 12.535 8.82001C12.6163 8.61251 12.6938 8.39063 12.7694 8.17626C12.8112 8.60563 12.9919 8.93751 13.16 9.19126C13.3506 9.47938 13.5506 9.68001 13.5506 9.68001L14.4494 8.80063C14.4494 8.80063 14.3369 8.69063 14.215 8.50813C14.0925 8.32501 14 8.09501 14 8.00001C14 7.10376 14.5763 6.53001 15.3475 5.83188C15.7331 5.48313 16.1538 5.12876 16.5 4.67938C16.8469 4.23063 17.125 3.66438 17.125 3.00001C17.125 2.21626 16.7875 1.56688 16.3044 1.14438C15.8401 0.734893 15.244 0.506163 14.625 0.500009C14.0197 0.4984 13.4352 0.721056 12.9844 1.12501H5.01562C4.5648 0.721056 3.98033 0.4984 3.375 0.500009ZM3.375 1.75001C3.67062 1.75001 3.86063 1.84251 4 1.92563C4.01688 3.20063 4.23687 4.64563 4.58625 6.06626C4.25375 5.61688 3.83875 5.24376 3.4725 4.91376C3.07687 4.55751 2.71625 4.22813 2.47688 3.91813C2.2375 3.60813 2.125 3.33938 2.125 3.00001C2.125 2.56251 2.29563 2.29188 2.535 2.08188C2.775 1.87188 3.10375 1.75001 3.375 1.75001ZM14.625 1.75001C14.8962 1.75001 15.225 1.87188 15.465 2.08188C15.7044 2.29188 15.875 2.56313 15.875 3.00001C15.875 3.33938 15.7625 3.60813 15.5231 3.91813C15.2844 4.22813 14.9231 4.55751 14.5275 4.91438C14.1537 5.25126 13.7312 5.63938 13.3944 6.10563C13.7531 4.67438 13.9831 3.21751 14 1.92563C14.1871 1.80822 14.4041 1.74724 14.625 1.75001ZM5.32812 2.37501H12.6719C12.5769 4.23313 12.0956 6.49876 11.3631 8.37126C10.9581 9.40626 10.4894 10.3044 10.035 10.91C9.58125 11.5156 9.16625 11.75 8.98063 11.75C8.7975 11.75 8.39687 11.5156 7.94562 10.91C7.49375 10.305 7.02 9.40876 6.61688 8.37126C5.88938 6.49626 5.42312 4.22313 5.32812 2.37501ZM8.375 4.25001V7.37501H9.625V4.25001H8.375ZM7.75 13.625H10.25C10.6994 13.625 11.0062 13.9006 11.2269 14.25H6.77375C6.99312 13.9006 7.30062 13.625 7.75 13.625Z"
                            fill="#FFD233"
                          />
                        </svg>
                        0.0025 ETH
                      </span>
                      <span class="badge ms-2 achievements-label">
                        <svg
                          width="18"
                          class="me-2"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="Time Circle">
                            <path
                              id="Stroke 1"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.7077 9.00033C16.7077 13.2578 13.2568 16.7087 8.99935 16.7087C4.74185 16.7087 1.29102 13.2578 1.29102 9.00033C1.29102 4.74283 4.74185 1.29199 8.99935 1.29199C13.2568 1.29199 16.7077 4.74283 16.7077 9.00033Z"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              id="Stroke 3"
                              d="M11.8585 11.4524L8.7168 9.57823V5.53906"
                              stroke="#A5B2BC"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                        </svg>
                        30:49:43
                      </span>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex  justify-content-start align-items-center mb-3">
                      <div class="pe-3">
                        <img
                          src={icons10}
                          class="img-fluid avatar avatar-50 avatar-rounded"
                          alt="img23"
                        />
                      </div>
                      <div>
                        <h5 class="achievements-header">Win 2 Matches</h5>
                        <span class="text-primary achievements-label">
                          Trouble Makers
                        </span>
                      </div>
                    </div>
                    <div class="progress mt-2" style={{ height: "8px" }}>
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                      <div
                        class="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex justify-content-between mt-2">
                      <small>06/10</small>
                      <small class="text-primary">4 Left</small>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
