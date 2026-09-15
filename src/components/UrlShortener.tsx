import { useState, type FormEvent } from "react";

function UrlShortener() {
    const [url, setUrl] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log("Submitted URL: ", url);
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
                        aria-label="URL to shorten"
                        aria-describedby="url-error"
                        placeholder="Shorten a link here..."
                        value={url}
                        onChange={(event) => setUrl(event.target.value)}
                        required
                    />

                    <p
                        id="url-error"
                        className="error-message"
                        aria-live="polite"
                    />
                </div>

                <button
                    type="submit"
                    id="shorten-btn"
                >
                    Shorten It!
                </button>
            </form>

            <div id="shortened-links-container" />
        </section>
    );
}

export default UrlShortener;