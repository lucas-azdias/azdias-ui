import { BrowserTabsContext } from "@azdias/ui/hooks/contexts/browser-tabs/context";
import { MissingProviderError } from "@azdias/ui/hooks/contexts/missing-provider-error";
import { use } from "react";

export const useBrowserTabs = () => {
    const context = use(BrowserTabsContext);

    if (!context) {
        throw new MissingProviderError("useBrowserTabs", "BrowserTabsProvider");
    }

    return context;
};
