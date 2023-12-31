import React from 'react';
import { TProps } from '../Icon';

export function SelectArrow({ className, style, width, height }: TProps) {
  return (
    <svg
      className={className}
      style={style}
      width={width ? width : "16"}
      height={height ? height : "10"}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 9L8 2L15 9" stroke="#B7280F" strokeWidth="2"/>
    </svg>
  );
};