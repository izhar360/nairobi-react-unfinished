import React from "react";

/**
 * @author
 * @function ContentsSection
 **/

const ContentsSection = (props) => {
  return (
    <section id="content">
      <div class="iq-side-content sticky-xl-top">
        <div class="card">
          <div class="card-body">
            <h4 class="fw-bold">Contents</h4>
          </div>
        </div>
      </div>
      <article id="typography">
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
                  data-bs-target="#content-typo-op"
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
                  data-bs-target="#content-typo-code"
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
              id="content-typo-op"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <p class="display-1">Display 1</p>
                <p class="display-2">Display 2</p>
                <p class="display-3">Display 3</p>
                <p class="display-4">Display 4</p>
                <p class="display-5">Display 5</p>
                <p class="display-6">Display 6</p>
              </div>
              <div class="bd-example">
                <p class="h1">Heading 1</p>
                <p class="h2">Heading 2</p>
                <p class="h3">Heading 3</p>
                <p class="h4">Heading 4</p>
                <p class="h5">Heading 5</p>
                <p class="h6">Heading 6</p>
              </div>
              <div class="bd-example">
                <p class="lead">
                  This is a lead paragraph. It stands out from regular
                  paragraphs.
                </p>
              </div>
              <div class="bd-example">
                <p>
                  You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                  <del>
                    This line of text is meant to be treated as deleted text.
                  </del>
                </p>
                <p>
                  <s>
                    This line of text is meant to be treated as no longer
                    accurate.
                  </s>
                </p>
                <p>
                  <ins>
                    This line of text is meant to be treated as an addition to
                    the document.
                  </ins>
                </p>
                <p>
                  <u>This line of text will render as underlined.</u>
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>
              <div class="bd-example">
                <blockquote class="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer class="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>
              <div class="bd-example">
                <ul class="list-unstyled">
                  <li>This is a list.</li>
                  <li>It appears completely unstyled.</li>
                  <li>Structurally, it's still a list.</li>
                  <li>
                    However, this style only applies to immediate child
                    elements.
                  </li>
                  <li>
                    Nested lists:
                    <ul>
                      <li>are unaffected by this style</li>
                      <li>will still show a bullet</li>
                      <li>and have appropriate left margin</li>
                    </ul>
                  </li>
                  <li>This may still come in handy in some situations.</li>
                </ul>
              </div>
              <div class="bd-example">
                <ul class="list-inline">
                  <li class="list-inline-item">This is a list item.</li>
                  <li class="list-inline-item">And another one.</li>
                  <li class="list-inline-item">
                    But they're displayed inline.
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-typo-code"
              role="tabpanel"
              aria-labelledby="typo-code"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;p
                    class=&#x22;display-1&#x22;&#x3E;Display 1&#x3C;/p&#x3E;
                    &#x3C;p class=&#x22;display-2&#x22;&#x3E;Display
                    2&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;display-3&#x22;&#x3E;Display 3&#x3C;/p&#x3E;
                    &#x3C;p class=&#x22;display-4&#x22;&#x3E;Display
                    4&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;display-5&#x22;&#x3E;Display 5&#x3C;/p&#x3E;
                    &#x3C;p class=&#x22;display-6&#x22;&#x3E;Display
                    6&#x3C;/p&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;bd-example&#x22;&#x3E; &#x3C;p
                    class=&#x22;h1&#x22;&#x3E;Heading 1&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;h2&#x22;&#x3E;Heading 2&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;h3&#x22;&#x3E;Heading 3&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;h4&#x22;&#x3E;Heading 4&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;h5&#x22;&#x3E;Heading 5&#x3C;/p&#x3E; &#x3C;p
                    class=&#x22;h6&#x22;&#x3E;Heading 6&#x3C;/p&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;bd-example&#x22;&#x3E; &#x3C;p
                    class=&#x22;lead&#x22;&#x3E; This is a lead paragraph. It
                    stands out from regular paragraphs. &#x3C;/p&#x3E;
                    &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;bd-example&#x22;&#x3E; &#x3C;p&#x3E;You can use
                    the mark tag to &#x3C;mark&#x3E;highlight&#x3C;/mark&#x3E;
                    text.&#x3C;/p&#x3E; &#x3C;p&#x3E;&#x3C;del&#x3E;This line of
                    text is meant to be treated as deleted
                    text.&#x3C;/del&#x3E;&#x3C;/p&#x3E;
                    &#x3C;p&#x3E;&#x3C;s&#x3E;This line of text is meant to be
                    treated as no longer accurate.&#x3C;/s&#x3E;&#x3C;/p&#x3E;
                    &#x3C;p&#x3E;&#x3C;ins&#x3E;This line of text is meant to be
                    treated as an addition to the
                    document.&#x3C;/ins&#x3E;&#x3C;/p&#x3E;
                    &#x3C;p&#x3E;&#x3C;u&#x3E;This line of text will render as
                    underlined.&#x3C;/u&#x3E;&#x3C;/p&#x3E;
                    &#x3C;p&#x3E;&#x3C;small&#x3E;This line of text is meant to
                    be treated as fine print.&#x3C;/small&#x3E;&#x3C;/p&#x3E;
                    &#x3C;p&#x3E;&#x3C;strong&#x3E;This line rendered as bold
                    text.&#x3C;/strong&#x3E;&#x3C;/p&#x3E;
                    &#x3C;p&#x3E;&#x3C;em&#x3E;This line rendered as italicized
                    text.&#x3C;/em&#x3E;&#x3C;/p&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E;
                    &#x3C;blockquote class=&#x22;blockquote&#x22;&#x3E;
                    &#x3C;p&#x3E;A well-known quote, contained in a blockquote
                    element.&#x3C;/p&#x3E; &#x3C;footer
                    class=&#x22;blockquote-footer&#x22;&#x3E;Someone famous in
                    &#x3C;cite title=&#x22;Source Title&#x22;&#x3E;Source
                    Title&#x3C;/cite&#x3E;&#x3C;/footer&#x3E;
                    &#x3C;/blockquote&#x3E; &#x3C;/div&#x3E; &#x3C;div
                    class=&#x22;bd-example&#x22;&#x3E; &#x3C;ul
                    class=&#x22;list-unstyled&#x22;&#x3E; &#x3C;li&#x3E;This is
                    a list.&#x3C;/li&#x3E; &#x3C;li&#x3E;It appears completely
                    unstyled.&#x3C;/li&#x3E; &#x3C;li&#x3E;Structurally,
                    it&#x27;s still a list.&#x3C;/li&#x3E;
                    &#x3C;li&#x3E;However, this style only applies to immediate
                    child elements.&#x3C;/li&#x3E; &#x3C;li&#x3E;Nested lists:
                    &#x3C;ul&#x3E; &#x3C;li&#x3E;are unaffected by this
                    style&#x3C;/li&#x3E; &#x3C;li&#x3E;will still show a
                    bullet&#x3C;/li&#x3E; &#x3C;li&#x3E;and have appropriate
                    left margin&#x3C;/li&#x3E; &#x3C;/ul&#x3E; &#x3C;/li&#x3E;
                    &#x3C;li&#x3E;This may still come in handy in some
                    situations.&#x3C;/li&#x3E; &#x3C;/ul&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;ul
                    class=&#x22;list-inline&#x22;&#x3E; &#x3C;li
                    class=&#x22;list-inline-item&#x22;&#x3E;This is a list
                    item.&#x3C;/li&#x3E; &#x3C;li
                    class=&#x22;list-inline-item&#x22;&#x3E;And another
                    one.&#x3C;/li&#x3E; &#x3C;li
                    class=&#x22;list-inline-item&#x22;&#x3E;But they&#x27;re
                    displayed inline.&#x3C;/li&#x3E; &#x3C;/ul&#x3E;
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
              <h5>Typography</h5>
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
      <article id="images">
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
                  data-bs-target="#content-image-prv"
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
                  data-bs-target="#content-image-code"
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
              id="content-image-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example mb-4">
                <svg
                  class="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                  width="100%"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Responsive image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="40%" y="50%" fill="#dee2e6" dy=".3em">
                    Responsive image
                  </text>
                </svg>
              </div>
              <div class="bd-example">
                <svg
                  class="bd-placeholder-img img-thumbnail"
                  width="200"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>
                    A generic square placeholder image with a white border
                    around it, making it resemble a photograph taken with an old
                    instant camera
                  </title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="30%" y="50%" fill="#dee2e6" dy=".3em">
                    200x200
                  </text>
                </svg>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-image-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;svg
                    class=&#x22;bd-placeholder-img bd-placeholder-img-lg
                    img-fluid&#x22; width=&#x22;100%&#x22;
                    height=&#x22;250&#x22;
                    xmlns=&#x22;http://www.w3.org/2000/svg&#x22;
                    role=&#x22;img&#x22; aria-label=&#x22;Placeholder:
                    Responsive image&#x22; preserveAspectRatio=&#x22;xMidYMid
                    slice&#x22;
                    focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect
                    width=&#x22;100%&#x22; height=&#x22;100%&#x22;
                    fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text
                    x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22;
                    dy=&#x22;.3em&#x22;&#x3E;Responsive
                    image&#x3C;/text&#x3E;&#x3C;/svg&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;svg
                    class=&#x22;bd-placeholder-img img-thumbnail&#x22;
                    width=&#x22;200&#x22; height=&#x22;200&#x22;
                    xmlns=&#x22;http://www.w3.org/2000/svg&#x22;
                    role=&#x22;img&#x22; aria-label=&#x22;A generic square
                    placeholder image with a white border around it, making it
                    resemble a photograph taken with an old instant camera:
                    200x200&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22;
                    focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;A generic
                    square placeholder image with a white border around it,
                    making it resemble a photograph taken with an old instant
                    camera&#x3C;/title&#x3E;&#x3C;rect width=&#x22;100%&#x22;
                    height=&#x22;100%&#x22;
                    fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text
                    x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22;
                    dy=&#x22;.3em&#x22;&#x3E;200x200&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
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
              <h5>Images</h5>
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
      <article id="tables">
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
                  data-bs-target="#content-table-prv"
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
                  data-bs-target="#content-table-code"
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
              id="content-table-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example table-responsive pb-4">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bd-example table-responsive pb-4">
                <table class="table table-dark table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bd-example table-responsive pb-4">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Class</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Default</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>

                    <tr class="table-primary">
                      <th scope="row">Primary</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-secondary">
                      <th scope="row">Secondary</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-success">
                      <th scope="row">Success</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-danger">
                      <th scope="row">Danger</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-warning">
                      <th scope="row">Warning</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-info">
                      <th scope="row">Info</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-light">
                      <th scope="row">Light</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr class="table-dark">
                      <th scope="row">Dark</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="bd-example table-responsive">
                <table class="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colspan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-table-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example
                    table-responsive&#x22;&#x3E; &#x3C;table class=&#x22;table
                    table-striped&#x22;&#x3E; &#x3C;thead&#x3E; &#x3C;tr&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;#&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;First&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Last&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Handle&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E; &#x3C;/thead&#x3E; &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;1&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Mark&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Otto&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@mdo&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;2&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Jacob&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Thornton&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@fat&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;3&#x3C;/th&#x3E; &#x3C;td
                    colspan=&#x22;2&#x22;&#x3E;Larry the Bird&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@twitter&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;/tbody&#x3E; &#x3C;/table&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example
                    table-responsive&#x22;&#x3E; &#x3C;table class=&#x22;table
                    table-dark table-borderless&#x22;&#x3E; &#x3C;thead&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;#&#x3C;/th&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;First&#x3C;/th&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;Last&#x3C;/th&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;Handle&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E; &#x3C;/thead&#x3E; &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;1&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Mark&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Otto&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@mdo&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;2&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Jacob&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Thornton&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@fat&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;3&#x3C;/th&#x3E; &#x3C;td
                    colspan=&#x22;2&#x22;&#x3E;Larry the Bird&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@twitter&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;/tbody&#x3E; &#x3C;/table&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example
                    table-responsive&#x22;&#x3E; &#x3C;table class=&#x22;table
                    table-hover&#x22;&#x3E; &#x3C;thead&#x3E; &#x3C;tr&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Class&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Heading&#x3C;/th&#x3E;
                    &#x3C;th scope=&#x22;col&#x22;&#x3E;Heading&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E; &#x3C;/thead&#x3E; &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Default&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-primary&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Primary&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-secondary&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Secondary&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-success&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Success&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-danger&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Danger&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-warning&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Warning&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-info&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Info&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-light&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Light&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E; &#x3C;tr
                    class=&#x22;table-dark&#x22;&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;Dark&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Cell&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;/tbody&#x3E; &#x3C;/table&#x3E; &#x3C;/div&#x3E;
                    &#x3C;div class=&#x22;bd-example
                    table-responsive&#x22;&#x3E; &#x3C;table class=&#x22;table
                    table-sm table-bordered&#x22;&#x3E; &#x3C;thead&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;#&#x3C;/th&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;First&#x3C;/th&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;Last&#x3C;/th&#x3E; &#x3C;th
                    scope=&#x22;col&#x22;&#x3E;Handle&#x3C;/th&#x3E;
                    &#x3C;/tr&#x3E; &#x3C;/thead&#x3E; &#x3C;tbody&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;1&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Mark&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Otto&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@mdo&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;2&#x3C;/th&#x3E;
                    &#x3C;td&#x3E;Jacob&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;Thornton&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@fat&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;tr&#x3E; &#x3C;th
                    scope=&#x22;row&#x22;&#x3E;3&#x3C;/th&#x3E; &#x3C;td
                    colspan=&#x22;2&#x22;&#x3E;Larry the Bird&#x3C;/td&#x3E;
                    &#x3C;td&#x3E;@twitter&#x3C;/td&#x3E; &#x3C;/tr&#x3E;
                    &#x3C;/tbody&#x3E; &#x3C;/table&#x3E;&#x3C; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Tables</h5>
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
      <article id="figures">
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
                  data-bs-target="#content-figure-prv"
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
                  data-bs-target="#content-figure-code"
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
              id="content-figure-prv"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="bd-example">
                <figure class="figure">
                  <svg
                    class="bd-placeholder-img figure-img img-fluid rounded"
                    width="400"
                    height="300"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 400x300"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="40%" y="50%" fill="#dee2e6" dy=".3em">
                      400x300
                    </text>
                  </svg>

                  <figcaption class="figure-caption">
                    A caption for the above image.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div
              class="tab-pane bd-heading-1 fade show"
              id="content-figure-code"
              role="tabpanel"
              aria-labelledby="typo-output"
            >
              <div class="section-block">
                <pre>
                  <code class="language-markup">
                    &#x3C;div class=&#x22;bd-example&#x22;&#x3E; &#x3C;figure
                    class=&#x22;figure&#x22;&#x3E; &#x3C;svg
                    class=&#x22;bd-placeholder-img figure-img img-fluid
                    rounded&#x22; width=&#x22;400&#x22; height=&#x22;300&#x22;
                    xmlns=&#x22;http://www.w3.org/2000/svg&#x22;
                    role=&#x22;img&#x22; aria-label=&#x22;Placeholder:
                    400x300&#x22; preserveAspectRatio=&#x22;xMidYMid slice&#x22;
                    focusable=&#x22;false&#x22;&#x3E;&#x3C;title&#x3E;Placeholder&#x3C;/title&#x3E;&#x3C;rect
                    width=&#x22;100%&#x22; height=&#x22;100%&#x22;
                    fill=&#x22;#868e96&#x22;&#x3E;&#x3C;/rect&#x3E;&#x3C;text
                    x=&#x22;50%&#x22; y=&#x22;50%&#x22; fill=&#x22;#dee2e6&#x22;
                    dy=&#x22;.3em&#x22;&#x3E;400x300&#x3C;/text&#x3E;&#x3C;/svg&#x3E;
                    &#x3C;figcaption class=&#x22;figure-caption&#x22;&#x3E;A
                    caption for the above image.&#x3C;/figcaption&#x3E;
                    &#x3C;/figure&#x3E; &#x3C;/div&#x3E;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div class="bd-heading sticky-xl-top align-self-start">
          <div class="card">
            <div class="card-body">
              <h5>Figures</h5>
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

export default ContentsSection;
