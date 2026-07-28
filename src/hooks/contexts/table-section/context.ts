import { createContext } from "react";
import type { TableSection } from "@azdias/ui/hooks/contexts/table-section/types";

export const TableSectionContext = createContext<TableSection | undefined>(undefined);
