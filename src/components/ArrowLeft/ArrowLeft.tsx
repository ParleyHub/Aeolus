import React, { ReactElement, HTMLAttributes } from 'react';

const ArrowLeftIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-arrow-left`}></span>
);

export default ArrowLeftIcon;
