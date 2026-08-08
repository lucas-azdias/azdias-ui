import { itemMediaVariants, itemVariants } from "@azdias/ui/components/item/variants";
import { Separator } from "@azdias/ui/components/separator";
import { cn } from "@azdias/ui/lib/utils";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type {
    ItemActionsProps,
    ItemDescriptionProps,
    ItemGroupProps,
    ItemMediaProps,
    ItemProps,
    ItemSectionProps,
    ItemSeparatorProps,
    ItemTitleProps,
} from "@azdias/ui/components/item/types";

export function ItemGroup({ className, ...props }: ItemGroupProps) {
    return (
        <div
            role="list"
            data-slot="item-group"
            className={cn(
                "group/item-group flex w-full flex-col gap-4 has-data-[size=sm]:gap-2.5 has-data-[size=xs]:gap-2",
                className
            )}
            {...props}
        />
    );
}

export function ItemSeparator({ className, ...props }: ItemSeparatorProps) {
    return (
        <Separator
            data-slot="item-separator"
            orientation="horizontal"
            className={cn("my-2", className)}
            {...props}
        />
    );
}

export function Item(
    { className, variant = "default", size = "default", hoverable = false, render, ...props }: ItemProps
) {
    return useRender({
        defaultTagName: "div",
        props: mergeProps<"div">(
            {
                className: cn(
                    itemVariants({ variant, size, className }),
                    hoverable ? "transition-colors hover:bg-muted cursor-pointer" : ""
                ),
            },
            props
        ),
        render,
        state: {
            slot: "item",
            variant,
            size,
        },
    });
}

export function ItemMedia({ className, variant = "default", ...props }: ItemMediaProps) {
    return (
        <div
            data-slot="item-media"
            data-variant={variant}
            className={cn(itemMediaVariants({ variant, className }))}
            {...props}
        />
    );
}

export function ItemContent({ className, ...props }: ItemSectionProps) {
    return (
        <div
            data-slot="item-content"
            className={cn(
                "flex flex-1 flex-col gap-1 group-data-[size=xs]/item:gap-0 [&+[data-slot=item-content]]:flex-none",
                className
            )}
            {...props}
        />
    );
}

export function ItemTitle({ className, ...props }: ItemTitleProps) {
    return (
        <div
            data-slot="item-title"
            className={cn(
                "line-clamp-1 flex w-fit items-center gap-2 text-sm leading-snug font-medium underline-offset-4",
                className
            )}
            {...props}
        />
    );
}

export function ItemDescription({ className, ...props }: ItemDescriptionProps) {
    return (
        <p
            data-slot="item-description"
            className={cn(
                "line-clamp-2 text-left text-sm leading-normal font-normal text-muted-foreground "
                + "group-data-[size=xs]/item:text-xs [&>a]:underline [&>a]:underline-offset-4 "
                + "[&>a:hover]:text-primary",
                className
            )}
            {...props}
        />
    );
}

export function ItemActions({ className, ...props }: ItemActionsProps) {
    return (
        <div
            data-slot="item-actions"
            className={cn("flex items-center gap-2", className)}
            {...props}
        />
    );
}

export function ItemHeader({ className, ...props }: ItemSectionProps) {
    return (
        <div
            data-slot="item-header"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    );
}

export function ItemFooter({ className, ...props }: ItemSectionProps) {
    return (
        <div
            data-slot="item-footer"
            className={cn(
                "flex basis-full items-center justify-between gap-2",
                className
            )}
            {...props}
        />
    );
}
