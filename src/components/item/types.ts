import { itemMediaVariants, itemVariants } from "@azdias/ui/components/item/variants";
import { Separator } from "@azdias/ui/components/separator";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export type ItemGroupProps = ComponentProps<"div">;

export type ItemSeparatorProps = ComponentProps<typeof Separator>;

export type ItemProps = useRender.ComponentProps<"div">
    & VariantProps<typeof itemVariants>
    & {
        hoverable?: boolean
    };

export type ItemMediaProps = ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>;

export type ItemSectionProps = ComponentProps<"div">;

export type ItemTitleProps = ComponentProps<"div">;

export type ItemDescriptionProps = ComponentProps<"div">;

export type ItemActionsProps = ComponentProps<"div">;
