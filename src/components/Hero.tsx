import illustrationWorking from '../images/illustration-working.svg'
function Hero() {

    return (
        <section className="hero-container">
            <div className="hero-description-container">
                <h1>More than just shorter links</h1>

                <p>
                    Build your brand&apos;s recognition and get detailed insights on how your links are performing.
                </p>

                <button
                    type="button"
                    id="get-started-btn"
                >
                    Get Started
                </button>
            </div>

            <img
                src={illustrationWorking}
                alt='A person working at a computer'
                id="hero-image"
            />
        </section>
    );
}

export default Hero;