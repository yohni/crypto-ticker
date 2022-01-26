import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../components/Avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const NoImage = Template.bind({});

NoImage.args = {
  text: 'Bitcoin',
};

export const Main = Template.bind({});

Main.args = {
  text: 'Bitcoin',
  src: 'https://i.pravatar.cc/30',
};
