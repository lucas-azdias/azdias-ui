import { type LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

export interface BrowserTab {
    title: string
    icon?: LucideIcon
    content: ReactNode
}

export type BrowserTabIdentified = BrowserTab
    & {
        id: string
    };

export interface BrowserTabsContextValue {
    tabs: BrowserTabIdentified[]
    active: string

    setTabs: (updater: (tabs: BrowserTabIdentified[]) => BrowserTabIdentified[]) => void
    setActive: (id: string) => void
    addTab: (tab?: BrowserTab) => void
    closeTab: (id: string) => void
    modifyTab: (tab: BrowserTab, id?: string) => void
}

export interface BrowserTabsProviderProps {
    defaultNewTab: BrowserTab
    activeTab?: number
    startingTabs?: BrowserTab[]
    children: ReactNode
}
