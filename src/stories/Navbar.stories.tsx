import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from '../components/Navbar';

export default {
  title: 'Component/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Main = Template.bind({});
