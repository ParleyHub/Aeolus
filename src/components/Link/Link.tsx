import React, { ReactElement, HTMLAttributes } from 'react';

const LinkIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-link`}></span>
);

export default LinkIcon;
