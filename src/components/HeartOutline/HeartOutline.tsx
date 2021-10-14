import React, { ReactElement, HTMLAttributes } from 'react';

const HeartOutlineIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-heart-o`}></span>
);

export default HeartOutlineIcon;
