import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Counter from "../components/Counter";

export default {
    title: 'Components/Counter',
    component: Counter,
    argTypes: {
        initialValue: {
            control: { type: 'number' },
        },
    },
} as Meta;

type Story = StoryObj<typeof Counter>
export const Default: Story = {
    args: {
        initialValue: 0,
    }
};
