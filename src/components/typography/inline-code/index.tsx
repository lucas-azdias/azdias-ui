import { cn } from "@azdias/ui/lib/utils";
import type { TypographyInlineCodeProps } from "@azdias/ui/components/typography/inline-code/types";

export function TypographyInlineCode({ className, ...props }: TypographyInlineCodeProps) {
    return (
        <code
            {...props}
            className={cn(
                "relative rounded bg-muted/70 p-1 text-sm",
                className
            )}
        />
    );
}
