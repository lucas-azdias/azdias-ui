import { Button } from "@azdias/ui/components/button";
import { Tabs, TabsContent, TabsTrigger } from "@azdias/ui/components/tabs";
import { Typography } from "@azdias/ui/components/typography";
import { BrowserTabsProvider } from "@azdias/ui/hooks/contexts/browser-tabs/provider";
import { useBrowserTabs } from "@azdias/ui/hooks/contexts/browser-tabs/use";
import { cn } from "@azdias/ui/lib/utils";
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { RestrictToHorizontalAxis } from "@dnd-kit/abstract/modifiers";
import { move } from "@dnd-kit/helpers";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { Plus, X } from "lucide-react";
import { useRef } from "react";
import type {
    BrowserTabsContentProps,
    BrowserTabsListProps,
    BrowserTabsProps,
    BrowserTabsRootProps,
    BrowserTabsTriggerProps,
} from "@azdias/ui/components/browser-tabs/types";

export function BrowserTabs({ defaultNewTab, activeTab, startingTabs, children, ...props }: BrowserTabsProps) {
    return (
        <BrowserTabsProvider
            defaultNewTab={defaultNewTab}
            activeTab={activeTab}
            startingTabs={startingTabs}
        >
            <BrowserTabsRoot {...props}>
                {children}
            </BrowserTabsRoot>
        </BrowserTabsProvider>
    );
}

export function BrowserTabsList({ className, ...props }: BrowserTabsListProps) {
    const { tabs, setTabs, addTab, closeTab } = useBrowserTabs();
    const scrollRef = useRef<HTMLDivElement>(null);
    const draggingContainerRef = useRef<HTMLDivElement>(null);

    return (
        <DragDropProvider
            modifiers={defaults => [...defaults, RestrictToHorizontalAxis]}
            onDragEnd={(event) => {
                if (event.canceled) return;

                const { source, target } = event.operation;

                if (!source || !target) return;

                if (source.id !== target.id) {
                    setTabs(items => move(items, event));
                }
            }}
        >
            <div
                className={
                    "flex gap-1 items-center group-data-horizontal/tabs:w-full group-data-vertical/tabs:flex-col "
                    + "group-data-vertical/tabs:h-full"
                }
            >
                <div
                    ref={scrollRef}
                    className={
                        "group-data-vertical/tabs:self-start group-data-vertical/tabs:max-w-fit overflow-x-auto "
                        + "overflow-y-hidden group-data-vertical/tabs:overflow-y-auto "
                        + "group-data-vertical/tabs:overflow-x-hidden scroll-fade-x "
                        + "group-data-vertical/tabs:scroll-fade-y no-scrollbar flex gap-1 justify-start items-center "
                        + "group-data-vertical/tabs:flex-col overscroll-contain"
                    }
                    onWheel={(event) => {
                        const container = scrollRef.current;
                        if (!container) return;

                        const isVertical = (
                            container.closest("[data-slot=\"browser-tabs\"]")?.getAttribute("data-orientation")
                            === "vertical"
                        );

                        const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;

                        if (delta === 0) return;

                        if (isVertical) {
                            container.scrollTop += delta;
                        }
                        else {
                            container.scrollLeft += delta;
                        }
                    }}
                >
                    <TabsPrimitive.List
                        data-slot="browser-tabs-list"
                        ref={draggingContainerRef}
                        className={cn(
                            "group/tabs-list flex min-w-max gap-1 justify-start items-end "
                            + "text-muted-foreground group-data-horizontal/tabs:h-6 group-data-vertical/tabs:min-h-max "
                            + "group-data-vertical/tabs:min-w-auto group-data-vertical/tabs:flow-col "
                            + "bg-transparent",
                            className
                        )}
                        {...props}
                    >
                        {tabs.map((tab, index) => (
                            <BrowserTabsTrigger
                                key={tab.id}
                                index={index}
                                value={tab.id}
                                title={tab.title}
                                icon={tab.icon}
                                onClose={() => { closeTab(tab.id); }}
                            />
                        ))}
                    </TabsPrimitive.List>
                </div>
                <div
                    className={
                        "flex items-center "
                        + "group-data-horizontal/tabs:h-full group-data-horizontal/tabs:justify-center "
                        + "group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start"
                    }
                >
                    <Button
                        size="icon-xs"
                        variant="ghost"
                        className="size-6 rounded-sm"
                        onClick={() => { addTab(); }}
                    >
                        <Plus className="size-3.5" />
                    </Button>
                </div>
            </div>
        </DragDropProvider>
    );
}

export function BrowserTabsContent({ ...props }: BrowserTabsContentProps) {
    const { tabs } = useBrowserTabs();

    return (
        <div {...props}>
            {tabs.map(tab => (
                <TabsContent key={tab.id} value={tab.id}>
                    {tab.content}
                </TabsContent>
            ))}
        </div>
    );
}

function BrowserTabsRoot({ className, ...props }: BrowserTabsRootProps) {
    const { active, setActive } = useBrowserTabs();

    return (
        <Tabs
            data-slot="browser-tabs"
            value={active}
            onValueChange={setActive}
            className={cn("gap-1.5", className)}
            {...props}
        />
    );
}

function BrowserTabsTrigger(
    { title, icon: Icon, onClose, index, value, className, ...props }: BrowserTabsTriggerProps
) {
    const { ref, isDragging } = useSortable({ id: value, index: index });

    return (
        <TabsTrigger
            data-slot="browser-tabs-trigger"
            ref={ref}
            value={value}
            className={cn(
                "group/tabs-trigger justify-between h-full flex flex-row-reverse gap-1.5 pl-2 pr-0.5 rounded-sm "
                + "border-none w-40 min-w-40 bg-muted/30 data-active:bg-muted dark:data-active:bg-muted "
                + "group-data-[variant=line]/tabs-list:data-active:bg-muted",
                "static", // Fix weird upward push from 'dnd' library after drag and drop
                isDragging ? "dragging" : "",
                className
            )}
            {...props}
        >
            <Button
                render={<div />}
                nativeButton={false}
                variant="ghost"
                size="icon-xs"
                className={
                    "rounded-sm opacity-0 group-data-active/tabs-trigger:opacity-50 "
                    + "group-hover/tabs-trigger:opacity-50 hover:opacity-100 focus-visible:opacity-100 "
                    + "focus-visible:outline-solid flex justify-center items-center"
                }
                onClick={onClose}
            >
                <X className="size-3.5" />
            </Button>
            <div className="flex min-w-0 flex-1 flex-row items-center gap-1.5">
                {Icon && <Icon className="size-4" />}
                <Typography level="span" truncate>{title}</Typography>
            </div>
        </TabsTrigger>
    );
}
