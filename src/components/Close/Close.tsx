import React, { ReactElement } from 'react';

import type { IIconProps } from '../../types';

const CloseIcon = ({
  variant = 'default',
  size = 'base',
  className = '',
}: IIconProps): ReactElement => (
  <span
    className={`${className} aeolus-icon-cancel aeolus-icon--${variant} text-${size}`}
  ></span>
);

export default CloseIcon;
