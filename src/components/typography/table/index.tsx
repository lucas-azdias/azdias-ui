import { TableSectionProvider } from "@azdias/ui/hooks/contexts/table-section/provider";
import { useTableSection } from "@azdias/ui/hooks/contexts/table-section/use";
import { cn } from "@azdias/ui/lib/utils";
import type {
    TypographyTableBodyProps,
    TypographyTableCellProps,
    TypographyTableHeaderProps,
    TypographyTableProps,
    TypographyTableRowProps,
} from "@azdias/ui/components/typography/table/types";

export function TypographyTable({ className, ...props }: TypographyTableProps) {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table
                {...props}
                className={cn(
                    "w-full",
                    className
                )}
            />
        </div>
    );
}

export function TypographyTableHeader({ ...props }: TypographyTableHeaderProps) {
    return (
        <TableSectionProvider value="header">
            <thead {...props} />
        </TableSectionProvider>
    );
}

export function TypographyTableBody({ ...props }: TypographyTableBodyProps) {
    return (
        <TableSectionProvider value="body">
            <tbody {...props} />
        </TableSectionProvider>
    );
}

export function TypographyTableRow({ className, ...props }: TypographyTableRowProps) {
    return (
        <tr
            {...props}
            className={cn(
                "m-0 border-t p-0 even:bg-muted",
                className
            )}
        />
    );
}

export function TypographyTableCell({
    as = "td",
    align,
    className,
    ...props
}: TypographyTableCellProps) {
    const Comp = as;

    const section = useTableSection();

    const alignClass = { left: "text-left", right: "text-right", center: "text-center" }[align ?? "left"];

    return (
        <Comp
            {...props}
            className={cn(
                "border px-4 py-2",
                alignClass,
                section === "header" && "font-bold",
                className
            )}
        />
    );
}
