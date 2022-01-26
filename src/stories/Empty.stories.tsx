import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Empty from '../components/Empty/index';

export default {
  title: 'Component/Empty',
  component: Empty,
} as ComponentMeta<typeof Empty>;

const Template: ComponentStory<typeof Empty> = (args) => <Empty {...args} />;

export const Main = Template.bind({});
