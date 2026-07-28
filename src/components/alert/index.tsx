import { alertVariants } from "@azdias/ui/components/alert/variants";
import { cn } from "@azdias/ui/lib/utils";
import type {
    AlertActionProps,
    AlertDescriptionProps,
    AlertProps,
    AlertTitleProps,
} from "@azdias/ui/components/alert/types";

export function Alert({ className, variant, ...props }: AlertProps) {
    return (
        <div
            data-slot="alert"
            role="alert"
            className={cn(alertVariants({ variant }), className)}
            {...props}
        />
    );
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
    return (
        <div
            data-slot="alert-title"
            className={cn(
                "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 "
                + "[&_a]:hover:text-foreground",
                className
            )}
            {...props}
        />
    );
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
    return (
        <div
            data-slot="alert-description"
            className={cn(
                "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 "
                + "[&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
                className
            )}
            {...props}
        />
    );
}

export function AlertAction({ className, ...props }: AlertActionProps) {
    return (
        <div
            data-slot="alert-action"
            className={cn("absolute top-2 right-2", className)}
            {...props}
        />
    );
}
