import React from "react";

/**
 * @author
 * @function RightSide
 **/

const RightSide = (props) => {
  return (
    <div class="col-lg-3">
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title">About</h4>
          </div>
        </div>
        <div class="card-body">
          <p>Lorem ipsum dolor sit amet, contur adipiscing elit.</p>
          <div class="mb-1">
            Email:{" "}
            <a href="#" class="ms-3">
              nikjone@demoo.com
            </a>
          </div>
          <div class="mb-1">
            Phone:{" "}
            <a href="#" class="ms-3">
              001 2351 256 12
            </a>
          </div>
          <div>
            Location: <span class="ms-3">USA</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title">Recently Played</h4>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-inline m-0 p-0">
            <li class="d-flex mb-4 align-items-center active">
              <img
                src="./assets/images/pages/03.png"
                alt="story-img"
                class="rounded-pill avatar-50  img-fluid"
              />
              <div class="ms-3">
                <h5>BattleField</h5>
                <p class="mb-0">02:10:01 Hrs</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <img
                src="./assets/images/pages/02.png"
                alt="story-img"
                class="rounded-pill avatar-50  img-fluid"
              />
              <div class="ms-3">
                <h5>The Shore</h5>
                <p class="mb-0">01:20:40 Hrs</p>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <img
                src="./assets/images/pages/04.png"
                alt="story-img"
                class="rounded-pill avatar-50  img-fluid"
              />
              <div class="ms-3">
                <h5>Outriders</h5>
                <p class="mb-0">03:30:00 Hrs</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title">Suggestions</h4>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-inline m-0 p-0">
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/05.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Dali Mask</h6>
                <p class="mb-0">$684.95</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid  rounded-pill">
                <img
                  src="./assets/images/coins/03.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Bullet</h6>
                <p class="mb-0">$1.00</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/06.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Granate</h6>
                <p class="mb-0">$71.06</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/07.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Masked People</h6>
                <p class="mb-0">$46,353.98</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/09.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Money sack</h6>
                <p class="mb-0">$73.72</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/02.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Bank</h6>
                <p class="mb-0">$181.96</p>
              </div>
            </li>
            <li class="d-flex mb-4 align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/01.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>AK47</h6>
                <p class="mb-0">$3,197.67</p>
              </div>
            </li>
            <li class="d-flex align-items-center">
              <div class="img-fluid rounded-pill">
                <img
                  src="./assets/images/coins/08.png"
                  alt="story-img"
                  class="rounded-pill avatar-40"
                />
              </div>
              <div class="ms-3 flex-grow-1">
                <h6>Message</h6>
                <p class="mb-0">$46,451.62</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
