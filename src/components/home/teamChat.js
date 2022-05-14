import icons12 from "../../assets/images/icons/12.png";
import icons11 from "../../assets/images/icons/11.png";
import icons15 from "../../assets/images/icons/15.png";
import icons14 from "../../assets/images/icons/14.png";
import icons13 from "../../assets/images/icons/13.png";
import pages9 from "../../assets/images/pages/09.png";
import pages10 from "../../assets/images/pages/10.png";
/**
 * @author
 * @function TeamChat
 **/

const TeamChat = (props) => {
  return (
    <div class="col-lg-4">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header pb-4 border-bottom">
            <div class="header-title">
              <div class="d-flex justify-content-between">
                <h4 class="card-title">
                  Team Chat
                  <span class="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </span>
                </h4>
                <button type="button" class="btn btn-sm btn-primary btn-icon">
                  <span class="btn-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
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
            </div>
          </div>
          <div class="card-body p-0 team-card">
            <ul class="list-inline m-0 p-0">
              <li class="team-chat">
                <div class="flex-shrink-0 align-self-start team-chat-body">
                  <img
                    src={icons11}
                    class="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img6"
                  />
                </div>
                <div class="flex-grow-1 ms-3 team-chat-body">
                  <div class="d-flex align-items-center mb-2">
                    <button class="btn btn-icon btn-secondary me-3 btn-sm align-self-start">
                      <span class="btn-inner">
                        <svg
                          width="25"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0381 0.790607C11.1859 0.739872 11.3459 0.736597 11.4957 0.781241C11.6455 0.825884 11.7776 0.916215 11.8736 1.03961L17.1236 7.78961C17.226 7.92126 17.2816 8.08331 17.2816 8.25011C17.2816 8.41691 17.226 8.57895 17.1236 8.71061L11.8736 15.4606C11.7776 15.5839 11.6455 15.6741 11.4958 15.7186C11.346 15.7632 11.1861 15.7599 11.0383 15.7092C10.8906 15.6585 10.7623 15.5629 10.6715 15.4358C10.5807 15.3086 10.5319 15.1563 10.5318 15.0001V12.0076C6.49756 12.0916 4.55956 12.8574 3.58606 13.6899C2.66056 14.4811 2.49106 15.4119 2.31481 16.3869L2.26906 16.6381C2.2354 16.8179 2.13721 16.9792 1.99295 17.0916C1.8487 17.2041 1.66832 17.2599 1.48576 17.2487C1.3032 17.2374 1.13105 17.1599 1.00168 17.0306C0.87231 16.9013 0.794649 16.7292 0.783308 16.5466C0.654308 14.4856 0.847808 11.4991 2.30356 9.00086C3.71656 6.57611 6.26056 4.71161 10.5318 4.51661V1.50011C10.5318 1.34384 10.5805 1.19147 10.6713 1.06427C10.7621 0.937068 10.8903 0.841392 11.0381 0.790607Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div>
                      <h6 class="team-title">Annihilator</h6>
                      <span class="team-subtitle">Level 8</span>
                    </div>
                  </div>
                  <span class="team-decription">
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </span>
                </div>
                <div class="team-action align-self-start">
                  <div class="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="team-chat">
                <div class="flex-shrink-0 align-self-start team-chat-body">
                  <img
                    src={icons15}
                    class="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img6"
                  />
                </div>
                <div class="flex-grow-1 ms-3 team-chat-body">
                  <div class="d-flex align-items-center mb-2">
                    <button class="btn btn-icon btn-secondary me-3 btn-sm align-self-start">
                      <span class="btn-inner">
                        <svg
                          width="25"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0381 0.790607C11.1859 0.739872 11.3459 0.736597 11.4957 0.781241C11.6455 0.825884 11.7776 0.916215 11.8736 1.03961L17.1236 7.78961C17.226 7.92126 17.2816 8.08331 17.2816 8.25011C17.2816 8.41691 17.226 8.57895 17.1236 8.71061L11.8736 15.4606C11.7776 15.5839 11.6455 15.6741 11.4958 15.7186C11.346 15.7632 11.1861 15.7599 11.0383 15.7092C10.8906 15.6585 10.7623 15.5629 10.6715 15.4358C10.5807 15.3086 10.5319 15.1563 10.5318 15.0001V12.0076C6.49756 12.0916 4.55956 12.8574 3.58606 13.6899C2.66056 14.4811 2.49106 15.4119 2.31481 16.3869L2.26906 16.6381C2.2354 16.8179 2.13721 16.9792 1.99295 17.0916C1.8487 17.2041 1.66832 17.2599 1.48576 17.2487C1.3032 17.2374 1.13105 17.1599 1.00168 17.0306C0.87231 16.9013 0.794649 16.7292 0.783308 16.5466C0.654308 14.4856 0.847808 11.4991 2.30356 9.00086C3.71656 6.57611 6.26056 4.71161 10.5318 4.51661V1.50011C10.5318 1.34384 10.5805 1.19147 10.6713 1.06427C10.7621 0.937068 10.8903 0.841392 11.0381 0.790607Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div>
                      <h6 class="team-title">Eat Bullets</h6>
                      <span class="team-subtitle">Level 5</span>
                    </div>
                  </div>
                  <span class="team-decription">
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </span>
                </div>
                <div class="team-action align-self-start">
                  <div class="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="team-chat">
                <div class="flex-shrink-0 align-self-start team-chat-body">
                  <img
                    src={icons14}
                    class="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img6"
                  />
                </div>
                <div class="flex-grow-1 ms-3 team-chat-body">
                  <div class="d-flex align-items-center mb-2">
                    <button class="btn btn-icon btn-secondary me-3 btn-sm align-self-start">
                      <span class="btn-inner">
                        <svg
                          width="25"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0381 0.790607C11.1859 0.739872 11.3459 0.736597 11.4957 0.781241C11.6455 0.825884 11.7776 0.916215 11.8736 1.03961L17.1236 7.78961C17.226 7.92126 17.2816 8.08331 17.2816 8.25011C17.2816 8.41691 17.226 8.57895 17.1236 8.71061L11.8736 15.4606C11.7776 15.5839 11.6455 15.6741 11.4958 15.7186C11.346 15.7632 11.1861 15.7599 11.0383 15.7092C10.8906 15.6585 10.7623 15.5629 10.6715 15.4358C10.5807 15.3086 10.5319 15.1563 10.5318 15.0001V12.0076C6.49756 12.0916 4.55956 12.8574 3.58606 13.6899C2.66056 14.4811 2.49106 15.4119 2.31481 16.3869L2.26906 16.6381C2.2354 16.8179 2.13721 16.9792 1.99295 17.0916C1.8487 17.2041 1.66832 17.2599 1.48576 17.2487C1.3032 17.2374 1.13105 17.1599 1.00168 17.0306C0.87231 16.9013 0.794649 16.7292 0.783308 16.5466C0.654308 14.4856 0.847808 11.4991 2.30356 9.00086C3.71656 6.57611 6.26056 4.71161 10.5318 4.51661V1.50011C10.5318 1.34384 10.5805 1.19147 10.6713 1.06427C10.7621 0.937068 10.8903 0.841392 11.0381 0.790607Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div>
                      <h6 class="team-title">Evillious Energy</h6>
                      <span class="team-subtitle">Level 3</span>
                    </div>
                  </div>
                  <span class="team-decription">
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </span>
                </div>
                <div class="team-action align-self-start">
                  <div class="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="team-chat">
                <div class="flex-shrink-0 align-self-start team-chat-body">
                  <img
                    src={icons12}
                    class="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img6"
                  />
                </div>
                <div class="flex-grow-1 ms-3 team-chat-body">
                  <div class="d-flex align-items-center mb-2">
                    <button class="btn btn-icon btn-secondary me-3 btn-sm align-self-start">
                      <span class="btn-inner">
                        <svg
                          width="25"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0381 0.790607C11.1859 0.739872 11.3459 0.736597 11.4957 0.781241C11.6455 0.825884 11.7776 0.916215 11.8736 1.03961L17.1236 7.78961C17.226 7.92126 17.2816 8.08331 17.2816 8.25011C17.2816 8.41691 17.226 8.57895 17.1236 8.71061L11.8736 15.4606C11.7776 15.5839 11.6455 15.6741 11.4958 15.7186C11.346 15.7632 11.1861 15.7599 11.0383 15.7092C10.8906 15.6585 10.7623 15.5629 10.6715 15.4358C10.5807 15.3086 10.5319 15.1563 10.5318 15.0001V12.0076C6.49756 12.0916 4.55956 12.8574 3.58606 13.6899C2.66056 14.4811 2.49106 15.4119 2.31481 16.3869L2.26906 16.6381C2.2354 16.8179 2.13721 16.9792 1.99295 17.0916C1.8487 17.2041 1.66832 17.2599 1.48576 17.2487C1.3032 17.2374 1.13105 17.1599 1.00168 17.0306C0.87231 16.9013 0.794649 16.7292 0.783308 16.5466C0.654308 14.4856 0.847808 11.4991 2.30356 9.00086C3.71656 6.57611 6.26056 4.71161 10.5318 4.51661V1.50011C10.5318 1.34384 10.5805 1.19147 10.6713 1.06427C10.7621 0.937068 10.8903 0.841392 11.0381 0.790607Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div>
                      <h6 class="team-title">Gabriel Groomer</h6>
                      <span class="team-subtitle">Level 10</span>
                    </div>
                  </div>
                  <span class="team-decription">
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </span>
                </div>
                <div class="team-action align-self-start">
                  <div class="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="team-chat">
                <div class="flex-shrink-0 align-self-start team-chat-body">
                  <img
                    src={icons13}
                    class="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img6"
                  />
                </div>
                <div class="flex-grow-1 ms-3 team-chat-body">
                  <div class="d-flex align-items-center mb-2">
                    <button class="btn btn-icon btn-secondary me-3 btn-sm align-self-start">
                      <span class="btn-inner">
                        <svg
                          width="25"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.0381 0.790607C11.1859 0.739872 11.3459 0.736597 11.4957 0.781241C11.6455 0.825884 11.7776 0.916215 11.8736 1.03961L17.1236 7.78961C17.226 7.92126 17.2816 8.08331 17.2816 8.25011C17.2816 8.41691 17.226 8.57895 17.1236 8.71061L11.8736 15.4606C11.7776 15.5839 11.6455 15.6741 11.4958 15.7186C11.346 15.7632 11.1861 15.7599 11.0383 15.7092C10.8906 15.6585 10.7623 15.5629 10.6715 15.4358C10.5807 15.3086 10.5319 15.1563 10.5318 15.0001V12.0076C6.49756 12.0916 4.55956 12.8574 3.58606 13.6899C2.66056 14.4811 2.49106 15.4119 2.31481 16.3869L2.26906 16.6381C2.2354 16.8179 2.13721 16.9792 1.99295 17.0916C1.8487 17.2041 1.66832 17.2599 1.48576 17.2487C1.3032 17.2374 1.13105 17.1599 1.00168 17.0306C0.87231 16.9013 0.794649 16.7292 0.783308 16.5466C0.654308 14.4856 0.847808 11.4991 2.30356 9.00086C3.71656 6.57611 6.26056 4.71161 10.5318 4.51661V1.50011C10.5318 1.34384 10.5805 1.19147 10.6713 1.06427C10.7621 0.937068 10.8903 0.841392 11.0381 0.790607Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </span>
                    </button>
                    <div>
                      <h6 class="team-title">Duke of Doom</h6>
                      <span class="team-subtitle">Level 1</span>
                    </div>
                  </div>
                  <span class="team-decription">
                    This is some content from a media component. You can replace
                    this with any content and adjust it as needed.
                  </span>
                </div>
                <div class="team-action align-self-start">
                  <div class="dropdown">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-12 banner-horizontal">
        <div class="iq-video-thumb">
          <img
            src={pages9}
            class="img-fluid rounded-2 iq-img iq-img-shadow-red w-100 banner-horizontal-img"
            alt="img8"
          />
          <button
            type="button"
            class="iq-btn-thumb btn btn-white btn-icon text-primary rounded-circle position-absolute"
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
        <div class="iq-video-thumb">
          <img
            src={pages10}
            class="img-fluid rounded-2 iq-img iq-img-shadow-red w-100 banner-horizontal-img"
            alt="img8"
          />
          <button
            type="button"
            class="iq-btn-thumb btn btn-white btn-icon text-primary rounded-circle position-absolute"
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
  );
};

export default TeamChat;
