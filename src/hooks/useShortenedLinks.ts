import { useEffect, useState } from "react";
import type { ShortenedLink } from "../models/ShortenedLink";
import { loadLinks, saveLinks } from "../utils/storage";
import { BitlyClient } from "../services/BitlyClient";

const USE_MOCK = false;

export function useShortenedLinks() {
    const [links, setLinks] = useState<ShortenedLink[]>(loadLinks);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        saveLinks(links);
    }, [links]);

    async function shortenUrl(longUrl: string) {
        setIsLoading(true);

        try {
            let shortenedLink: ShortenedLink;

            if (USE_MOCK) {
                shortenedLink = {
                    long_url: longUrl,
                    link: `https://bit.ly/${crypto.randomUUID().slice(0, 7)}`,
                };
            } else {
                const client = new BitlyClient();

                shortenedLink = await client.shorten(longUrl);
            }

            setLinks((previousLinks) => [
                ...previousLinks,
                shortenedLink,
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        links,
        shortenUrl,
        isLoading,
    };
}