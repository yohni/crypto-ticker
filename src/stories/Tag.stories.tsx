import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag from '../components/Tag/Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => (
  <Tag>
    <Tag.Item {...args} />
    <Tag.Item {...args} />
  </Tag>
);

export const Main = Template.bind({});

Main.args = {
  text: 'DeFi',
  handleClick: () => alert('works'),
};
