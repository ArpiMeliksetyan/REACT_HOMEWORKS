import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SearchForm from "../components/SearchForm";

export default {
    title: 'Components/SearchForm',
    component: SearchForm,
    argTypes: {
        initialSearchQuery: {
            control: { type: 'text' },
        },
        onSearch: {
            control: { type: 'function' },
        }
    },
    args: {
        initialSearchQuery: 'Search you favourite movie',
    }
} as Meta;

type Story = StoryObj<typeof SearchForm>
export const Default: Story = {};
