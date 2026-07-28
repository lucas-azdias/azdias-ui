import { sidebarMenuButtonVariants } from "@azdias/ui/components/sidebar/variants";
import { TooltipContent } from "@azdias/ui/components/tooltip";
import { useRender } from "@base-ui/react/use-render";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";
import type { ButtonProps } from "@azdias/ui/components/button/types";
import type { InputProps } from "@azdias/ui/components/input/types";
import type { SeparatorProps } from "@azdias/ui/components/separator/types";

export type SidebarProps = ComponentProps<"div">
    & {
        side?: "left" | "right"
        variant?: "sidebar" | "floating" | "inset"
        collapsible?: "offcanvas" | "icon" | "none"
    };

export type SidebarTriggerProps = ButtonProps;

export type SidebarRailProps = ComponentProps<"button">;

export type SidebarInsetProps = ComponentProps<"main">;

export type SidebarInputProps = InputProps;

export type SidebarSeparatorProps = SeparatorProps;

export type SidebarSectionProps = ComponentProps<"div">;

export type SidebarGroupProps = ComponentProps<"div">;

export type SidebarGroupLabelProps = useRender.ComponentProps<"div"> & ComponentProps<"div">;

export type SidebarGroupActionProps = useRender.ComponentProps<"button"> & ComponentProps<"button">;

export type SidebarGroupContentProps = ComponentProps<"div">;

export type SidebarMenuProps = ComponentProps<"ul">;

export type SidebarMenuItemProps = ComponentProps<"li">;

export type SidebarMenuButtonProps = useRender.ComponentProps<"button">
    & ComponentProps<"button">
    & {
        isActive?: boolean
        tooltip?: string | ComponentProps<typeof TooltipContent>
    }
    & VariantProps<typeof sidebarMenuButtonVariants>;

export type SidebarMenuActionProps = useRender.ComponentProps<"button">
    & ComponentProps<"button">
    & {
        showOnHover?: boolean
    };

export type SidebarMenuBadgeProps = ComponentProps<"div">;

export type SidebarMenuSkeletonProps = ComponentProps<"div">
    & {
        showIcon?: boolean
    };

export type SidebarMenuSubProps = ComponentProps<"ul">;

export type SidebarMenuSubItemProps = ComponentProps<"li">;

export type SidebarMenuSubButtonProps = useRender.ComponentProps<"div">
    & {
        size?: "sm" | "md"
        isActive?: boolean
    };
