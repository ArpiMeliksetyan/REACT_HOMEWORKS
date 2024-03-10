import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import GenreSelect from "../components/GenreSelect";
export default {
    title: 'Components/GenreSelect',
    component: GenreSelect,
    argTypes: {
        genreNames: {
            control: { type: 'text' },
        },
        selectedGenreName: {
            control: { type: 'text' },
        },
        onSelect: {
            control: {type: 'function'},
        }
    },
    args: {
        genreNames: ['Comedy', 'Melodrama', 'Historical'],
        selectedGenreName: 'Comedy',
    }
} as Meta;

type Story = StoryObj<typeof GenreSelect>
export const Default: Story = {};
