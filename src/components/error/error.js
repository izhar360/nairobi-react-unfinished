import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/images/error/404.png";

/**
 * @author
 * @function Error
 **/

const Error = (props) => {
  return (
    <>
      <div>
        <div class="wrapper">
          <div class="gradient1">
            <div
              class="container text-center"
              style={{ position: "relative, top:30vh" }}
            >
              <img src={error} class="img-fluid  w-50" alt="" />
              <h2 class="mb-3 mt-5 text-white">
                Oops! This Page is Not Found.
              </h2>
              <p class="">The requested page dose not exist.</p>
              <Link
                class="btn btn-primary text-white d-inline-flex align-items-center mt-3 mb-5"
                to={"/"}
              >
                Back to Home
              </Link>
            </div>
          </div>
          <div class="logo-bottom">
            <Link to={"/"}>
              <svg
                width="100"
                viewBox="0 0 197 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="197" height="58" fill="url(#paint0_linear)" />
                <path
                  d="M27.4 14H33.4L40.4 30.8L41.12 32.56L41.44 33.4H41.6L41.48 32.56C41.4267 32.24 41.4 31.6533 41.4 30.8V14H47V42H41L34 25.2L33.28 23.44L32.96 22.6H32.8L32.88 23.44C32.96 24.48 33 25.0667 33 25.2V42H27.4V14ZM51.0063 42L59.2063 14H65.6063L73.8063 42H68.2063L66.4063 35.6H58.4063L56.6063 42H51.0063ZM65.4063 32L63.0063 23.6C62.9263 23.3067 62.8463 22.96 62.7663 22.56C62.6863 22.1333 62.6329 21.8267 62.6063 21.64L62.4863 20.6H62.3263L62.1662 21.64C62.1129 21.88 62.0463 22.2133 61.9663 22.64C61.9129 23.04 61.8596 23.36 61.8063 23.6L59.4063 32H65.4063ZM77.7906 42V14H83.3906V42H77.7906Z"
                  fill="white"
                />
                <path
                  d="M90.1734 14H97.7734C101.48 14 104.2 14.76 105.933 16.28C107.693 17.8 108.573 20.04 108.573 23C108.573 25.7467 107.707 27.9067 105.973 29.48C105.2 30.1733 104.333 30.68 103.373 31L110.173 42H103.773L97.9734 32H95.7734V42H90.1734V14ZM97.7734 28.4C99.6134 28.4 100.933 27.9867 101.733 27.16C102.56 26.3067 102.973 24.92 102.973 23C102.973 21.08 102.56 19.7067 101.733 18.88C100.933 18.0267 99.6134 17.6 97.7734 17.6H95.7734V28.4H97.7734ZM123.358 42.4C120.024 42.4 117.424 41.24 115.558 38.92C113.691 36.5733 112.758 32.9333 112.758 28C112.758 23.0667 113.691 19.44 115.558 17.12C117.424 14.7733 120.024 13.6 123.358 13.6C126.691 13.6 129.291 14.7733 131.158 17.12C133.024 19.44 133.958 23.0667 133.958 28C133.958 32.9333 133.024 36.5733 131.158 38.92C129.291 41.24 126.691 42.4 123.358 42.4ZM123.358 38.8C124.824 38.8 126.024 37.9733 126.958 36.32C127.891 34.6667 128.358 31.8933 128.358 28C128.358 24.1067 127.891 21.3333 126.958 19.68C126.024 18.0267 124.824 17.2 123.358 17.2C121.891 17.2 120.691 18.0267 119.758 19.68C118.824 21.3333 118.358 24.1067 118.358 28C118.358 31.8933 118.824 34.6667 119.758 36.32C120.691 37.9733 121.891 38.8 123.358 38.8ZM139.353 14H147.753C150.926 14 153.313 14.6533 154.913 15.96C156.54 17.2667 157.353 19.0133 157.353 21.2C157.353 23.36 156.513 25.0133 154.833 26.16C154.086 26.6667 153.26 27.0133 152.353 27.2C153.446 27.3867 154.446 27.7733 155.353 28.36C156.206 28.92 156.913 29.68 157.473 30.64C158.06 31.6 158.353 32.7867 158.353 34.2C158.353 39.4 154.82 42 147.753 42H139.353V14ZM147.753 25.6C148.953 25.6 149.913 25.24 150.633 24.52C151.38 23.7733 151.753 22.8 151.753 21.6C151.753 20.4 151.38 19.44 150.633 18.72C149.913 17.9733 148.953 17.6 147.753 17.6H144.953V25.6H147.753ZM147.753 38.4C151.086 38.4 152.753 36.8667 152.753 33.8C152.753 30.7333 151.086 29.2 147.753 29.2H144.953V38.4H147.753ZM163.767 42V14H169.367V42H163.767Z"
                  fill="#9C2224"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-0.464622"
                    y1="29.4084"
                    x2="197.465"
                    y2="29.4084"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#9C2224" />
                    <stop offset="0.687864" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
