import React from "react";

/**
 * @author
 * @function Aside
 **/

const Aside = (props) => {
  return (
    <aside
      class="mobile-offcanvas bd-aside card iq-document-card sticky-xl-top text-muted align-self-start mb-5 mt-n5"
      id="left-side-bar"
    >
      <div class="offcanvas-header p-0">
        <button class="btn-close float-end"></button>
      </div>
      <h2 class="h6 pb-2 border-bottom">On this page</h2>
      <nav class="small" id="elements-section">
        <ul class="list-unstyled mb-0">
          <li class="mt-2">
            <button
              class="btn d-inline-flex align-items-center collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#components-collapse"
              aria-controls="components-collapse"
            >
              Components
            </button>
            <ul
              class="list-unstyled ps-3 collapse"
              id="components-collapse"
              href="#components"
            >
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#accordion"
                >
                  Accordion
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#alerts"
                >
                  Alerts
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#badge"
                >
                  Badge
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#breadcrumb"
                >
                  Breadcrumb
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#buttons"
                >
                  Buttons
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#button-group"
                >
                  Button Group
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#calendar"
                >
                  Calendar
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#card"
                >
                  Card
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#carousel"
                >
                  Carousel
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#dropdowns"
                >
                  Dropdowns
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#list-group"
                >
                  List Group
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#modal"
                >
                  Modal
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#navs"
                >
                  Navs
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#navbar"
                >
                  Navbar
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#off-canvas"
                >
                  Off Canvas
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#pagination"
                >
                  Pagination
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#popovers"
                >
                  Popovers
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#progress"
                >
                  Progress
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#scrollspy"
                >
                  Scrollspy
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#spinners"
                >
                  Spinners
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#toasts"
                >
                  Toasts
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#tooltips"
                >
                  Tooltips
                </a>
              </li>
            </ul>
          </li>
          <li class="my-2">
            <button
              class="btn d-inline-flex align-items-center collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#forms-collapse"
              aria-controls="forms-collapse"
            >
              Forms
            </button>
            <ul
              class="list-unstyled ps-3 collapse"
              id="forms-collapse"
              href="#forms"
            >
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#overview"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#disabled-forms"
                >
                  Disabled Forms
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#sizing"
                >
                  Sizing
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#input-group"
                >
                  Input Group
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#floating-labels"
                >
                  Floating Labels
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#a-floating-labels"
                >
                  Alertnate Float Labels
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#toggle-btn"
                >
                  Toggle Button
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#validation"
                >
                  Validation
                </a>
              </li>
            </ul>
          </li>
          <li class="mb-2">
            <button
              class="btn d-inline-flex align-items-center collapsed"
              data-bs-toggle="collapse"
              aria-expanded="false"
              data-bs-target="#contents-collapse"
              aria-controls="contents-collapse"
            >
              Contents
            </button>
            <ul
              class="list-unstyled ps-3 collapse"
              id="contents-collapse"
              href="#content"
            >
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#typography"
                >
                  Typography
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#images"
                >
                  Images
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#tables"
                >
                  Tables
                </a>
              </li>
              <li>
                <a
                  class="nav-link d-inline-flex align-items-center rounded"
                  href="#figures"
                >
                  Figures
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
