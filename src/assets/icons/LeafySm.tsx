import { ComponentProps } from 'react';

export function LeafySm(props: ComponentProps<'svg'>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.6665 25.2C13.7935 25.2057 11.9868 24.5072 10.6047 23.2431C9.22258 21.979 8.36603 20.2416 8.20493 18.3756C8.04383 16.5095 8.58995 14.651 9.73497 13.1688C10.88 11.6865 12.5403 10.6887 14.3865 10.3733C20.4665 9.2 22.0665 8.64533 24.1999 6C25.2665 8.13333 26.3332 10.4587 26.3332 14.5333C26.3332 20.4 21.2345 25.2 15.6665 25.2Z"
        fill="#A6D189"
        stroke="#3C3C3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 26.2666C5 23.0666 7.33212 20.5493 11.4039 19.8666C14.4545 19.3546 17.6061 17.7333 18.8667 16.6666"
        stroke="#3C3C3C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
