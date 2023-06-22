import React, { ComponentPropsWithRef } from 'react';

export const ArrowIcon = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_53)">
        <path d="M0.771591 12.1948L6.2284 6.5" strokeLinecap="round" />
        <path d="M0.771595 0.805237L6.22841 6.5" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_1_53">
          <rect width="7" height="13" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
