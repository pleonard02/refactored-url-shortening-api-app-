import { useState, type FormEvent } from "react";
import { validateUrl, UrlValidationError, ApiError } from "../utils/errorHandler";
import { useShortenedLinks } from "../hooks/useShortenedLinks";
import ShortenedLinkCard from "./ShortenedLinkCard";

function UrlShortener() {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const { links, shortenUrl, isLoading } = useShortenedLinks();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const validUrl = validateUrl(url);

            setError("");

            await shortenUrl(validUrl);
            setUrl(""); 

        } catch (error) {
            if (error instanceof UrlValidationError) {
                setError(error.message);
            } else if (error instanceof ApiError) {
                setError(error.message);
            } else {
                setError("Something went wrong. Please try again.");
            }
        }
    }

    return (
        <section aria-label="URL shortener">
            <form
                className="shorten-url-container"
                id="shorten-form"
                noValidate
                onSubmit={handleSubmit}
            >
                <div className="shorten-input-group">
                    <input
                        type="url"
                        name="shorten-link"
                        id="shorten-link"
                        className={error ? "input-error" : ""}
                        aria-label="URL to shorten"
                        aria-describedby={error ? "url-error" : undefined}
                        aria-invalid={error ? true : undefined}
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                        required
                    />

                    <p
                        id="url-error"
                        className="error-message"
                        aria-live="polite"
                    >
                        {error}
                    </p>
                </div>

                <button
                    type="submit"
                    id="shorten-btn"
                    disabled={isLoading}
                >
                    {isLoading ? "Shortening..." : "Shorten It!"}
                </button>
            </form>

            <div 
                id="shortened-links-container"
                className="mx-auto w-full min-w-0 max-w-[1110px] px-6 md:px-0"
            >
                {links.map((link) => (
                    <ShortenedLinkCard
                        key={link.link}
                        link={link}
                    />
                ))}
            </div>
        </section>
    );
}

export default UrlShortener;