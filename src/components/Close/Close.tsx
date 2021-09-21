import React, { ReactElement } from 'react';

export interface IIconProps extends HTMLSpanElement {
  variant?: 'info' | 'success' | 'error' | 'warning' | 'default' | 'black';
}

const CloseIcon = ({
  variant = 'default',
  className = '',
}: IIconProps): ReactElement => (
  <span
    className={`${className} aeolus-icon-cancel aeolus-icon--${variant}`}
  ></span>
);

export default CloseIcon;
