import React from 'react';
import { IconFamilyType } from '../../helpers/getIconType';
import { BaseProps } from '../../types';
export interface IconProps extends BaseProps {
    name?: string;
    family?: IconFamilyType | 'Galio';
    size?: number;
    color?: string;
}
declare const _default: React.FC<any>;
export default _default;
