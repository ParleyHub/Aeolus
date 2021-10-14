import React, { ReactElement, HTMLAttributes } from 'react';

const ArrowRightIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-arrow-right`}></span>
);

export default ArrowRightIcon;
