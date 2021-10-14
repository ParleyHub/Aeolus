import React, { ReactElement, HTMLAttributes } from 'react';

const SpinnerIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-spinner`}></span>
);

export default SpinnerIcon;
