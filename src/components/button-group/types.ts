import { buttonGroupVariants } from "@azdias/ui/components/button-group/variants";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import type { SeparatorProps } from "@azdias/ui/components/separator/types";

export type ButtonGroupProps = ComponentProps<"div"> & VariantProps<typeof buttonGroupVariants>;

export type ButtonGroupTextProps = useRender.ComponentProps<"div">;

export type ButtonGroupSeparatorProps = SeparatorProps;
