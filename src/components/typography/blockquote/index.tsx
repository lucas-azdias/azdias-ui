import { cn } from "@azdias/ui/lib/utils";
import type { TypographyBlockquoteProps } from "@azdias/ui/components/typography/blockquote/types";

export function TypographyBlockquote({ className, ...props }: TypographyBlockquoteProps) {
    return (
        <blockquote
            {...props}
            className={cn(
                "mt-6 border-l-2 pl-6 italic",
                className
            )}
        />
    );
}
