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
    <Pagination.Prev onClick={() => alert('works')} {...args} />
    <Pagination.Item onClick={() => alert('works')} {...args}>
      1
    </Pagination.Item>
    <Pagination.Next onClick={() => alert('works')} {...args} />
  </Pagination>
);

export const Main = Template.bind({});
