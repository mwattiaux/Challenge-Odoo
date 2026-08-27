import DungeonDoor from "./DungeonDoor";
import "./dungeon.css";

export default function DungeonChallenge() {
    return (
        <main className="dungeon-theme dungeon-page">
            <div className="dungeon-container">

                <header className="dungeon-header">
                    <h1 className="dungeon-title">
                        The Treasure Door
                    </h1>

                    <div className="dungeon-introduction">
                        <p>
                            You are adventurers exploring an ancient dungeon.
                        </p>

                        <p>
                            After a brutal fight, you have finally defeated
                            the guardian of this place.
                        </p>

                        <p>
                            Behind this door lies the greatest treasure of
                            your adventuring career.
                        </p>

                        <p className="dungeon-objective">
                            There is only one thing left to do: open the door.
                        </p>
                    </div>
                </header>

                <DungeonDoor />

                <section className="dungeon-information">

                    <div className="dungeon-panel">
                        <p className="dungeon-label">
                            What you know
                        </p>

                        <ul className="dungeon-info-list">
                            <li>• The guardian protected this door.</li>
                            <li>• The treasure is behind it.</li>
                            <li>• The door looks suspiciously complicated.</li>
                        </ul>
                    </div>

                    <div className="dungeon-terminal">
                        <p>&gt; analyse door</p>
                        <p>Material: ancient oak</p>
                        <p>Runes: suspicious - Probably powerful</p>
                        <p>Lock: extremely suspicious</p>
                    </div>
                </section>
            </div>
        </main>
    );
}