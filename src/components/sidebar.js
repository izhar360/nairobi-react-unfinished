/**
 * @author
 * @function Sidebar
 **/

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <aside class="sidebar sidebar-default sidebar-dark navs-gradient sidebar-mini sidebar-hover ">
      <div class="sidebar-header d-flex align-items-center justify-content-start">
        <Link to={"/"} class="navbar-brand dis-none">
          <div class="logo">
            <svg
              width="35"
              viewBox="0 0 52 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="7" y="5" width="11.4716" height="48" fill="#9C2224" />
              <rect
                x="33.5283"
                y="5"
                width="11.4716"
                height="48"
                fill="#9C2224"
              />
              <path d="M7 5H18.4716L44.9997 53H33.5281L7 5Z" fill="#9C2224" />
            </svg>
          </div>
          <div class="logo-hover">
            <svg
              width="125"
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
                fill="#9C2224"
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
                  <stop stopColor="#9C2224" />
                  <stop offset="0.687864" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </Link>
        <div
          class="sidebar-toggle d-xl-none"
          data-toggle="sidebar"
          data-active="true"
        >
          <i class="icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.25 12.2744L19.25 12.2744"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </i>
        </div>
      </div>
      <div class="sidebar-body p-0 data-scrollbar">
        <div class="collapse navbar-collapse" id="sidebar">
          <ul class="navbar-nav iq-main-menu">
            <li class="nav-item ">
              <Link class="nav-link active" aria-current="page" to={"/"}>
                <i class="icon">
                  <svg
                    width="22"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </i>
                <span class="item-name">Dashboard</span>
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-user"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-user"
              >
                <i class="icon">
                  <svg
                    width="22"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9849 15.3462C8.11731 15.3462 4.81445 15.931 4.81445 18.2729C4.81445 20.6148 8.09636 21.2205 11.9849 21.2205C15.8525 21.2205 19.1545 20.6348 19.1545 18.2938C19.1545 15.9529 15.8735 15.3462 11.9849 15.3462Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9849 12.0059C14.523 12.0059 16.5801 9.94779 16.5801 7.40969C16.5801 4.8716 14.523 2.81445 11.9849 2.81445C9.44679 2.81445 7.3887 4.8716 7.3887 7.40969C7.38013 9.93922 9.42394 11.9973 11.9525 12.0059H11.9849Z"
                      stroke="currentColor"
                      strokeWidth="1.42857"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </svg>
                </i>
                <span class="item-name">Users</span>
                <i class="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
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
                </i>
              </a>
              <ul
                class="sub-nav collapse"
                id="sidebar-user"
                data-bs-parent="#sidebar"
              >
                <li class="nav-item">
                  <Link class="nav-link " to={"/userprofile"}>
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> U </i>
                    <span class="item-name">User Profile</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to={"/useradd"}>
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> U </i>
                    <span class="item-name">User Edit</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to={"/userlist"}>
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> U </i>
                    <span class="item-name">User List</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                data-bs-toggle="collapse"
                href="#sidebar-auth"
                role="button"
                aria-expanded="false"
                aria-controls="sidebar-user"
              >
                <i class="icon">
                  <svg
                    width="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9846 21.606C11.9846 21.606 19.6566 19.283 19.6566 12.879C19.6566 6.474 19.9346 5.974 19.3196 5.358C18.7036 4.742 12.9906 2.75 11.9846 2.75C10.9786 2.75 5.26557 4.742 4.65057 5.358C4.03457 5.974 4.31257 6.474 4.31257 12.879C4.31257 19.283 11.9846 21.606 11.9846 21.606Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.38574 11.8746L11.2777 13.7696L15.1757 9.86963"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </i>
                <span class="item-name">Authentication</span>
                <i class="right-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
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
                </i>
              </a>
              <ul
                class="sub-nav collapse"
                id="sidebar-auth"
                data-bs-parent="#sidebar"
              >
                <li class="nav-item">
                  <a class="nav-link" href="../dashboard/auth/sign-in.html">
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> L </i>
                    <span class="item-name">Login</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../dashboard/auth/sign-up.html">
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> R </i>
                    <span class="item-name">Register</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="../dashboard/auth/confirm-mail.html"
                  >
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> C </i>
                    <span class="item-name">Confirm Mail</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../dashboard/auth/lock-screen.html">
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> L </i>
                    <span class="item-name">Lock Screen</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../dashboard/auth/recoverpw.html">
                    <i class="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <g>
                          <circle
                            cx="12"
                            cy="12"
                            r="8"
                            fill="currentColor"
                          ></circle>
                        </g>
                      </svg>
                    </i>
                    <i class="sidenav-mini-icon"> R </i>
                    <span class="item-name">Recover password</span>
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/maps"}>
                <i class="icon">
                  <svg
                    width="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </i>
                <span class="item-name">Maps</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to={"/icons"}>
                <i class="icon">
                  <svg
                    width="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.739 6.15368C19.739 3.40281 17.8583 2.30005 15.1506 2.30005H8.79167C6.16711 2.30005 4.2002 3.32762 4.2002 5.97022V20.694C4.2002 21.4198 4.98115 21.877 5.61373 21.5221L11.9957 17.9422L18.3225 21.5161C18.9561 21.873 19.739 21.4158 19.739 20.689V6.15368Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M8.27148 9.02811H15.5898"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </i>
                <span class="item-name">icons</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to={"/error"}>
                <i class="icon">
                  <svg
                    width="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3955 9.59497L9.60352 14.387"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M14.3971 14.3898L9.60107 9.59277"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.3345 2.75024H7.66549C4.64449 2.75024 2.75049 4.88924 2.75049 7.91624V16.0842C2.75049 19.1112 4.63549 21.2502 7.66549 21.2502H16.3335C19.3645 21.2502 21.2505 19.1112 21.2505 16.0842V7.91624C21.2505 4.88924 19.3645 2.75024 16.3345 2.75024Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </i>
                <span class="item-name">Error</span>
              </Link>
            </li>
            <li>
              <hr class="hr-horizontal" />
            </li>
            <li class="nav-item">
              <Link class="nav-link " to={"/components"}>
                <i class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </i>
                <span class="item-name">Components</span>
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                target="_blank"
                href="https://templates.iqonic.design/lite/nairobi/documentation/html/dist/main/"
              >
                <i class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                </i>
                <span class="item-name">Documentation</span>
              </a>
            </li>
          </ul>{" "}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
