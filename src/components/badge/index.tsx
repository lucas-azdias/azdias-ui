import { badgeVariants } from "@azdias/ui/components/badge/variants";
import { cn } from "@azdias/ui/lib/utils";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { BadgeProps } from "@azdias/ui/components/badge/types";

export function Badge({ className, variant = "default", render, ...props }: BadgeProps) {
    return useRender({
        defaultTagName: "span",
        props: mergeProps<"span">(
            {
                className: cn(badgeVariants({ variant }), className),
            },
            props
        ),
        render,
        state: {
            slot: "badge",
            variant,
        },
    });
}
