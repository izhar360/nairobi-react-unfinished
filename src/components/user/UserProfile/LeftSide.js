import React from "react";

/**
 * @author
 * @function LeftSide
 **/

const LeftSide = (props) => {
  return (
    <div class="col-lg-3">
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title text-primary">News</h4>
          </div>
        </div>
        <div class="card-body">
          <ul class="list-inline m-0 p-0">
            <li class="d-flex mb-2">
              <div class="news-icon me-3">
                <svg width="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                  />
                </svg>
              </div>
              <p class="news-detail mb-0">
                Pre-registration goes live for offical websites for Dreamhack
                gaming <a href="#">see details</a>
              </p>
            </li>
            <li class="d-flex">
              <div class="news-icon me-3">
                <svg width="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"
                  />
                </svg>
              </div>
              <p class="news-detail mb-0">
                Minimum system requirements & features revealed
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <div class="header-title">
            <h4 class="card-title text-primary">Interset</h4>
          </div>
        </div>
        <div class="card-body">
          <div class="d-grid gap-card grid-cols-3">
            <a data-fslightbox="Interset" href="./assets/images/coins/04.png">
              <img
                src="./assets/images/coins/01.png"
                class="img-fluid  rounded"
                alt="profile-image"
              />
            </a>
            <a data-fslightbox="Interset" href="./assets/images/coins/01.png">
              <img
                src="./assets/images/coins/02.png"
                class="img-fluid rounded"
                alt="profile-image"
              />
            </a>
            <a data-fslightbox="Interset" href="./assets/images/coins/12.png">
              <img
                src="./assets/images/coins/03.png"
                class="img-fluid rounded"
                alt="profile-image"
              />
            </a>
            <a data-fslightbox="Interset" href="./assets/images/coins/09.png">
              <img
                src="./assets/images/coins/09.png"
                class="img-fluid rounded"
                alt="profile-image"
              />
            </a>
            <a data-fslightbox="Interset" href="./assets/images/coins/10.png">
              <img
                src="./assets/images/coins/11.png"
                class="img-fluid rounded"
                alt="profile-image"
              />
            </a>
            <a data-fslightbox="Interset" href="./assets/images/coins/13.png">
              <img
                src="./assets/images/coins/06.png"
                class="img-fluid rounded"
                alt="profile-image"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <h4 class="card-title text-primary">Our Latest News</h4>
          </div>
        </div>
        <div class="card-body">
          <div class="twit-feed">
            <div class="d-flex align-items-center mb-2">
              <img
                class="rounded-pill img-fluid avatar-50 me-3 "
                src="./assets/images/icons/10.png"
                alt=""
              />
              <div class="media-support-info">
                <h6 class="mb-0">Stadia Pro</h6>
                <p class="mb-0">
                  Stadia Pro free
                  <span class="text-primary">
                    <svg width="15" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
            <div class="media-support-body">
              <p class="mb-0">
                <p class="mb-0">
                  Good news for gamers! Stadia Pro free trial is now live
                </p>
              </p>
              <div class="twit-date">07 Jan 2021</div>
            </div>
          </div>
          <hr class="my-3" />
          <div class="twit-feed">
            <div class="d-flex align-items-center mb-2">
              <img
                class="rounded-pill img-fluid avatar-50 me-3"
                src="./assets/images/icons/08.png"
                alt=""
              />
              <div class="media-support-info">
                <h6 class="mb-0">Asphalt</h6>
                <p class="mb-0">
                  Asphalt-8
                  <span class="text-primary">
                    <svg width="15" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
            <div class="media-support-body">
              <p class="mb-0">
                Asphalt-8 new released date will be soon publised
              </p>
              <div class="twit-date mt-2">18 Feb 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
