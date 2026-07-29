import { type ComponentProps } from "react";

export interface SidebarContextValue {
    state: "expanded" | "collapsed"
    keyboardShortcut: string
    open: boolean
    setOpen: (open: boolean) => void
    openMobile: boolean
    setOpenMobile: (open: boolean) => void
    isMobile: boolean
    toggleSidebar: () => void
}

export type SidebarProviderProps = ComponentProps<"div">
    & {
        defaultOpen?: boolean
        open?: boolean
        onOpenChange?: (open: boolean) => void
        keyboardShortcut?: string
    };
