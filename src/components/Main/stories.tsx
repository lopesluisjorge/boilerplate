import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Main from '.'

const meta = {
  title: 'Main',
  component: Main,
} as Meta<typeof Main>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
