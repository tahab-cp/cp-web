"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "text-text-primary text-[4.8rem] font-semibold tracking-[-0.02em]",
        className,
      )}
      {...props}
    />
  );
}

export { Label };
