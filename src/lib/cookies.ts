export function getCookie({ name, source }: { name: string, source?: string }): string | null {
    if (!source && typeof document === "undefined") {
        return null;
    }

    const cookieSource = source ?? document.cookie;

    const cookie = cookieSource.split("; ").find(item =>
        item.startsWith(`${name}=`)
    );

    if (!cookie) {
        return null;
    }

    return decodeURIComponent(cookie.slice(name.length + 1));
}

export function setCookie({ name, value, path = "/", maxAge }: {
    name: string
    value: string
    path?: string
    maxAge?: number
}) {
    const cookie = [
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
        `path=${path}`,
        maxAge !== undefined ? `max-age=${maxAge.toString()}` : null,
        "SameSite=Strict",
    ]
        .filter(Boolean)
        .join("; ");

    document.cookie = cookie;
}
