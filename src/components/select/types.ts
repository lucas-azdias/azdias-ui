import { Select as SelectPrimitive } from "@base-ui/react/select";
import { type ComponentProps } from "react";

export type SelectProps<Value, Multiple extends boolean | undefined = undefined> = (
    SelectPrimitive.Root.Props<Value, Multiple>
);

export type SelectGroupProps = SelectPrimitive.Group.Props;

export type SelectValueProps = SelectPrimitive.Value.Props;

export type SelectTriggerProps = SelectPrimitive.Trigger.Props
    & {
        size?: "sm" | "default"
    };

export type SelectContentProps = SelectPrimitive.Popup.Props
    & Pick<
        SelectPrimitive.Positioner.Props,
        "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
    >;

export type SelectLabelProps = SelectPrimitive.GroupLabel.Props;

export type SelectItemProps = SelectPrimitive.Item.Props;

export type SelectSeparatorProps = SelectPrimitive.Separator.Props;

export type SelectScrollUpButtonProps = ComponentProps<typeof SelectPrimitive.ScrollUpArrow>;

export type SelectScrollDownButtonProps = ComponentProps<typeof SelectPrimitive.ScrollDownArrow>;
