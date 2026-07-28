import { cn } from "@azdias/ui/lib/utils";
import type { SkeletonProps } from "@azdias/ui/components/skeleton/types";

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div
            data-slot="skeleton"
            className={cn("animate-pulse rounded-md bg-muted", className)}
            {...props}
        />
    );
}
