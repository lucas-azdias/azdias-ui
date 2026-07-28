import { cn } from "@azdias/ui/lib/utils";
import type { TypographyCodeBlockProps } from "@azdias/ui/components/typography/code-block/types";

export function TypographyCodeBlock(
    { className, enumeratedLines = false, children, ...props }: TypographyCodeBlockProps
) {
    return (
        <pre
            {...props}
            className={cn(
                "relative rounded-lg bg-muted/70 border overflow-hidden",
                className
            )}
        >
            <code
                className={
                    cn(
                        "px-4 py-3.5 text-sm/7 overflow-x-auto tab-4 ltr",
                        enumeratedLines
                            ? (
                                "grid [counter-reset:line] *:[counter-increment:line] "
                                + "[&>*::before]:content-[counter(line)] [&>*::before]:min-w-16 [&>*::before]:pr-6 "
                                + "[&>*::before]:sticky [&>*::before]:inline-block [&>*::before]:text-muted-foreground "
                                + "[&>*::before]:text-right [&>*::before]:select-none [&>*::before]:shrink-0"
                            )
                            : ""
                    )
                }
            >
                {children}
            </code>
        </pre>
    );
}
