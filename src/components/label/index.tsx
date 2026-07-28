import { cn } from "@azdias/ui/lib/utils";
import type { LabelProps } from "@azdias/ui/components/label/types";

export function Label({ className, ...props }: LabelProps) {
    return (
        <label
            data-slot="label"
            className={cn(
                "flex items-center gap-2 text-sm leading-none font-medium select-none "
                + "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 "
                + "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                className
            )}
            {...props}
        />
    );
}
