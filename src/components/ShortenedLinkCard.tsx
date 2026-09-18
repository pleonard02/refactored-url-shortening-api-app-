import { useState } from "react";
import type { ShortenedLink } from "../models/ShortenedLink";

interface ShortenedLinkCardProps {
    link: ShortenedLink;
}

function ShortenedLinkCard({ link }: ShortenedLinkCardProps) {

    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try{
            await navigator.clipboard.writeText(link.link);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch {
            setCopied(false);
        }
    }


    return (
        <div className="mt-4 w-full min-w-0 overflow-hidden rounded-md bg-white md:flex md:items-center md:px-6 md:py-4">
            <p className="min-w-0 truncate border-b px-4 py-3 md:flex-1 md:border-b-0 md:px-0 md:py-0">
                {link.long_url}
            </p>

            <div className="flex min-w-0 flex-col gap-3 px-4 py-3 md:ml-6 md:flex-row md:items-center md:p-0">
                <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-[#2ACFCF]"
                >
                    {link.link}
                </a>

                <button
                    type="button"
                    onClick={handleCopy}
                    className={`rounded-md px-6 py-2 font-bold text-white md:ml-3 ${
                        copied
                            ? "bg-[#3b3054]"
                            : "bg-[#2ACFCF] hover:bg-[#9BE4E4]"
                    }`}
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
        </div>
    );
}

export default ShortenedLinkCard;