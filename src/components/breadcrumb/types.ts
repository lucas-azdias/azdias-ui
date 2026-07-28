import { useRender } from "@base-ui/react/use-render";
import { type ComponentProps } from "react";

export type BreadcrumbProps = ComponentProps<"nav">;

export type BreadcrumbListProps = ComponentProps<"ol">;

export type BreadcrumbItemProps = ComponentProps<"li">;

export type BreadcrumbLinkProps = useRender.ComponentProps<"div">;

export type BreadcrumbPageProps = ComponentProps<"span">;
