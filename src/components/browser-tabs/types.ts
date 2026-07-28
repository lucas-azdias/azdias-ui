import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { type LucideIcon } from "lucide-react";
import { type ComponentProps } from "react";
import type { TabsProps, TabsTriggerProps } from "@azdias/ui/components/tabs/types";
import type { BrowserTabsProviderProps } from "@azdias/ui/hooks/contexts/browser-tabs/types";

export type BrowserTabsProps = TabsProps & Omit<BrowserTabsProviderProps, "children">;

export type BrowserTabsRootProps = TabsProps;

export type BrowserTabsListProps = Omit<TabsPrimitive.List.Props, "children">;

export type BrowserTabsTriggerProps = Omit<TabsTriggerProps, "children" | "value">
    & {
        value: string
        index: number
        title: string
        icon?: LucideIcon
        onClose: () => void
    };

export type BrowserTabsContentProps = Omit<ComponentProps<"div">, "children">;
