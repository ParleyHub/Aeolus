import React, { ReactElement, HTMLAttributes } from 'react';

const TrashIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-trash`}></span>
);

export default TrashIcon;
