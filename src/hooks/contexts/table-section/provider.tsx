import { TableSectionContext } from "@azdias/ui/hooks/contexts/table-section/context";
import type { TableSectionProviderProps } from "@azdias/ui/hooks/contexts/table-section/types";

export function TableSectionProvider({ value, children }: TableSectionProviderProps) {
    return (
        <TableSectionContext.Provider value={value}>
            {children}
        </TableSectionContext.Provider>
    );
}
