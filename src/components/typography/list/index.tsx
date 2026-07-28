import { cn } from "@azdias/ui/lib/utils";
import type { TypographyListItemProps, TypographyListProps } from "@azdias/ui/components/typography/list/types";

export function TypographyList({ as = "ul", values = [], children, className, ...props }: TypographyListProps) {
    const List = as;

    return (
        <List
            {...props}
            className={cn(
                "my-6 ml-6 list-disc [&>li]:mt-2",
                className
            )}
        >
            {values.map((v, i) => (<li key={`${i.toString()}/${v}`}>{v}</li>))}
            {children}
        </List>
    );
}

export function TypographyListItem({ ...props }: TypographyListItemProps) {
    return (
        <li {...props} />
    );
}
