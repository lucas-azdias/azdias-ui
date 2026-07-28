import { fieldVariants } from "@azdias/ui/components/field/variants";
import { type VariantProps } from "class-variance-authority";
import { type ComponentProps, type ReactNode } from "react";
import type { LabelProps } from "@azdias/ui/components/label/types";

export type FieldSetProps = ComponentProps<"fieldset">;

export type FieldLegendProps = ComponentProps<"legend"> & { variant?: "legend" | "label" };

export type FieldGroupProps = ComponentProps<"div">;

export type FieldProps = ComponentProps<"div"> & VariantProps<typeof fieldVariants>;

export type FieldLabelProps = LabelProps;

export type FieldTitleProps = ComponentProps<"div">;

export type FieldContentProps = ComponentProps<"div">;

export type FieldDescriptionProps = ComponentProps<"p">;

export type FieldSeparatorProps = ComponentProps<"div"> & { children?: ReactNode };

export type FieldErrorProps = ComponentProps<"div"> & { errors?: ({ message?: string } | undefined)[] };
