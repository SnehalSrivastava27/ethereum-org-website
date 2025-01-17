import { MdChevronRight, MdExpandMore, MdNightlight } from "react-icons/md"
import type { Meta, StoryObj } from "@storybook/react"

import Translation from "@/components/Translation"

import { HStack, VStack } from "../../../src/components/ui/flex"
import { Button, type ButtonVariantProps } from "../buttons/Button"
import { ButtonLink } from "../buttons/Button"

const meta = {
  title: "Atoms / Form / ShadCn Buttons",
  component: Button,
  args: {
    children: "What is Ethereum?",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const variants: ButtonVariantProps["variant"][] = [
  "solid",
  "outline",
  "ghost",
  "link",
]

export const StyleVariants: Story = {
  render: (args) => (
    <VStack className="gap-4">
      {variants.map((variant) => (
        <HStack key={variant} className="gap-4">
          <Button variant={variant} {...args} />
          <Button disabled variant={variant} {...args} />
        </HStack>
      ))}
    </VStack>
  ),
}

export const IconVariants: Story = {
  render: (args) => (
    <HStack>
      <VStack>
        <Button {...args} />
        <Button size="sm" {...args} />
      </VStack>
      <VStack>
        <Button {...args}>
          <MdExpandMore />
          {args.children}
        </Button>
        <Button size="sm" {...args}>
          <MdExpandMore />
          {args.children}
        </Button>
      </VStack>
      <VStack>
        <Button {...args}>
          {args.children}
          <MdChevronRight />
        </Button>
        <Button size="sm" {...args}>
          {args.children}
          <MdChevronRight />
        </Button>
      </VStack>
      <VStack>
        <Button aria-label="next" {...args}>
          <MdChevronRight />
        </Button>
        <Button aria-label="next" size="sm" {...args}>
          <MdChevronRight />
        </Button>
      </VStack>
    </HStack>
  ),
}

export const MultiLineText: Story = {
  args: {
    children: "Button label can have two lines",
  },
  render: (args) => (
    <HStack>
      <VStack className="max-w-[171px]">
        <Button variant="outline" isSecondary {...args} />
        <Button variant="outline" size="sm" isSecondary {...args} />
      </VStack>
      <VStack className="max-w-[171px]">
        <Button {...args} />
        <Button size="sm" {...args} />
      </VStack>
      <VStack className="max-w-[209px]">
        <Button {...args}>
          {args.children}
          <MdChevronRight />
        </Button>
        <Button size="sm" {...args}>
          {args.children}
          <MdChevronRight />
        </Button>
      </VStack>
    </HStack>
  ),
}

export const OverrideStyles: Story = {
  render: () => (
    <>
      <p>
        Show custom styling examples here for visual testing of overrides from
        the theme config
      </p>
      <VStack>
        <Button aria-label="toggle" className="px-1.5">
          <MdNightlight />
        </Button>
        <ButtonLink
          className="rounded-full px-0 py-0"
          linkProps={{ href: "#" }}
        >
          <Translation id="get-involved" />
        </ButtonLink>
      </VStack>
    </>
  ),
}
