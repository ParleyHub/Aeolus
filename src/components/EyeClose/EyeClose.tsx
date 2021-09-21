import React, { ReactElement } from 'react';

import type { IIconProps } from '../../types';

const EyeIcon = ({
  variant = 'default',
  size = 'base',
  className = '',
}: IIconProps): ReactElement => (
  <span
    className={`${className} aeolus-icon-eye-close aeolus-icon--${variant} text-${size}`}
  ></span>
);

export default EyeIcon;
