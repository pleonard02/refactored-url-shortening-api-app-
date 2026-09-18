/// <reference types="node" />
export default async (request: Request) => {
    try {
        const { long_url } = await request.json();

        const token = process.env.BITLY_TOKEN;

        if (!token) {
            return new Response(
                JSON.stringify({ message: "Bitly token is not configured." }),
                { status: 500 }
            );
        }

        const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                long_url,
            }),
        });

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: response.status,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch {
        return new Response(
            JSON.stringify({ message: "Unable to shorten URL." }),
            { status: 500 }
        );
    }
};