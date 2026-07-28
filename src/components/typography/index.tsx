import { cn } from "@azdias/ui/lib/utils";
import type { TypographyProps } from "@azdias/ui/components/typography/types";

export { TypographyBlockquote } from "@azdias/ui/components/typography/blockquote";

export { TypographyCodeBlock } from "@azdias/ui/components/typography/code-block";

export { TypographyInlineCode } from "@azdias/ui/components/typography/inline-code";

export { TypographyList } from "@azdias/ui/components/typography/list";

export {
    TypographyTable,
    TypographyTableHeader,
    TypographyTableBody,
    TypographyTableRow,
    TypographyTableCell,
} from "@azdias/ui/components/typography/table";

export function Typography({
    level,
    truncate,
    gutterBottom,
    muted,
    align,
    className,
    ...props
}: TypographyProps) {
    const truncateClassName = truncate && "truncate";
    const gutterBottomClassName = gutterBottom && "mb-[0.35em]";
    const mutedClassName = muted && "text-muted-foreground font-normal";

    const alignClassName = {
        left: "text-left",
        right: "text-right",
        center: "text-center",
        justify: "text-justify",
    }[align ?? "left"];

    switch (level) {
        case "h1":
            return (
                <h1
                    {...props}
                    className={cn(
                        "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
                        truncateClassName,
                        alignClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "h2":
            return (
                <h2
                    {...props}
                    className={cn(
                        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
                        truncateClassName,
                        alignClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "h3":
            return (
                <h3
                    {...props}
                    className={cn(
                        "scroll-m-20 text-2xl font-semibold tracking-tight",
                        truncateClassName,
                        alignClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "h4":
            return (
                <h4
                    {...props}
                    className={cn(
                        "scroll-m-20 text-xl font-semibold tracking-tight",
                        truncateClassName,
                        alignClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "lead":
            return (
                <p
                    {...props}
                    className={cn(
                        "text-xl text-muted-foreground",
                        truncateClassName,
                        alignClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "large":
            return (
                <div
                    {...props}
                    className={cn(
                        "text-lg font-semibold",
                        truncateClassName,
                        alignClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "p":
            return (
                <p
                    {...props}
                    className={cn(
                        "leading-7 not-first:mt-6",
                        truncateClassName,
                        alignClassName,
                        mutedClassName,
                        gutterBottomClassName,
                        className
                    )}
                />
            );

        case "span":
            return (
                <span
                    {...props}
                    className={cn(
                        "text-md inline-block font-light",
                        truncateClassName,
                        alignClassName,
                        mutedClassName,
                        className
                    )}
                />
            );

        case "small":
            return (
                <small
                    {...props}
                    className={cn(
                        "text-sm font-light leading-none",
                        truncateClassName,
                        alignClassName,
                        mutedClassName,
                        className
                    )}
                />
            );
    }
}
