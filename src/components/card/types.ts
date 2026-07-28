import { type ComponentProps } from "react";

export type CardProps = ComponentProps<"div"> & { size?: "default" | "sm" };

export type CardItemProps = ComponentProps<"div">;
