import { type ComponentProps, type ComponentPropsWithoutRef } from "react";

export type TypographyListProps = { values?: string[] }
    & (
        ComponentPropsWithoutRef<"ul"> & { as?: "ul" }
        | ComponentPropsWithoutRef<"ol"> & { as: "ol" }
    );

export type TypographyListItemProps = ComponentProps<"li">;
