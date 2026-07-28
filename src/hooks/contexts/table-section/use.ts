import { MissingProviderError } from "@azdias/ui/hooks/contexts/missing-provider-error";
import { TableSectionContext } from "@azdias/ui/hooks/contexts/table-section/context";
import { use } from "react";

export const useTableSection = () => {
    const context = use(TableSectionContext);

    if (!context) {
        throw new MissingProviderError("useTableSection", "TableSectionProvider");
    }

    return context;
};
