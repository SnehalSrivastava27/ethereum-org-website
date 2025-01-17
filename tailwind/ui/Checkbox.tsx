import * as React from "react"
import { RxCheck } from "react-icons/rx"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { cn } from "@/lib/utils/cn"

export type CheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "size-4 rounded-sm border border-body-medium text-background hover:border-primary-high-contrast hover:bg-body-light focus-visible:outline-offset-4 focus-visible:outline-primary-hover disabled:cursor-not-allowed disabled:border-disabled disabled:bg-disabled aria-[invalid]:border-error aria-[invalid]:bg-error-light data-[state='checked']:not-disabled:border-primary data-[state='checked']:not-disabled:bg-primary data-[state='checked']:hover:not-disabled:bg-primary-hover",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center">
      <RxCheck className="text-sm" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export default Checkbox
