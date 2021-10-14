import React, { ReactElement, HTMLAttributes } from 'react';

const VideoCameraIcon = ({
  className = '',
}: HTMLAttributes<HTMLSpanElement>): ReactElement => (
  <span className={`${className} aeolus-icon-video-camera`}></span>
);

export default VideoCameraIcon;
