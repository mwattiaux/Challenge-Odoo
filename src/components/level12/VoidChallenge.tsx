export default function VoidChallenge() {
    return (
        <section className="void-challenge">
            <header className="void-header">
                <p className="void-eyebrow">
                    The Void
                </p>

                <h2 className="void-title">
                    There is nothing here.
                </h2>

                <p className="void-subtitle">
                    Or is there?
                </p>
            </header>

            <div
                className="void-space"
                data-state="empty"
                data-content="nothing"
                data-todo={"TODO: - remove this before production\n" +
                    "                    Password hint:\n" +
                    "                    \"Where there is nothing,\n" +
                    "                     something is still there.\"\n" +
                    "                    *********\n" +
                    "                    Also Linkin Park write a song about this machinery..."}
            >

                <div
                    className="void-hidden-marker"
                    aria-hidden="true"
                    data-length="9"
                />
            </div>

            <footer className="void-footer">
                <p>
                    Somewhere on this page lies the answer.
                </p>
            </footer>
        </section>
    );
}