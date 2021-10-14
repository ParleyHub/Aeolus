import React, { ReactElement, HTMLAttributes } from 'react';

const CommentingIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-commenting`}></span>
);

export default CommentingIcon;
