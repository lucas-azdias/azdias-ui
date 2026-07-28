import { resizableHandleVariants } from "@azdias/ui/components/resizable/variants";
import { cn } from "@azdias/ui/lib/utils";
import { useEffect, useRef, useState } from "react";
import {
    Group,
    Panel,
    Separator,
} from "react-resizable-panels";
import type {
    ResizableHandleProps,
    ResizablePanelGroupProps,
    ResizablePanelProps,
    ResizablePanelSheetProps,
} from "@azdias/ui/components/resizable/types";

export function ResizablePanelGroup({ className, ...props }: ResizablePanelGroupProps) {
    return (
        <Group
            data-slot="resizable-panel-group"
            className={cn(
                "flex h-full w-full aria-[orientation=vertical]:flex-col",
                className
            )}
            {...props}
        />
    );
}

export function ResizablePanel({ ...props }: ResizablePanelProps) {
    return <Panel data-slot="resizable-panel" {...props} />;
}

export function ResizablePanelSheet({ children, ...props }: ResizablePanelSheetProps) {
    return (
        <ResizablePanel {...props}>
            <div className="flex flex-col h-full overflow-hidden rounded-xl bg-card border">
                <div className="flex-1 overflow-y-auto">
                    { children }
                </div>
            </div>
        </ResizablePanel>
    );
}

export function ResizableHandle({
    withHandle,
    variant,
    hoverable = false,
    hoverDistance = "md",
    thickness = "sm",
    className,
    ...props
}: ResizableHandleProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const hoverDistanceValue = { sm: 20, md: 50, lg: 100 }[hoverDistance];

    const thicknessClassName = {
        sm: (
            "aria-[orientation=vertical]:w-px aria-[orientation=vertical]:before:w-px "
            + "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:before:h-px"
        ),
        md: (
            "aria-[orientation=vertical]:w-0.5 aria-[orientation=vertical]:before:w-0.5 "
            + "aria-[orientation=horizontal]:h-0.5 aria-[orientation=horizontal]:before:h-0.5"
        ),
        lg: (
            "aria-[orientation=vertical]:w-1 aria-[orientation=vertical]:before:w-1 "
            + "aria-[orientation=horizontal]:h-1 aria-[orientation=horizontal]:before:h-1"
        ),
    }[thickness];

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            const element = ref.current;
            if (!element) {
                return;
            }

            const rect = element.getBoundingClientRect();

            const isVertical = element.getAttribute("aria-orientation") === "vertical";

            const distance = isVertical
                ? Math.abs(e.clientX - (rect.left + rect.width / 2))
                : Math.abs(e.clientY - (rect.top + rect.height / 2));

            const withinBounds = isVertical
                ? e.clientY >= rect.top && e.clientY <= rect.bottom
                : e.clientX >= rect.left && e.clientX <= rect.right;

            setIsHovered(withinBounds && distance <= hoverDistanceValue * 2.5);
        }

        function handleMouseLeaveDom() {
            setIsHovered(false);
        }

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeaveDom);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeaveDom);
        };
    }, [hoverDistanceValue, props]);

    return (
        <Separator
            elementRef={ref}
            data-slot="resizable-handle"
            data-variant={variant}
            data-hovered={isHovered}
            className={cn(
                resizableHandleVariants({ variant }),
                thicknessClassName,
                (
                    hoverable
                        ? "data-[separator=active]:before:bg-ring data-[separator=active]:[&_div]:bg-ring "
                        + "transition-opacity ease-in-out duration-200 opacity-0 data-[hovered=true]:opacity-100 "
                        + "focus-visible:opacity-100"
                        : ""
                ),
                className
            )}
            {...props}
        >
            {withHandle && (
                <div className="z-10 flex h-6 w-1 shrink-0 rounded-lg bg-border" />
            )}
        </Separator>
    );
}
