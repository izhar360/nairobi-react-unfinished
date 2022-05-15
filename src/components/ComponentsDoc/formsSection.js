import React from "react";

/**
 * @author
 * @function FormsSection
 **/

const FormsSection = (props) => {
  return (
    <section id="forms">
      <div class="iq-side-content sticky-xl-top">
        <div class="card">
          <div class="card-body">
            <h4 class="fw-bold">Forms</h4>
          </div>
        </div>
      </div>

      <article id="overview">
        <div class="card iq-document-card iq-doc-head">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-form-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-form-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-form-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <fieldset class="mb-3">
                    <legend>Radios buttons</legend>
                    <div class="form-check">
                      <input
                        type="radio"
                        name="radios"
                        class="form-check-input"
                        id="exampleRadio1"
                      />
                      <label class="form-check-label" for="exampleRadio1">
                        Default radio
                      </label>
                    </div>
                    <div class="mb-3 form-check">
                      <input
                        type="radio"
                        name="radios"
                        class="form-check-input"
                        id="exampleRadio2"
                      />
                      <label class="form-check-label" for="exampleRadio2">
                        Another radio
                      </label>
                    </div>
                  </fieldset>
                  <div class="mb-3">
                    <label class="form-label" for="customFile">
                      Upload
                    </label>
                    <input type="file" class="form-control" id="customFile" />
                  </div>
                  <div class="mb-3 form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                      checked=""
                    />
                    <label
                      class="form-check-label"
                      for="flexSwitchCheckChecked"
                    >
                      Checked switch checkbox input
                    </label>
                  </div>
                  <div class="mb-3">
                    <label for="customRange3" class="form-label">
                      Example range
                    </label>
                    <input
                      type="range"
                      class="form-range"
                      min="0"
                      max="5"
                      step="0.5"
                      id="customRange3"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-form-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                    &#x3C;form&#x3E; &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label for=&#x22;exampleInputEmail1&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Email
                    address&#x3C;/label&#x3E; &#x3C;input type=&#x22;email&#x22;
                    class=&#x22;form-control&#x22;
                    id=&#x22;exampleInputEmail1&#x22;
                    aria-describedby=&#x22;emailHelp&#x22;&#x3E; &#x3C;div
                    id=&#x22;emailHelp&#x22;
                    class=&#x22;form-text&#x22;&#x3E;We&#x27;ll never share your
                    email with anyone else.&#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E; &#x3C;label
                    for=&#x22;exampleInputPassword1&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Password&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;password&#x22;
                    class=&#x22;form-control&#x22;
                    id=&#x22;exampleInputPassword1&#x22;&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;mb-3 form-check&#x22;&#x3E;
                    &#x3C;input type=&#x22;checkbox&#x22;
                    class=&#x22;form-check-input&#x22;
                    id=&#x22;exampleCheck1&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label&#x22;
                    for=&#x22;exampleCheck1&#x22;&#x3E;Check me
                    out&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;fieldset
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;legend&#x3E;Radios
                    buttons&#x3C;/legend&#x3E; &#x3C;div
                    class=&#x22;form-check&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; name=&#x22;radios&#x22;
                    class=&#x22;form-check-input&#x22;
                    id=&#x22;exampleRadio1&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label&#x22;
                    for=&#x22;exampleRadio1&#x22;&#x3E;Default
                    radio&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3 form-check&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; name=&#x22;radios&#x22;
                    class=&#x22;form-check-input&#x22;
                    id=&#x22;exampleRadio2&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label&#x22;
                    for=&#x22;exampleRadio2&#x22;&#x3E;Another
                    radio&#x3C;/label&#x3E; &#x3C;/div&#x3E;
                    &#x3C;/fieldset&#x3E; &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-label&#x22;
                    for=&#x22;customFile&#x22;&#x3E;Upload&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;file&#x22;
                    class=&#x22;form-control&#x22;
                    id=&#x22;customFile&#x22;&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3 form-check form-switch&#x22;&#x3E;
                    &#x3C;input class=&#x22;form-check-input&#x22;
                    type=&#x22;checkbox&#x22;
                    id=&#x22;flexSwitchCheckChecked&#x22;
                    checked=&#x22;&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label&#x22;
                    for=&#x22;flexSwitchCheckChecked&#x22;&#x3E;Checked switch
                    checkbox input&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;label
                    for=&#x22;customRange3&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Example
                    range&#x3C;/label&#x3E; &#x3C;input type=&#x22;range&#x22;
                    class=&#x22;form-range&#x22; min=&#x22;0&#x22;
                    max=&#x22;5&#x22; step=&#x22;0.5&#x22;
                    id=&#x22;customRange3&#x22;&#x3E; &#x3C;/div&#x3E;
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn
                    btn-primary&#x22;&#x3E;Submit&#x3C;/button&#x3E;
                    &#x3C;/form&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Overview</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="disabled-forms">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-disabled-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-disabled-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-disabled-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <form>
                  <fieldset disabled="" aria-label="Disabled fieldset example">
                    <div class="mb-3">
                      <label for="disabledTextInput" class="form-label">
                        Disabled input
                      </label>
                      <input
                        type="text"
                        id="disabledTextInput"
                        class="form-control"
                        placeholder="Disabled input"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="disabledSelect" class="form-label">
                        Disabled select menu
                      </label>
                      <select id="disabledSelect" class="form-select">
                        <option>Disabled select</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="disabledFieldsetCheck"
                          disabled=""
                        />
                        <label
                          class="form-check-label"
                          for="disabledFieldsetCheck"
                        >
                          Can't check this
                        </label>
                      </div>
                    </div>
                    <fieldset class="mb-3">
                      <legend>Disabled radios buttons</legend>
                      <div class="form-check">
                        <input
                          type="radio"
                          name="radios"
                          class="form-check-input"
                          id="disabledRadio1"
                          disabled=""
                        />
                        <label class="form-check-label" for="disabledRadio1">
                          Disabled radio
                        </label>
                      </div>
                      <div class="mb-3 form-check">
                        <input
                          type="radio"
                          name="radios"
                          class="form-check-input"
                          id="disabledRadio2"
                          disabled=""
                        />
                        <label class="form-check-label" for="disabledRadio2">
                          Another radio
                        </label>
                      </div>
                    </fieldset>
                    <div class="mb-3">
                      <label class="form-label" for="disabledCustomFile">
                        Upload
                      </label>
                      <input
                        type="file"
                        class="form-control"
                        id="disabledCustomFile"
                        disabled=""
                      />
                    </div>
                    <div class="mb-3 form-check form-switch">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="disabledSwitchCheckChecked"
                        checked=""
                        disabled=""
                      />
                      <label
                        class="form-check-label"
                        for="disabledSwitchCheckChecked"
                      >
                        Disabled checked switch checkbox input
                      </label>
                    </div>
                    <div class="mb-3">
                      <label for="disabledRange" class="form-label">
                        Disabled range
                      </label>
                      <input
                        type="range"
                        class="form-range"
                        min="0"
                        max="5"
                        step="0.5"
                        id="disabledRange"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-disabled-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                    &#x3C;form&#x3E; &#x3C;fieldset disabled=&#x22;&#x22;
                    aria-label=&#x22;Disabled fieldset example&#x22;&#x3E;
                    &#x3C;div class=&#x22;mb-3&#x22;&#x3E; &#x3C;label
                    for=&#x22;disabledTextInput&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Disabled
                    input&#x3C;/label&#x3E; &#x3C;input type=&#x22;text&#x22;
                    id=&#x22;disabledTextInput&#x22;
                    class=&#x22;form-control&#x22; placeholder=&#x22;Disabled
                    input&#x22;&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;label
                    for=&#x22;disabledSelect&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Disabled select
                    menu&#x3C;/label&#x3E; &#x3C;select
                    id=&#x22;disabledSelect&#x22;
                    class=&#x22;form-select&#x22;&#x3E;
                    &#x3C;option&#x3E;Disabled select&#x3C;/option&#x3E;
                    &#x3C;/select&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-check&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22;
                    id=&#x22;disabledFieldsetCheck&#x22;
                    disabled=&#x22;&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label&#x22;
                    for=&#x22;disabledFieldsetCheck&#x22;&#x3E; Can&#x27;t check
                    this &#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;fieldset class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;legend&#x3E;Disabled radios buttons&#x3C;/legend&#x3E;
                    &#x3C;div class=&#x22;form-check&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; name=&#x22;radios&#x22;
                    class=&#x22;form-check-input&#x22;
                    id=&#x22;disabledRadio1&#x22; disabled=&#x22;&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label&#x22;
                    for=&#x22;disabledRadio1&#x22;&#x3E;Disabled
                    radio&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3 form-check&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; name=&#x22;radios&#x22;
                    class=&#x22;form-check-input&#x22;
                    id=&#x22;disabledRadio2&#x22; disabled=&#x22;&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label&#x22;
                    for=&#x22;disabledRadio2&#x22;&#x3E;Another
                    radio&#x3C;/label&#x3E; &#x3C;/div&#x3E;
                    &#x3C;/fieldset&#x3E; &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-label&#x22;
                    for=&#x22;disabledCustomFile&#x22;&#x3E;Upload&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;file&#x22;
                    class=&#x22;form-control&#x22;
                    id=&#x22;disabledCustomFile&#x22;
                    disabled=&#x22;&#x22;&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3 form-check form-switch&#x22;&#x3E;
                    &#x3C;input class=&#x22;form-check-input&#x22;
                    type=&#x22;checkbox&#x22;
                    id=&#x22;disabledSwitchCheckChecked&#x22;
                    checked=&#x22;&#x22; disabled=&#x22;&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label&#x22;
                    for=&#x22;disabledSwitchCheckChecked&#x22;&#x3E;Disabled
                    checked switch checkbox input&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;label for=&#x22;disabledRange&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Disabled
                    range&#x3C;/label&#x3E; &#x3C;input type=&#x22;range&#x22;
                    class=&#x22;form-range&#x22; min=&#x22;0&#x22;
                    max=&#x22;5&#x22; step=&#x22;0.5&#x22;
                    id=&#x22;disabledRange&#x22;&#x3E; &#x3C;/div&#x3E;
                    &#x3C;button type=&#x22;submit&#x22; class=&#x22;btn
                    btn-primary&#x22;&#x3E;Submit&#x3C;/button&#x3E;
                    &#x3C;/fieldset&#x3E; &#x3C;/form&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Disabled Forms</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="sizing">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-sizing-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-sizing-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-sizing-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <div class="mb-3">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    placeholder=".form-control-lg"
                    aria-label=".form-control-lg example"
                  />
                </div>
                <div class="mb-3">
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option selected="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    type="file"
                    class="form-control form-control-lg"
                    aria-label="Large file input example"
                  />
                </div>
              </div>
              <div class="bd-example">
                <div class="mb-3">
                  <input
                    class="form-control form-control-sm"
                    type="text"
                    placeholder=".form-control-sm"
                    aria-label=".form-control-sm example"
                  />
                </div>
                <div class="mb-3">
                  <select
                    class="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                  >
                    <option selected="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="mb-3">
                  <input
                    type="file"
                    class="form-control form-control-sm"
                    aria-label="Small file input example"
                  />
                </div>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-sizing-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-control form-control-lg&#x22;
                    type=&#x22;text&#x22;
                    placeholder=&#x22;.form-control-lg&#x22;
                    aria-label=&#x22;.form-control-lg example&#x22;&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;select class=&#x22;form-select form-select-lg
                    mb-3&#x22; aria-label=&#x22;.form-select-lg
                    example&#x22;&#x3E; &#x3C;option
                    selected=&#x22;&#x22;&#x3E;Open this select
                    menu&#x3C;/option&#x3E; &#x3C;option
                    value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E; &#x3C;option
                    value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E; &#x3C;option
                    value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
                    &#x3C;/select&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;file&#x22; class=&#x22;form-control
                    form-control-lg&#x22; aria-label=&#x22;Large file input
                    example&#x22;&#x3E; &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-control form-control-sm&#x22;
                    type=&#x22;text&#x22;
                    placeholder=&#x22;.form-control-sm&#x22;
                    aria-label=&#x22;.form-control-sm example&#x22;&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;mb-3&#x22;&#x3E;
                    &#x3C;select class=&#x22;form-select form-select-sm&#x22;
                    aria-label=&#x22;.form-select-sm example&#x22;&#x3E;
                    &#x3C;option selected=&#x22;&#x22;&#x3E;Open this select
                    menu&#x3C;/option&#x3E; &#x3C;option
                    value=&#x22;1&#x22;&#x3E;One&#x3C;/option&#x3E; &#x3C;option
                    value=&#x22;2&#x22;&#x3E;Two&#x3C;/option&#x3E; &#x3C;option
                    value=&#x22;3&#x22;&#x3E;Three&#x3C;/option&#x3E;
                    &#x3C;/select&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;file&#x22; class=&#x22;form-control
                    form-control-sm&#x22; aria-label=&#x22;Small file input
                    example&#x22;&#x3E; &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Sizing</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="input-group">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-inputgroup-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-inputgroup-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-inputgroup-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text" id="basic-addon2">
                    @example.com
                  </span>
                </div>
                <label for="basic-url" class="form-label">
                  Your vanity URL
                </label>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon3">
                    https://example.com/users/
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="basic-url"
                    aria-describedby="basic-addon3"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text">$</span>
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                  />
                  <span class="input-group-text">.00</span>
                </div>
                <div class="input-group">
                  <span class="input-group-text">With textarea</span>
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-inputgroup-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;input-group mb-3&#x22;&#x3E; &#x3C;span
                    class=&#x22;input-group-text&#x22;
                    id=&#x22;basic-addon1&#x22;&#x3E;@&#x3C;/span&#x3E;
                    &#x3C;input type=&#x22;text&#x22;
                    class=&#x22;form-control&#x22;
                    placeholder=&#x22;Username&#x22;
                    aria-label=&#x22;Username&#x22;
                    aria-describedby=&#x22;basic-addon1&#x22;&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;input-group
                    mb-3&#x22;&#x3E; &#x3C;input type=&#x22;text&#x22;
                    class=&#x22;form-control&#x22;
                    placeholder=&#x22;Recipient&#x27;s username&#x22;
                    aria-label=&#x22;Recipient&#x27;s username&#x22;
                    aria-describedby=&#x22;basic-addon2&#x22;&#x3E; &#x3C;span
                    class=&#x22;input-group-text&#x22;
                    id=&#x22;basic-addon2&#x22;&#x3E;@example.com&#x3C;/span&#x3E;
                    &#x3C;/div&#x3E; &#x3C;label for=&#x22;basic-url&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Your vanity
                    URL&#x3C;/label&#x3E; &#x3C;div class=&#x22;input-group
                    mb-3&#x22;&#x3E; &#x3C;span
                    class=&#x22;input-group-text&#x22;
                    id=&#x22;basic-addon3&#x22;&#x3E;https://example.com/users/&#x3C;/span&#x3E;
                    &#x3C;input type=&#x22;text&#x22;
                    class=&#x22;form-control&#x22; id=&#x22;basic-url&#x22;
                    aria-describedby=&#x22;basic-addon3&#x22;&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;input-group
                    mb-3&#x22;&#x3E; &#x3C;span
                    class=&#x22;input-group-text&#x22;&#x3E;$&#x3C;/span&#x3E;
                    &#x3C;input type=&#x22;text&#x22;
                    class=&#x22;form-control&#x22; aria-label=&#x22;Amount (to
                    the nearest dollar)&#x22;&#x3E; &#x3C;span
                    class=&#x22;input-group-text&#x22;&#x3E;.00&#x3C;/span&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;input-group&#x22;&#x3E; &#x3C;span
                    class=&#x22;input-group-text&#x22;&#x3E;With
                    textarea&#x3C;/span&#x3E; &#x3C;textarea
                    class=&#x22;form-control&#x22; aria-label=&#x22;With
                    textarea&#x22;&#x3E;&#x3C;/textarea&#x3E; &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Input Group</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="floating-labels">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-floating-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-floating-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-floating-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <form>
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="password"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div class="form-floating form-group mb-3">
                    <input
                      type="email"
                      class="form-control"
                      disabled
                      id="floatingInput"
                      placeholder="Place Holder"
                    />
                    <label for="floatingInput">Regular</label>
                  </div>
                  <div class="form-floating form-group mb-3">
                    <input
                      type="email"
                      class="form-control is-valid"
                      id="floatingInput"
                      placeholder="Place Holder"
                    />
                    <label for="floatingInput">Regular</label>
                  </div>
                  <div class="form-floating form-group">
                    <input
                      type="email"
                      class="form-control is-invalid"
                      id="floatingInput"
                      placeholder="Place Holder"
                    />
                    <label for="floatingInput">Regular</label>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-floating-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    {" "}
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                    &#x3C;form&#x3E; &#x3C;div class=&#x22;form-floating
                    mb-3&#x22;&#x3E; &#x3C;input type=&#x22;email&#x22;
                    class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;name@example.com&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Email
                    address&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;form-floating mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;password&#x22; class=&#x22;form-control&#x22;
                    id=&#x22;floatingPassword&#x22;
                    placeholder=&#x22;Password&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingPassword&#x22;&#x3E;Password&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    form-group mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;email&#x22; class=&#x22;form-control&#x22;
                    disabled id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    form-group mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;email&#x22; class=&#x22;form-control
                    is-valid&#x22; id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    form-group&#x22;&#x3E; &#x3C;input type=&#x22;email&#x22;
                    class=&#x22;form-control is-invalid&#x22;
                    id=&#x22;floatingInput&#x22; placeholder=&#x22;Place
                    Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;/form&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Floating Labels</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="a-floating-labels">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-alternetfloat-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-alternetfloat-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-alternetfloat-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <div class="form-floating custom-form-floating custom-form-floating-sm form-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Place Holder"
                  />
                  <label for="floatingInput">Small</label>
                </div>
                <div class="form-floating custom-form-floating form-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Place Holder"
                  />
                  <label for="floatingInput">Regular</label>
                </div>
                <div class="form-floating custom-form-floating custom-form-floating-lg form-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Place Holder"
                  />
                  <label for="floatingInput">Large</label>
                </div>
                <div class="form-floating custom-form-floating form-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    disabled
                    id="floatingInput"
                    placeholder="Place Holder"
                  />
                  <label for="floatingInput">Regular</label>
                </div>
                <div class="form-floating custom-form-floating form-group mb-3">
                  <input
                    type="email"
                    class="form-control is-valid"
                    id="floatingInput"
                    placeholder="Place Holder"
                  />
                  <label for="floatingInput">Regular</label>
                </div>
                <div class="form-floating custom-form-floating form-group mb-3">
                  <input
                    type="email"
                    class="form-control is-invalid"
                    id="floatingInput"
                    placeholder="Place Holder"
                  />
                  <label for="floatingInput">Regular</label>
                </div>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-alternetfloat-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-floating custom-form-floating
                    custom-form-floating-sm form-group mb-3&#x22;&#x3E;
                    &#x3C;input type=&#x22;email&#x22;
                    class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Small&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    custom-form-floating form-group mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;email&#x22; class=&#x22;form-control&#x22;
                    id=&#x22;floatingInput&#x22; placeholder=&#x22;Place
                    Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    custom-form-floating custom-form-floating-lg form-group
                    mb-3&#x22;&#x3E; &#x3C;input type=&#x22;email&#x22;
                    class=&#x22;form-control&#x22; id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Large&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    custom-form-floating form-group mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;email&#x22; class=&#x22;form-control&#x22;
                    disabled id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    custom-form-floating form-group mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;email&#x22; class=&#x22;form-control
                    is-valid&#x22; id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-floating
                    custom-form-floating form-group mb-3&#x22;&#x3E; &#x3C;input
                    type=&#x22;email&#x22; class=&#x22;form-control
                    is-invalid&#x22; id=&#x22;floatingInput&#x22;
                    placeholder=&#x22;Place Holder&#x22;&#x3E; &#x3C;label
                    for=&#x22;floatingInput&#x22;&#x3E;Regular&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
          <div class="card">
            <div class="card-body">
              <h5>Alertnate Float Labels</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="toggle-btn">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-toggle-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-toggle-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-toggle-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <div class="form-check form-check-inline">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck5"
                  />
                  <label class="form-check-label pl-2" for="customCheck5">
                    Checkbox
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck6"
                    Checked=""
                  />
                  <label class="form-check-label pl-2" for="customCheck6">
                    Checked
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck7"
                    disabled=""
                  />
                  <label class="form-check-label pl-2" for="customCheck7">
                    Disabled
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="customCheck8"
                    checked=""
                    disabled=""
                  />
                  <label class="form-check-label pl-2" for="customCheck8">
                    Disabled Checked
                  </label>
                </div>
              </div>
              <div class="bd-example">
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio1"
                    checked=""
                  />
                  <label for="radio1" class="form-check-label pl-2">
                    Active
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio"
                    id="radio2"
                  />
                  <label for="radio2" class="form-check-label pl-2">
                    Inactive
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio1"
                    id="radio3"
                    disabled=""
                    checked=""
                  />
                  <label for="radio3" class="form-check-label pl-2">
                    Active - Disabled
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    type="radio"
                    class="form-check-input"
                    name="bsradio1"
                    id="radio4"
                    disabled=""
                  />
                  <label for="radio3" class="form-check-label pl-2">
                    Inactive - Disabled
                  </label>
                </div>
              </div>
              <div class="bd-example">
                <div class="form-check form-switch form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="switch1"
                  />
                  <label class="form-check-label pl-2" for="switch1">
                    Off Switch
                  </label>
                </div>
                <div class="form-check form-switch form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="switch2"
                    checked
                  />
                  <label class="form-check-label pl-2" for="switch2">
                    On Switch
                  </label>
                </div>
                <div class="form-check form-switch form-check-inline">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="switch3"
                    disabled
                  />
                  <label class="form-check-label pl-2" for="switch3">
                    Disabled Switch
                  </label>
                </div>
                <div class="form-check form-switch form-check-inline">
                  <input
                    class="form-check-input form-check-inline"
                    type="checkbox"
                    id="switch4"
                    checked
                    disabled
                  />
                  <label class="form-check-label pl-2" for="switch4">
                    {" "}
                    Switch
                  </label>
                </div>
              </div>
              <div class="bd-example">
                <div class="form-group">
                  <label for="customRange1" class="form-label">
                    Example range
                  </label>
                  <input
                    type="range"
                    class="form-range w-100"
                    id="customRange1"
                  />
                </div>
                <div class="form-group">
                  <div class="slider"></div>
                </div>
                <div class="form-group">
                  <div class="slider slider-secondary"></div>
                </div>
                <div class="form-group">
                  <div class="slider slider-success"></div>
                </div>
                <div class="form-group">
                  <div class="slider slider-danger"></div>
                </div>
                <div class="form-group">
                  <div class="slider slider-warning"></div>
                </div>
                <div class="form-group">
                  <div class="slider slider-dark"></div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-toggle-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    {" "}
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-check form-check-inline&#x22;&#x3E;
                    &#x3C;input type=&#x22;checkbox&#x22;
                    class=&#x22;form-check-input&#x22;
                    id=&#x22;customCheck5&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;customCheck5&#x22;&#x3E;Checkbox&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-check
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22;
                    id=&#x22;customCheck6&#x22; Checked=&#x22;&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;customCheck6&#x22;&#x3E;Checked&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-check
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22;
                    id=&#x22;customCheck7&#x22; disabled=&#x22;&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;customCheck7&#x22;&#x3E;Disabled&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-check
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    type=&#x22;checkbox&#x22; class=&#x22;form-check-input&#x22;
                    id=&#x22;customCheck8&#x22; checked=&#x22;&#x22;
                    disabled=&#x22;&#x22;&#x3E; &#x3C;label
                    class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;customCheck8&#x22;&#x3E;Disabled
                    Checked&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-check form-check-inline&#x22;&#x3E;
                    &#x3C;input type=&#x22;radio&#x22;
                    class=&#x22;form-check-input&#x22; name=&#x22;bsradio&#x22;
                    id=&#x22;radio1&#x22; checked=&#x22;&#x22;&#x3E; &#x3C;label
                    for=&#x22;radio1&#x22; class=&#x22;form-check-label
                    pl-2&#x22;&#x3E;Active&#x3C;/label&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;form-check
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22;
                    name=&#x22;bsradio&#x22; id=&#x22;radio2&#x22;&#x3E;
                    &#x3C;label for=&#x22;radio2&#x22;
                    class=&#x22;form-check-label
                    pl-2&#x22;&#x3E;Inactive&#x3C;/label&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;form-check
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22;
                    name=&#x22;bsradio1&#x22; id=&#x22;radio3&#x22;
                    disabled=&#x22;&#x22; checked=&#x22;&#x22;&#x3E; &#x3C;label
                    for=&#x22;radio3&#x22; class=&#x22;form-check-label
                    pl-2&#x22;&#x3E;Active - Disabled&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-check
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    type=&#x22;radio&#x22; class=&#x22;form-check-input&#x22;
                    name=&#x22;bsradio1&#x22; id=&#x22;radio4&#x22;
                    disabled=&#x22;&#x22;&#x3E; &#x3C;label
                    for=&#x22;radio3&#x22; class=&#x22;form-check-label
                    pl-2&#x22;&#x3E;Inactive - Disabled&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-check form-switch
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22;
                    id=&#x22;switch1&#x22; /&#x3E; &#x3C;label
                    class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;switch1&#x22;&#x3E;Off Switch&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-check
                    form-switch form-check-inline&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22;
                    id=&#x22;switch2&#x22; checked /&#x3E; &#x3C;label
                    class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;switch2&#x22;&#x3E;On Switch&#x3C;/label&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;form-check
                    form-switch form-check-inline&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-check-input&#x22; type=&#x22;checkbox&#x22;
                    id=&#x22;switch3&#x22; disabled /&#x3E; &#x3C;label
                    class=&#x22;form-check-label pl-2&#x22;
                    for=&#x22;switch3&#x22;&#x3E;Disabled
                    Switch&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;form-check form-switch
                    form-check-inline&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-check-input form-check-inline&#x22;
                    type=&#x22;checkbox&#x22; id=&#x22;switch4&#x22; checked
                    disabled /&#x3E; &#x3C;label class=&#x22;form-check-label
                    pl-2&#x22; for=&#x22;switch4&#x22;&#x3E;
                    Switch&#x3C;/label&#x3E; &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-group&#x22;&#x3E; &#x3C;label
                    for=&#x22;customRange1&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Example
                    range&#x3C;/label&#x3E; &#x3C;input type=&#x22;range&#x22;
                    class=&#x22;form-range w-100&#x22;
                    id=&#x22;customRange1&#x22;&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;form-group&#x22;&#x3E; &#x3C;div
                    class=&#x22;slider&#x22;&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;form-group&#x22;&#x3E; &#x3C;div
                    class=&#x22;slider
                    slider-secondary&#x22;&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;form-group&#x22;&#x3E; &#x3C;div
                    class=&#x22;slider
                    slider-success&#x22;&#x3E;&#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;form-group&#x22;&#x3E; &#x3C;div
                    class=&#x22;slider slider-danger&#x22;&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;form-group&#x22;&#x3E; &#x3C;div
                    class=&#x22;slider
                    slider-warning&#x22;&#x3E;&#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;form-group&#x22;&#x3E; &#x3C;div
                    class=&#x22;slider slider-dark&#x22;&#x3E;&#x3C;/div&#x3E;
                    &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Toggle Button</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="validation">
        <div class="card iq-document-card">
          <div class="d-flex justify-content-end">
            <ul
              class="nav nav-tabs nav-tunnel nav-slider"
              data-toggle="slider-tab"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-validation-prv"
                  type="button"
                  role="tab"
                  aria-controls="output"
                  aria-selected="true"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4541 11.3918C22.7819 11.7385 22.7819 12.2615 22.4541 12.6082C21.0124 14.1335 16.8768 18 12 18C7.12317 18 2.98759 14.1335 1.54586 12.6082C1.21811 12.2615 1.21811 11.7385 1.54586 11.3918C2.98759 9.86647 7.12317 6 12 6C16.8768 6 21.0124 9.86647 22.4541 11.3918Z"
                      stroke="currentColor"
                    />
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
                    <circle cx="13.5" cy="10.5" r="1.5" fill="currentColor" />
                  </svg>
                  Preview
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link d-flex align-items-center"
                  data-bs-toggle="tab"
                  data-bs-target="#content-validation-code"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 2.00004C4 1.44776 4.44771 1.00004 5 1.00004L13.5721 1C13.8454 1 14.1068 1.11184 14.2955 1.30953L19.7234 6.99588C19.9009 7.18191 20 7.42919 20 7.68636V22C20 22.5523 19.5523 23 19 23H5C4.44772 23 4 22.5523 4 22V2.00004Z"
                      stroke="currentColor"
                    />
                    <path
                      d="M4 2C4 1.44772 4.44772 1 5 1H13C13.5523 1 14 1.44772 14 2V6.28566C14 6.83794 14.4477 7.28566 15 7.28566H19C19.5523 7.28566 20 7.73338 20 8.28566V22C20 22.5522 19.5523 23 19 23H5C4.44772 23 4 22.5522 4 22V2Z"
                      stroke="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7 14.5945L8.99429 12.1334C9.12172 11.9761 9.34898 11.9549 9.50189 12.0859C9.6548 12.217 9.67546 12.4507 9.54804 12.6079L7.93828 14.5945L9.54804 16.581C9.67546 16.7383 9.6548 16.972 9.50189 17.103C9.34898 17.2341 9.12172 17.2128 8.99429 17.0556L7 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M7 14.5945L6.22306 13.9649L5.7129 14.5945L6.22306 15.2241L7 14.5945ZM8.99429 12.1334L9.77124 12.7629L9.77124 12.7629L8.99429 12.1334ZM9.50189 12.0859L8.85116 12.8452L8.85116 12.8452L9.50189 12.0859ZM9.54804 12.6079L10.325 13.2375L10.325 13.2375L9.54804 12.6079ZM7.93828 14.5945L7.16134 13.9649L6.65118 14.5945L7.16134 15.2241L7.93828 14.5945ZM9.54804 16.581L10.325 15.9515L10.325 15.9515L9.54804 16.581ZM9.50189 17.103L8.85116 16.3437L8.85116 16.3437L9.50189 17.103ZM8.99429 17.0556L8.21735 17.6852L8.21735 17.6852L8.99429 17.0556ZM10.1526 11.3266C9.5684 10.8259 8.69615 10.9129 8.21735 11.5038L9.77124 12.7629C9.54729 13.0393 9.12956 13.0838 8.85116 12.8452L10.1526 11.3266ZM10.325 13.2375C10.7905 12.663 10.7202 11.813 10.1526 11.3266L8.85116 12.8452C8.5894 12.6209 8.56045 12.2383 8.77109 11.9784L10.325 13.2375ZM8.71522 15.2241L10.325 13.2375L8.77109 11.9784L7.16134 13.9649L8.71522 15.2241ZM10.325 15.9515L8.71522 13.9649L7.16134 15.2241L8.77109 17.2106L10.325 15.9515ZM10.1526 17.8624C10.7202 17.3759 10.7905 16.5259 10.325 15.9515L8.77109 17.2106C8.56045 16.9507 8.5894 16.5681 8.85116 16.3437L10.1526 17.8624ZM8.21735 17.6852C8.69615 18.276 9.5684 18.363 10.1526 17.8624L8.85116 16.3437C9.12956 16.1052 9.5473 16.1497 9.77124 16.426L8.21735 17.6852ZM8.21735 11.5038L6.22306 13.9649L7.77694 15.2241L9.77124 12.7629L8.21735 11.5038ZM6.22306 15.2241L8.21735 17.6852L9.77124 16.426L7.77694 13.9649L6.22306 15.2241Z"
                      fill="currentColor"
                      mask="url(#path-3-inside-1)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.771 11.1638C13.9576 11.2542 14.0356 11.4769 13.9451 11.6611L10.9973 17.6664C10.9069 17.8506 10.6823 17.9267 10.4957 17.8363C10.3091 17.7458 10.2311 17.5232 10.3215 17.3389L13.2693 11.3336C13.3598 11.1494 13.5844 11.0733 13.771 11.1638Z"
                      fill="currentColor"
                    />
                    <mask fill="white">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 14.5945L15.0057 17.0556C14.8783 17.2128 14.651 17.2341 14.4981 17.103C14.3452 16.972 14.3245 16.7383 14.452 16.581L16.0617 14.5945L14.452 12.6079C14.3245 12.4507 14.3452 12.217 14.4981 12.0859C14.651 11.9549 14.8783 11.9761 15.0057 12.1334L17 14.5945Z"
                      />
                    </mask>
                    <path
                      d="M17 14.5945L17.7769 15.2241L18.2871 14.5945L17.7769 13.9649L17 14.5945ZM15.0057 17.0556L14.2288 16.426L14.2288 16.426L15.0057 17.0556ZM14.4981 17.103L15.1488 16.3437L15.1488 16.3437L14.4981 17.103ZM14.452 16.581L13.675 15.9515L13.675 15.9515L14.452 16.581ZM16.0617 14.5945L16.8387 15.2241L17.3488 14.5945L16.8387 13.9649L16.0617 14.5945ZM14.452 12.6079L13.675 13.2375L13.675 13.2375L14.452 12.6079ZM14.4981 12.0859L15.1488 12.8452L15.1488 12.8452L14.4981 12.0859ZM15.0057 12.1334L15.7826 11.5038L15.7826 11.5038L15.0057 12.1334ZM13.8474 17.8624C14.4316 18.363 15.3039 18.276 15.7826 17.6852L14.2288 16.426C14.4527 16.1497 14.8704 16.1052 15.1488 16.3437L13.8474 17.8624ZM13.675 15.9515C13.2095 16.5259 13.2798 17.3759 13.8474 17.8624L15.1488 16.3437C15.4106 16.5681 15.4396 16.9507 15.2289 17.2106L13.675 15.9515ZM15.2848 13.9649L13.675 15.9515L15.2289 17.2106L16.8387 15.2241L15.2848 13.9649ZM13.675 13.2375L15.2848 15.2241L16.8387 13.9649L15.2289 11.9784L13.675 13.2375ZM13.8474 11.3266C13.2798 11.813 13.2095 12.663 13.675 13.2375L15.2289 11.9784C15.4396 12.2383 15.4106 12.6209 15.1488 12.8452L13.8474 11.3266ZM15.7826 11.5038C15.3039 10.9129 14.4316 10.8259 13.8474 11.3266L15.1488 12.8452C14.8704 13.0838 14.4527 13.0393 14.2288 12.7629L15.7826 11.5038ZM15.7826 17.6852L17.7769 15.2241L16.2231 13.9649L14.2288 16.426L15.7826 17.6852ZM17.7769 13.9649L15.7826 11.5038L14.2288 12.7629L16.2231 15.2241L17.7769 13.9649Z"
                      fill="currentColor"
                      mask="url(#path-6-inside-2)"
                    />
                  </svg>
                  Code
                </button>
              </li>
            </ul>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane bd-heading-1 fade show active"
              id="content-validation-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <form class="row g-3">
                  <div class="col-md-4">
                    <label for="validationServer01" class="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer01"
                      value="Mark"
                      required=""
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationServer02" class="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      class="form-control is-valid"
                      id="validationServer02"
                      value="Otto"
                      required=""
                    />
                    <div class="valid-feedback">Looks good!</div>
                  </div>
                  <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">
                      Username
                    </label>
                    <div class="input-group has-validation">
                      <span class="input-group-text" id="inputGroupPrepend3">
                        @
                      </span>
                      <input
                        type="text"
                        class="form-control is-invalid"
                        id="validationServerUsername"
                        aria-describedby="inputGroupPrepend3"
                        required=""
                      />
                      <div class="invalid-feedback">
                        Please choose a username.
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <label for="validationServer03" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer03"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please provide a valid city.
                    </div>
                  </div>
                  <div class="col-md-3">
                    <label for="validationServer04" class="form-label">
                      State
                    </label>
                    <select
                      class="form-select is-invalid"
                      id="validationServer04"
                      required=""
                    >
                      <option selected="" disabled="" value="">
                        Choose...
                      </option>
                      <option>...</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid state.
                    </div>
                  </div>
                  <div class="col-md-3">
                    <label for="validationServer05" class="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      class="form-control is-invalid"
                      id="validationServer05"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please provide a valid zip.
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input is-invalid"
                        type="checkbox"
                        value=""
                        id="invalidCheck3"
                        required=""
                      />
                      <label class="form-check-label" for="invalidCheck3">
                        Agree to terms and conditions
                      </label>
                      <div class="invalid-feedback">
                        You must agree before submitting.
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary" type="submit">
                      Submit form
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-validation-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;form
                    class=&#x22;row g-3&#x22;&#x3E; &#x3C;div
                    class=&#x22;col-md-4&#x22;&#x3E; &#x3C;label
                    for=&#x22;validationServer01&#x22;
                    class=&#x22;form-label&#x22;&#x3E;First
                    name&#x3C;/label&#x3E; &#x3C;input type=&#x22;text&#x22;
                    class=&#x22;form-control is-valid&#x22;
                    id=&#x22;validationServer01&#x22; value=&#x22;Mark&#x22;
                    required=&#x22;&#x22;&#x3E; &#x3C;div
                    class=&#x22;valid-feedback&#x22;&#x3E; Looks good!
                    &#x3C;/div&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;col-md-4&#x22;&#x3E; &#x3C;label
                    for=&#x22;validationServer02&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Last
                    name&#x3C;/label&#x3E; &#x3C;input type=&#x22;text&#x22;
                    class=&#x22;form-control is-valid&#x22;
                    id=&#x22;validationServer02&#x22; value=&#x22;Otto&#x22;
                    required=&#x22;&#x22;&#x3E; &#x3C;div
                    class=&#x22;valid-feedback&#x22;&#x3E; Looks good!
                    &#x3C;/div&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;col-md-4&#x22;&#x3E; &#x3C;label
                    for=&#x22;validationServerUsername&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Username&#x3C;/label&#x3E;
                    &#x3C;div class=&#x22;input-group has-validation&#x22;&#x3E;
                    &#x3C;span class=&#x22;input-group-text&#x22;
                    id=&#x22;inputGroupPrepend3&#x22;&#x3E;@&#x3C;/span&#x3E;
                    &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control
                    is-invalid&#x22; id=&#x22;validationServerUsername&#x22;
                    aria-describedby=&#x22;inputGroupPrepend3&#x22;
                    required=&#x22;&#x22;&#x3E; &#x3C;div
                    class=&#x22;invalid-feedback&#x22;&#x3E; Please choose a
                    username. &#x3C;/div&#x3E; &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-6&#x22;&#x3E; &#x3C;label
                    for=&#x22;validationServer03&#x22;
                    class=&#x22;form-label&#x22;&#x3E;City&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control
                    is-invalid&#x22; id=&#x22;validationServer03&#x22;
                    required=&#x22;&#x22;&#x3E; &#x3C;div
                    class=&#x22;invalid-feedback&#x22;&#x3E; Please provide a
                    valid city. &#x3C;/div&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;col-md-3&#x22;&#x3E; &#x3C;label
                    for=&#x22;validationServer04&#x22;
                    class=&#x22;form-label&#x22;&#x3E;State&#x3C;/label&#x3E;
                    &#x3C;select class=&#x22;form-select is-invalid&#x22;
                    id=&#x22;validationServer04&#x22;
                    required=&#x22;&#x22;&#x3E; &#x3C;option
                    selected=&#x22;&#x22; disabled=&#x22;&#x22;
                    value=&#x22;&#x22;&#x3E;Choose...&#x3C;/option&#x3E;
                    &#x3C;option&#x3E;...&#x3C;/option&#x3E; &#x3C;/select&#x3E;
                    &#x3C;div class=&#x22;invalid-feedback&#x22;&#x3E; Please
                    select a valid state. &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;col-md-3&#x22;&#x3E; &#x3C;label
                    for=&#x22;validationServer05&#x22;
                    class=&#x22;form-label&#x22;&#x3E;Zip&#x3C;/label&#x3E;
                    &#x3C;input type=&#x22;text&#x22; class=&#x22;form-control
                    is-invalid&#x22; id=&#x22;validationServer05&#x22;
                    required=&#x22;&#x22;&#x3E; &#x3C;div
                    class=&#x22;invalid-feedback&#x22;&#x3E; Please provide a
                    valid zip. &#x3C;/div&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;col-12&#x22;&#x3E; &#x3C;div
                    class=&#x22;form-check&#x22;&#x3E; &#x3C;input
                    class=&#x22;form-check-input is-invalid&#x22;
                    type=&#x22;checkbox&#x22; value=&#x22;&#x22;
                    id=&#x22;invalidCheck3&#x22; required=&#x22;&#x22;&#x3E;
                    &#x3C;label class=&#x22;form-check-label&#x22;
                    for=&#x22;invalidCheck3&#x22;&#x3E; Agree to terms and
                    conditions &#x3C;/label&#x3E; &#x3C;div
                    class=&#x22;invalid-feedback&#x22;&#x3E; You must agree
                    before submitting. &#x3C;/div&#x3E; &#x3C;/div&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div class=&#x22;col-12&#x22;&#x3E;
                    &#x3C;button class=&#x22;btn btn-primary&#x22;
                    type=&#x22;submit&#x22;&#x3E;Submit form&#x3C;/button&#x3E;
                    &#x3C;/div&#x3E; &#x3C;/form&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Validation</h5>
              <div class="d-flex align-items-center mt-2">
                <a
                  class="d-flex"
                  href="https://templates.iqonic.design/nairobi/documentation/html/dist/main/"
                  target="_blank"
                >
                  <svg
                    width="20"
                    class="me-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89176 17.108 2.74976 12 2.74976C6.892 2.74976 2.75 6.89176 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M10.5576 15.4709L14.0436 11.9999L10.5576 8.52895"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Documentation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FormsSection;
