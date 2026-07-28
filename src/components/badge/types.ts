import { badgeVariants } from "@azdias/ui/components/badge/variants";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps } from "class-variance-authority";

export type BadgeProps = useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
