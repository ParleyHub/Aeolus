import React, { ReactElement, HTMLAttributes } from 'react';

const PencilSquareOutlineIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-pencil-square-o`}></span>
);

export default PencilSquareOutlineIcon;
