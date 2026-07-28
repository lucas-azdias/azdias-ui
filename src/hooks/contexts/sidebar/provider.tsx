import {
    SIDEBAR_COOKIE_MAX_AGE,
    SIDEBAR_COOKIE_NAME,
    SIDEBAR_KEYBOARD_SHORTCUT,
    SIDEBAR_WIDTH,
    SIDEBAR_WIDTH_ICON,
} from "@azdias/ui/constants/sidebar";
import { SidebarContext } from "@azdias/ui/hooks/contexts/sidebar/context";
import { useIsMobile } from "@azdias/ui/hooks/use-mobile";
import { setCookie } from "@azdias/ui/lib/cookies";
import { cn } from "@azdias/ui/lib/utils";
import {
    useCallback,
    useEffect,
    useMemo,
    useState,
    type CSSProperties,
} from "react";
import type { SidebarContextValue, SidebarProviderProps } from "@azdias/ui/hooks/contexts/sidebar/types";

export function SidebarProvider({
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children,
    ...props
}: SidebarProviderProps) {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === "function" ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            }
            else {
                _setOpen(openState);
            }

            // This sets the cookie to keep the sidebar state
            setCookie({
                name: SIDEBAR_COOKIE_NAME,
                value: openState.toString(),
                maxAge: SIDEBAR_COOKIE_MAX_AGE,
            });
        },
        [setOpenProp, open]
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = useCallback(() => {
        if (isMobile) {
            setOpenMobile(open => !open);
        }
        else {
            setOpen(open => !open);
        }
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === SIDEBAR_KEYBOARD_SHORTCUT
                && (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault();
                toggleSidebar();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = useMemo<SidebarContextValue>(
        () => ({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar,
        }),
        [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
        <SidebarContext.Provider value={contextValue}>
            <div
                data-slot="sidebar-wrapper"
                style={
                    {
                        "--sidebar-width": SIDEBAR_WIDTH,
                        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                        ...style,
                    } as CSSProperties
                }
                className={cn(
                    "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </SidebarContext.Provider>
    );
}
