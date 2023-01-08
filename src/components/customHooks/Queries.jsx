import React from 'react'
import { useMediaQuery } from './MediaQuery';


export const useIsSmall = () => useMediaQuery('(min-width: 480px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');