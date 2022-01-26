import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TableHeader from '../components/Table/TableHeader';

export default {
  title: 'Component/TableHeader',
  component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args) => (
  <TableHeader {...args} />
);

export const Main = Template.bind({});
