import brandRecognition from '../images/icon-brand-recognition.svg'
import detailedRecords from '../images/icon-detailed-records.svg'
import fullyCustomizable from '../images/icon-fully-customizable.svg'

function Statistics() {
    return (
        <section className="more-information-container" id="features">
            <div className="advanced-stats-container">
                <h3>Advanced Statistics</h3>

                <p>
                Track how your links are performing across the web with our advanced
                statistics dashboard.
                </p>
            </div>

            <div className="recognition-records-customizable-containers">
                <div className="connecting-line" aria-hidden="true" />

                <article className="stat-card brand-recognition-card">
                <div className="icon-background" id="brand-recognition">
                    <img
                    src={brandRecognition}
                    alt=""
                    aria-hidden="true"
                    />
                </div>

                <h5>Brand Recognition</h5>

                <p>
                    Boost your brand recognition with each click. Generic links
                    don&apos;t mean a thing. Branded links help instil confidence in
                    your content.
                </p>
                </article>

                <article className="stat-card detailed-records-card">
                <div className="icon-background" id="detailed-records">
                    <img
                    src={detailedRecords}
                    alt=""
                    aria-hidden="true"
                    />
                </div>

                <h5>Detailed Records</h5>

                <p>
                    Gain insights into who is clicking your links. Knowing when and
                    where people engage with your content helps inform better
                    decisions.
                </p>
                </article>

                <article className="stat-card fully-customizable-card">
                <div className="icon-background" id="fully-customizable">
                    <img
                    src={fullyCustomizable}
                    alt=""
                    aria-hidden="true"
                    />
                </div>

                <h5>Fully Customizable</h5>

                <p>
                    Improve brand awareness and content discoverability through
                    customizable links, supercharging audience engagement.
                </p>
                </article>
            </div>
        </section>
    );
}

export default Statistics;