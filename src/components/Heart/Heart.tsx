import React, { ReactElement, HTMLAttributes } from 'react';

const HeartIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-heart`}></span>
);

export default HeartIcon;
