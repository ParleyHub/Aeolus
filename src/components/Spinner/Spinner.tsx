import React, { ReactElement } from 'react';

import type { IIconProps } from '../../types';

const SpinnerIcon = ({
  variant = 'default',
  size = 'base',
  className = '',
}: IIconProps): ReactElement => (
  <span
    className={`${className} aeolus-icon-spinner aeolus-icon--${variant} text-${size}`}
  ></span>
);

export default SpinnerIcon;
