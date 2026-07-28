import { MissingProviderError } from "@azdias/ui/hooks/contexts/missing-provider-error";
import { SidebarContext } from "@azdias/ui/hooks/contexts/sidebar/context";
import { use } from "react";

export function useSidebar() {
    const context = use(SidebarContext);

    if (!context) {
        throw new MissingProviderError("useSidebar", "SidebarProvider");
    }

    return context;
}
