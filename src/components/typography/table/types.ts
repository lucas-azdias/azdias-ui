import { type ComponentPropsWithoutRef } from "react";

export type TypographyTableProps = ComponentPropsWithoutRef<"table">;

export type TypographyTableHeaderProps = ComponentPropsWithoutRef<"thead">;

export type TypographyTableBodyProps = ComponentPropsWithoutRef<"tbody">;

export type TypographyTableRowProps = ComponentPropsWithoutRef<"tr">;

export type TypographyTableCellProps = (
    {
        as?: "td" | "th"
        align?: "left" | "right" | "center"
    }
    & (
        ComponentPropsWithoutRef<"td"> & { as?: "td" }
        | ComponentPropsWithoutRef<"th"> & { as: "th" }
    )
);
