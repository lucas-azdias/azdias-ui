import { type ReactNode } from "react";

export type TableSection = "header" | "body";

export interface TableSectionProviderProps {
    value: TableSection
    children: ReactNode
}
