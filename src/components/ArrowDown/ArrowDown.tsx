import React, { ReactElement } from 'react';

import type { IIconProps } from '../../types';

const ArrowDownIcon = ({
  variant = 'default',
  size = 'base',
  className = '',
}: IIconProps): ReactElement => (
  <span
    className={`${className} aeolus-icon-arrow-down aeolus-icon--${variant} text-${size}`}
  ></span>
);

export default ArrowDownIcon;
