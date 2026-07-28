import { BrowserTabsContext } from "@azdias/ui/hooks/contexts/browser-tabs/context";
import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import type {
    BrowserTab,
    BrowserTabIdentified,
    BrowserTabsContextValue,
    BrowserTabsProviderProps,
} from "@azdias/ui/hooks/contexts/browser-tabs/types";

export function BrowserTabsProvider({ defaultNewTab, activeTab, startingTabs, children }: BrowserTabsProviderProps) {
    const identifyTab = useCallback<(tab: BrowserTab) => BrowserTabIdentified>((tab: BrowserTab) => (
        { ...tab, id: uuidv4() }
    ), []);

    const identifiedStartingTabs = startingTabs?.map(tab => identifyTab(tab));

    const [tabs, setTabs] = useState(
        identifiedStartingTabs && identifiedStartingTabs.length > 0
            ? identifiedStartingTabs
            : [identifyTab(defaultNewTab)]
    );
    const [active, setActive] = useState((tabs[activeTab ?? 0] ?? tabs[0]).id);

    const addTab = useCallback((tab?: BrowserTab) => {
        const newTab = identifyTab(tab ?? defaultNewTab);
        setTabs(t => [...t, newTab]);
        setActive(newTab.id);
    }, [defaultNewTab, identifyTab]);

    const closeTab = useCallback((id: string) => {
        setTabs((currentTabs) => {
            const currentIndex = currentTabs.findIndex(tab => tab.id === id);
            const newTabs = currentTabs.filter(tab => tab.id !== id);

            setActive(active); // Refresh active on closing one tab

            // If no tabs left, add a default and set it as active
            if (newTabs.length === 0) {
                const newTab = identifyTab(defaultNewTab);
                setActive(newTab.id);
                return [newTab];
            }

            // Change active if closed tab is active tab
            if (active === id) {
                setActive(newTabs[currentIndex]?.id ?? newTabs[currentIndex - 1].id);
            }

            return newTabs;
        });
    }, [active, defaultNewTab, identifyTab]);

    const contextValue = useMemo<BrowserTabsContextValue>(
        () => ({
            tabs,
            active,
            setTabs,
            setActive,
            addTab,
            closeTab,
        }),
        [tabs, active, setTabs, setActive, addTab, closeTab]
    );

    return (
        <BrowserTabsContext.Provider value={contextValue}>
            {children}
        </BrowserTabsContext.Provider>
    );
}
