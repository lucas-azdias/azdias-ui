import { type ComponentProps } from "react";

export type CopyableProps = ComponentProps<"div">
    & {
        value: string
    };

export type CopyableButtonProps = CopyableProps
    & {
        size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"
        icon?: boolean
    };

export type CopyableInlineCodeProps = CopyableProps
    & {
        size?: "sm" | "lg"
    };

export type CopyableCodeBlockProps = CopyableProps
    & {
        enumeratedLines?: boolean
    };
