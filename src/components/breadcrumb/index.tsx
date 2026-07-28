import { cn } from "@azdias/ui/lib/utils";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import type {
    BreadcrumbItemProps,
    BreadcrumbLinkProps,
    BreadcrumbListProps,
    BreadcrumbPageProps,
    BreadcrumbProps,
} from "@azdias/ui/components/breadcrumb/types";

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
    return (
        <nav
            aria-label="breadcrumb"
            data-slot="breadcrumb"
            className={cn(className)}
            {...props}
        />
    );
}

export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
    return (
        <ol
            data-slot="breadcrumb-list"
            className={cn(
                "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}

export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
    return (
        <li
            data-slot="breadcrumb-item"
            className={cn("inline-flex items-center gap-1", className)}
            {...props}
        />
    );
}

export function BreadcrumbItemSeparator({ children, className, ...props }: BreadcrumbItemProps) {
    return (
        <li
            data-slot="breadcrumb-separator"
            role="presentation"
            aria-hidden="true"
            className={cn("[&>svg]:size-3.5", className)}
            {...props}
        >
            {children ?? (
                <ChevronRightIcon />
            )}
        </li>
    );
}

export function BreadcrumbLink({ className, render, ...props }: BreadcrumbLinkProps) {
    return useRender({
        defaultTagName: "div",
        props: mergeProps<"div">(
            {
                className: cn("transition-colors hover:text-foreground", className),
            },
            props
        ),
        render,
        state: {
            slot: "breadcrumb-link",
        },
    });
}

export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
    return (
        <span
            data-slot="breadcrumb-page"
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={cn("font-normal text-foreground", className)}
            {...props}
        />
    );
}

export function BreadcrumbPageEllipsis({ className, ...props }: BreadcrumbPageProps) {
    return (
        <span
            data-slot="breadcrumb-ellipsis"
            role="presentation"
            aria-hidden="true"
            className={cn(
                "flex size-5 items-center justify-center [&>svg]:size-4",
                className
            )}
            {...props}
        >
            <MoreHorizontalIcon />
            <span className="sr-only">More</span>
        </span>
    );
}
