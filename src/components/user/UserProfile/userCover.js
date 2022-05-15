import React from "react";

/**
 * @author
 * @function UserCover
 **/

const UserCover = (props) => {
  return (
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="iq-header-img">
            <img
              src="./assets/images/pages/Profile-Banner.png"
              alt="header"
              class="img-fluid w-100 h-100"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div class="card-body mt-n6">
            <div class="d-flex align-items-center justify-content-between">
              <div class="d-flex flex-wrap align-items-center">
                <div class="profile-img position-relative me-3 mb-3 mb-lg-0">
                  <img
                    src="./assets/images/avatars/01.png"
                    class="img-fluid avatar avatar-100 avatar-rounded"
                    alt="profile-image"
                  />
                </div>
                <div class="d-flex align-items-center mb-3 mb-sm-0">
                  <div>
                    <h6 class="me-2 text-primary">Devon Lane</h6>
                    <p>UI/UX Designer</p>
                  </div>
                  <div class="ms-3">
                    <h6 class="me-2">Hello@gmail.com</h6>
                    <p>Email</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCover;
