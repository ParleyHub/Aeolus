import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as EyeCloseIcon } from './EyeClose';

export default {
  title: 'Components/EyeClose',
  component: EyeCloseIcon,
} as ComponentMeta<typeof EyeCloseIcon>;

const Template: ComponentStory<typeof EyeCloseIcon> = (args) => (
  <EyeCloseIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
};

export const Black = Template.bind({});
Black.args = {
  variant: 'black',
};

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: 'xs',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const Base = Template.bind({});
Base.args = {
  size: 'base',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};
