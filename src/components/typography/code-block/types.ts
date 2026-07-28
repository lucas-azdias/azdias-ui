import { type ComponentPropsWithoutRef } from "react";

export type TypographyCodeBlockProps = ComponentPropsWithoutRef<"pre">
    & {
        enumeratedLines?: boolean
    };
