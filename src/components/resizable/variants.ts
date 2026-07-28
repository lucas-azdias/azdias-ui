import { cva } from "class-variance-authority";

export const resizableHandleVariants = cva(
    "relative flex items-center justify-center ring-offset-background focus-visible:before:bg-ring "
    + "focus-visible:before:opacity-100 before:z-80 before:absolute before:bg-border "
    + "after:absolute after:-z-1 "

    + "aria-[orientation=vertical]:after:w-px aria-[orientation=vertical]:after:inset-y-0 "
    + "aria-[orientation=vertical]:after:left-1/2 "
    + "aria-[orientation=vertical]:after:-translate-x-1/2 "

    + "aria-[orientation=horizontal]:after:h-px aria-[orientation=horizontal]:after:inset-x-0 "
    + "aria-[orientation=horizontal]:after:top-1/2 "
    + "aria-[orientation=horizontal]:after:-translate-y-1/2 "

    + "[&[aria-orientation=horizontal]>div]:rotate-90",
    {
        variants: {
            variant: {
                default: "aria-[orientation=vertical]:before:inset-y-0 "
                    + "aria-[orientation=horizontal]:before:inset-x-0",
                rounded: "aria-[orientation=vertical]:before:inset-y-2.5 "
                    + "aria-[orientation=horizontal]:before:inset-x-2.5 before:rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);
