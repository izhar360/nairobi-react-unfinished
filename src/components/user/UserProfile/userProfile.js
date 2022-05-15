import React from "react";
import Middle from "./Middle";
import LeftSide from "./LeftSide";
import UserCover from "./userCover";
import RightSide from "./RightSide";

/**
 * @author
 * @function UserProfile
 **/

const UserProfile = (props) => {
  return (
    <div class="container-fluid content-inner pb-0">
      <UserCover />
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <LeftSide />
            <Middle />
            <RightSide />
          </div>
        </div>
      </div>
      <div
        class="offcanvas offcanvas-bottom share-offcanvas"
        tabindex="-1"
        id="share-btn"
        aria-labelledby="shareBottomLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="shareBottomLabel">
            Share
          </h5>
          <button
            type="button"
            class="btn-close text-reset text-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body small">
          <div class="d-flex flex-wrap align-items-center">
            <div class="text-center me-3 mb-3">
              <img
                src="./assets/images/brands/02.png"
                class="img-fluid rounded mb-2"
                alt=""
              />
              <h6>Facebook</h6>
            </div>
            <div class="text-center me-3 mb-3">
              <img
                src="./assets/images/brands/03.png"
                class="img-fluid rounded mb-2"
                alt=""
              />
              <h6>Instagram</h6>
            </div>
            <div class="text-center me-3 mb-3">
              <img
                src="./assets/images/brands/06.png"
                class="img-fluid rounded mb-2"
                alt=""
              />
              <h6>Google Plus</h6>
            </div>
            <div class="text-center me-3 mb-3">
              <img
                src="./assets/images/brands/04.png"
                class="img-fluid rounded mb-2"
                alt=""
              />
              <h6>linkedin</h6>
            </div>
            <div class="text-center me-3 mb-3">
              <img
                src="./assets/images/brands/05.png"
                class="img-fluid rounded mb-2"
                alt=""
              />
              <h6>twitter</h6>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default UserProfile;
