import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from '../components/Pagination/Pagination';

export default {
  title: 'Component/Pagination',
  component: Pagination,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination>
    <Pagination.Prev {...args} />
    <Pagination.Item {...args}>1</Pagination.Item>
    <Pagination.Next {...args} />
  </Pagination>
);

export const Main = Template.bind({});

Main.args = {
  onClick: () => allert('works'),
};
