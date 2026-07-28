import { type ComponentPropsWithoutRef } from "react";

interface LevelElementMap {
    h1: "h1"
    h2: "h2"
    h3: "h3"
    h4: "h4"
    lead: "p"
    large: "div"
    p: "p"
    span: "span"
    small: "small"
}

type MutedLevel = "p" | "span" | "small";
type GutterBottomLevel = Exclude<keyof LevelElementMap, "span" | "small">;

export type TypographyProps<L extends keyof LevelElementMap = keyof LevelElementMap>
    = {
        level: L
        truncate?: boolean
        align?: "left" | "right" | "center" | "justify"
    }
    & (L extends MutedLevel ? { muted?: boolean } : { muted?: never })
    & (L extends GutterBottomLevel ? { gutterBottom?: boolean } : { gutterBottom?: never })
    & ComponentPropsWithoutRef<LevelElementMap[L]>;
