import React from 'react'

import { SelectArrow } from './Icons/SelectArrow';
import { ResetInput } from './Icons/ResetInput';
import { Seacrh } from './Icons/Seacrh';

export enum EIcons {
    selectArrow = 'SelectArrow',
    resetInput = 'ResetInput',
    seacrh = 'Seacrh'
}

export type TProps = {
    className?: string,
    style?: React.CSSProperties,
    width?: string,
    height?: string,
  };

interface IIconProps {
    name: EIcons,
    width?: string,
    height?: string,
    className?: string,
    style?: React.CSSProperties,
}

export function Icon(props: IIconProps) {
    const {width, height, name} = props;
   
    switch (name) {
        case EIcons.selectArrow:
            return(
                <SelectArrow {...props} width={width} height={height}/>
        );
        case EIcons.resetInput:
            return(
                <ResetInput {...props} width={width} height={height}/>
        );
        case EIcons.seacrh:
            return(
                <Seacrh {...props} width={width} height={height}/>
        );
           
           
        default: 
            return <></>
    }
}
