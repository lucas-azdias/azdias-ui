import { Button } from "@azdias/ui/components/button";
import { TypographyCodeBlock, TypographyInlineCode } from "@azdias/ui/components/typography";
import { cn } from "@azdias/ui/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import type {
    CopyableButtonProps,
    CopyableCodeBlockProps,
    CopyableInlineCodeProps,
} from "@azdias/ui/components/copyable/types";

function useCopy() {
    const [copied, setCopied] = useState(false);

    const copy = async (value: string) => {
        await navigator.clipboard.writeText(value);

        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
}

export function CopyableButton({ value, size = "default", className, children, ...props }: CopyableButtonProps) {
    const { copied, copy } = useCopy();

    const iconClass = size === "lg" || size === "icon-lg" ? "size-5" : "size-4";

    return (
        <div
            className={cn("flex", className)}
            data-copied={copied}
            {...props}
        >
            <Button
                size={size}
                className="flex flex-row items-center gap-1 cursor-pointer"
                onClick={() => void copy(value)}
            >
                {children}
                {copied ? <Check className={iconClass} /> : <Copy className={iconClass} />}
            </Button>
        </div>
    );
}

export function CopyableInlineCode({ value, size = "sm", className, children, ...props }: CopyableInlineCodeProps) {
    const { copied, copy } = useCopy();

    const textClass = size === "sm" ? "text-md" : "text-4xl";
    const iconClass = size === "sm" ? "size-4" : "size-5";

    return (
        <div
            className={cn("flex", className)}
            data-copied={copied}
            {...props}
        >
            <TypographyInlineCode
                className={cn(
                    "flex flex-row items-center px-2 gap-1.5 cursor-pointer",
                    textClass
                )}
                onClick={() => void copy(value)}
            >
                {children}
                {copied ? <Check className={iconClass} /> : <Copy className={iconClass} />}
            </TypographyInlineCode>
        </div>
    );
}

export function CopyableCodeBlock({ value, enumeratedLines, className, children, ...props }: CopyableCodeBlockProps) {
    const { copied, copy } = useCopy();

    return (
        <div
            className={cn("relative", className)}
            data-copied={copied}
            {...props}
        >
            <Button
                size="icon"
                variant="secondary"
                className="absolute top-2 right-2 z-10 cursor-pointer"
                onClick={() => void copy(value)}
            >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </Button>
            <TypographyCodeBlock
                enumeratedLines={enumeratedLines}
            >
                {children}
            </TypographyCodeBlock>
        </div>
    );
}
