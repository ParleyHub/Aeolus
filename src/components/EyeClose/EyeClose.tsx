import React, { ReactElement, HTMLAttributes } from 'react';

const EyeIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-eye-close`}></span>
);

export default EyeIcon;
