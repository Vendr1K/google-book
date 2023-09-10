import React from 'react'
import { TProps } from '../Icon';

export function ResetInput({className, style, width, height }: TProps) {
    return (
        <svg 
            className={className ?? ''}
            style={style}
            width={width ?? '26'}
            height={height ?? '26'} 
            viewBox="0 0 26 26" 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
             <path d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z" fill="#48484A"/>
        </svg>
    )
}
