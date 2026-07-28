import { createContext } from "react";
import type { BrowserTabsContextValue } from "@azdias/ui/hooks/contexts/browser-tabs/types";

export const BrowserTabsContext = createContext<BrowserTabsContextValue | undefined>(undefined);
