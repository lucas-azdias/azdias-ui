import { cn } from "@azdias/ui/lib/utils";
import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import type { SeparatorProps } from "@azdias/ui/components/separator/types";

export function Separator({ className, orientation = "horizontal", ...props }: SeparatorProps) {
    return (
        <SeparatorPrimitive
            data-slot="separator"
            orientation={orientation}
            className={cn(
                "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full "
                + "data-vertical:w-px data-vertical:self-stretch",
                className
            )}
            {...props}
        />
    );
}
