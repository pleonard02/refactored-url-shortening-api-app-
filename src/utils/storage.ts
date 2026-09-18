import type { ShortenedLink } from "../models/ShortenedLink";

const STORAGE_KEY = "shortened-links";

export function saveLinks(links: ShortenedLink[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function loadLinks(): ShortenedLink[] {
    const storedLinks = localStorage.getItem(STORAGE_KEY);

    if (!storedLinks) {
        return [];
    }

    try {
        return JSON.parse(storedLinks) as ShortenedLink[];
    } catch {
        return [];
    }
}