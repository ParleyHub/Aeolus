import React, { ReactElement } from 'react';

export interface IIconProps extends HTMLSpanElement {
  variant?: 'info' | 'success' | 'error' | 'warning' | 'default';
  size?: 'small' | 'medium' | 'large';
}

const CloseIcon = ({
  variant = 'default',
  size = 'medium',
}: IIconProps): ReactElement => (
  <span
    className={`aeolus-icon-cancel aeolus-icon--${size} aeolus-icon--${variant}`}
  ></span>
);

export default CloseIcon;
