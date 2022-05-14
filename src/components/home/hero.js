import pages1 from "../../assets/images/pages/01.png";
import pages2 from "../../assets/images/pages/02.png";
/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <>
      <div class="d-flex justify-content-between">
        <div>
          <h2 class="text-primary fw-bold mb-3">Good Evening John</h2>
          <p>Welcome to Nairobi game zone</p>
        </div>
        <div>
          <a href="#" class="btn btn-sm btn-primary">
            More Games
          </a>
        </div>
      </div>
      <div class="col-lg-12 mt-3">
        <div class="card banner d-block">
          <div class="banner-actions d-none">
            <button
              type="button"
              class="banner-slider-next btn btn-white text-primary rounded-pill btn-icon me-3 "
            >
              <span class="btn-inner">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
            </button>
            <button
              type="button"
              class="banner-slider-prev btn btn-white text-primary rounded-pill btn-icon"
            >
              <span class="btn-inner">
                <svg
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div class="card-body banner-body">
            <span class="banner-text">NAIROBI</span>
            <div class="banner-item py-5">
              <div class="banner-text-1">
                <p>Video Game</p>
                <h1 class="fw-bold mb-4">
                  Let The
                  <span class="text-primary">Matriachy</span>
                  <br /> <span>Begin</span>
                </h1>
              </div>
              <button type="button" class="btn btn-primary">
                Know More
              </button>
              <button type="button" class="btn btn-white ms-3">
                Play
              </button>
            </div>
            <div class="banner-img">
              <img src={pages1} class="img-fluid" alt="img8" />
            </div>
            <div class="countdown banner-countdown">
              <p class="mb-0">
                Game Stars in :<span data-days="">15</span>:
                <span data-hours="">11</span>:<span data-minutes="">33</span>:
                <span data-seconds="">34</span>
              </p>
            </div>
            <div class="iq-video-thumb iq-video-thumb-resposive align-self-end">
              <img
                src={pages2}
                class="img-fluid m-0 iq-img iq-img-shadow-blue"
                alt="img8"
              />
              <button
                type="button"
                class="iq-btn-thumb btn btn-white text-primary rounded-pill btn-icon"
              >
                <span class="btn-inner">
                  <svg
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8817 9.20912C14.5492 8.3891 12.8335 9.3478 12.8335 10.9124V33.0875C12.8335 34.6522 14.5492 35.6109 15.8817 34.7908L33.8989 23.7033C35.168 22.9223 35.168 21.0776 33.8989 20.2967L15.8817 9.20912Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="card banner-sm d-none">
          <div class="card-body banner-body">
            <div class="banner-item">
              <div class="banner-text-1">
                <p class="text-center m-0">Video Game</p>
                <div class="countdown banner-countdown text-center">
                  <p class="mb-0">
                    Game Stars in<span data-days="">15</span>:
                    <span data-hours="">11</span>:
                    <span data-minutes="">33</span>:
                    <span data-seconds="">34</span>
                  </p>
                </div>
                <h1 class="fw-bold mb-4 text-center">
                  Let <span class="ms-2">The</span>
                  <span class="text-primary ms-2">Matriachy</span>
                  <br /> <span class="mt-2">Begin</span>
                </h1>
              </div>
              <div class="iq-video-thumb iq-video-thumb-resposive align-self-end">
                <img
                  src={pages2}
                  class="img-fluid m-0 iq-img iq-img-shadow-blue"
                  alt="img8"
                />
                <button
                  type="button"
                  class="iq-btn-thumb btn btn-white text-primary rounded-pill btn-icon"
                >
                  <span class="btn-inner">
                    <svg
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8817 9.20912C14.5492 8.3891 12.8335 9.3478 12.8335 10.9124V33.0875C12.8335 34.6522 14.5492 35.6109 15.8817 34.7908L33.8989 23.7033C35.168 22.9223 35.168 21.0776 33.8989 20.2967L15.8817 9.20912Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div class="mt-4 text-center">
                <button type="button" class="btn btn-primary">
                  Know More
                </button>
                <button type="button" class="btn btn-white ms-3">
                  Play
                </button>
              </div>
            </div>
            <div class="banner-img">
              <img src={pages1} class="img-fluid" alt="img8" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
