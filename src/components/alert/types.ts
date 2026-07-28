import { alertVariants } from "@azdias/ui/components/alert/variants";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

export type AlertProps = ComponentProps<"div"> & VariantProps<typeof alertVariants>;

export type AlertTitleProps = ComponentProps<"div">;

export type AlertDescriptionProps = ComponentProps<"div">;

export type AlertActionProps = ComponentProps<"div">;
