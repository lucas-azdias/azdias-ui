import { buttonVariants } from "@azdias/ui/components/button/variants";
import { cn } from "@azdias/ui/lib/utils";
import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { ButtonProps } from "@azdias/ui/components/button/types";

export function Button({
    className,
    variant = "default",
    size = "default",
    ...props
}: ButtonProps) {
    return (
        <ButtonPrimitive data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
    );
}
