export function GitHubLogo() {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
      ></path>
    </svg>
  );
}

export function LinkedInLogo() {
  return (
    <svg
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );
}

export function Mail() {
  return (
    <svg
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
  );
}

export function Moon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );
}

export function RightArrow({ height = 16, width = 16 }) {
  return (
    <svg
      fill="currentColor"
      height={height}
      width={width}
      viewBox="0 0 512 512"
    >
      <path
        d="M322.7,128.4L423,233.4c6,5.8,9,13.7,9,22.4c0,8.7-3,16.5-9,22.4L322.7,383.6c-11.9,12.5-31.3,12.5-43.2,0
c-11.9-12.5-11.9-32.7,0-45.2l48.2-50.4h-217C93.7,288,80,273.7,80,256c0-17.7,13.7-32,30.6-32h217l-48.2-50.4
c-11.9-12.5-11.9-32.7,0-45.2C291.4,115.9,310.7,115.9,322.7,128.4z"
      ></path>
    </svg>
  );
}

export function TwitterLogo() {
  return (
    <svg
      viewBox="328 355 335 276"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
          M 630, 425
          A 195, 195 0 0 1 331, 600
          A 142, 142 0 0 0 428, 570
          A  70,  70 0 0 1 370, 523
          A  70,  70 0 0 0 401, 521
          A  70,  70 0 0 1 344, 455
          A  70,  70 0 0 0 372, 460
          A  70,  70 0 0 1 354, 370
          A 195, 195 0 0 0 495, 442
          A  67,  67 0 0 1 611, 380
          A 117, 117 0 0 0 654, 363
          A  65,  65 0 0 1 623, 401
          A 117, 117 0 0 0 662, 390
          A  65,  65 0 0 1 630, 425
          Z"
      />
    </svg>
  );
}

export function ColorSwatch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
      />
    </svg>
  );
}
