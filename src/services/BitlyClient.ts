import { ApiError } from "../utils/errorHandler";
import type { ShortenedLink } from "../models/ShortenedLink";

 interface BitlyErrorResponse {
    message?: string;
    description?: string;
}

export class BitlyClient {
    private readonly endpoint = "/.netlify/functions/shorten";


    async shorten(longUrl: string): Promise<ShortenedLink> {
        const response = await fetch(this.endpoint, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                long_url: longUrl,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            const errorData = data as BitlyErrorResponse;

            throw new ApiError(
                errorData.description ||
                    errorData.message ||
                    "Bitly could not shorten this URL.",
                response.status
            );
        }

        return data as ShortenedLink;
    }
}