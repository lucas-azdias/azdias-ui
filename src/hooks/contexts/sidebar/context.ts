import { createContext } from "react";
import type { SidebarContextValue } from "@azdias/ui/hooks/contexts/sidebar/types";

export const SidebarContext = createContext<SidebarContextValue | null>(null);
