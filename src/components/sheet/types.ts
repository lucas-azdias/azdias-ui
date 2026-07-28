import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { type ComponentProps } from "react";

export type SheetProps = SheetPrimitive.Root.Props;

export type SheetTriggerProps = SheetPrimitive.Trigger.Props;

export type SheetCloseProps = SheetPrimitive.Close.Props;

export type SheetPortalProps = SheetPrimitive.Portal.Props;

export type SheetOverlayProps = SheetPrimitive.Backdrop.Props;

export type SheetContentProps = SheetPrimitive.Popup.Props
    & {
        side?: "top" | "right" | "bottom" | "left"
        showCloseButton?: boolean
    };

export type SheetSectionProps = ComponentProps<"div">;

export type SheetTitleProps = SheetPrimitive.Title.Props;

export type SheetDescriptionProps = SheetPrimitive.Description.Props;
