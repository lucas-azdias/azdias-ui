import { resizableHandleVariants } from "@azdias/ui/components/resizable/variants";
import { type VariantProps } from "class-variance-authority";
import { type GroupProps, type PanelProps, type SeparatorProps } from "react-resizable-panels";

export type ResizablePanelGroupProps = GroupProps;

export type ResizablePanelProps = PanelProps;

export type ResizablePanelSheetProps = PanelProps;

export type ResizableHandleProps = SeparatorProps
    & {
        withHandle?: boolean
        hoverable?: boolean
        hoverDistance?: "sm" | "md" | "lg"
        thickness?: "sm" | "md" | "lg"
    }
    & VariantProps<typeof resizableHandleVariants>;
