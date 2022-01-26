import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from '../components/SearchBar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Main = Template.bind({});

Main.args = {
  placeholder: 'Search',
};
