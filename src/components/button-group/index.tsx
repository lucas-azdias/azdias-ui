import { buttonGroupVariants } from "@azdias/ui/components/button-group/variants";
import { Separator } from "@azdias/ui/components/separator";
import { cn } from "@azdias/ui/lib/utils";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type {
    ButtonGroupProps,
    ButtonGroupSeparatorProps,
    ButtonGroupTextProps,
} from "@azdias/ui/components/button-group/types";

export function ButtonGroup({
    className,
    orientation,
    ...props
}: ButtonGroupProps) {
    return (
        <div
            role="group"
            data-slot="button-group"
            data-orientation={orientation}
            className={cn(buttonGroupVariants({ orientation }), className)}
            {...props}
        />
    );
}

export function ButtonGroupText({
    className,
    render,
    ...props
}: ButtonGroupTextProps) {
    return useRender({
        defaultTagName: "div",
        props: mergeProps<"div">(
            {
                className: cn(
                    "flex items-center gap-2 rounded-lg border bg-muted px-2.5 text-sm font-medium "
                    + "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
                    className
                ),
            },
            props
        ),
        render,
        state: {
            slot: "button-group-text",
        },
    });
}

export function ButtonGroupSeparator({
    className,
    orientation = "vertical",
    ...props
}: ButtonGroupSeparatorProps) {
    return (
        <Separator
            data-slot="button-group-separator"
            orientation={orientation}
            className={cn(
                "relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px "
                + "data-vertical:h-auto",
                className
            )}
            {...props}
        />
    );
}
