"use client";

import { useState } from "react";

export default function DungeonDoor() {
    const [opened, setOpened] = useState(false);

    function handleOpenDoor() {
        setOpened(true);
    }

    return (
        <section className="dungeon-door-scene">

            <div
                className={`dungeon-door-frame ${
                    opened ? "dungeon-door-frame--opened" : ""
                }`}
            >
                <div
                    className={`dungeon-door ${
                        opened ? "dungeon-door--opened" : ""
                    }`}
                >
                    {/* Wooden planks */}
                    {Array.from({ length: 7 }).map((_, index) => (
                        <div
                            key={index}
                            className="dungeon-wood-plank"
                            style={{
                                left: `${(index / 7) * 100}%`,
                            }}
                        />
                    ))}

                    <div className="dungeon-iron-bar dungeon-iron-bar--top" />
                    <div className="dungeon-iron-bar dungeon-iron-bar--bottom" />

                    {/* Fake rune */}
                    <div className="dungeon-rune">
                        <span title="Probably very important.">
                            ᚱ
                        </span>

                        <span className="dungeon-rune-symbol dungeon-rune-symbol--top">
                            ᚠ
                        </span>

                        <span className="dungeon-rune-symbol dungeon-rune-symbol--bottom">
                            ᛏ
                        </span>
                    </div>

                    {/* Fake Roman numeral */}
                    <div
                        className="dungeon-roman-numeral"
                        data-cipher="XIII"
                        title="XIII"
                    >
                        XIII
                    </div>

                    {/* Fake skull */}
                    <button
                        type="button"
                        className="dungeon-fake-skull"
                        aria-label="Suspicious skull"
                        title="Its eyes seem suspicious..."
                    >
                        💀
                    </button>

                    {/* Fake keyhole */}
                    <button
                        type="button"
                        className="dungeon-fake-keyhole"
                        aria-label="Ancient keyhole"
                    >
                        🗝️
                    </button>

                    {/* Fake inscription */}
                    <div
                        className="dungeon-inscription"
                        data-inscription="Gur qbbe vf abg ybpxrq"
                    >
                        ᚹ ᛟ ᚱ ᚦ ᚤ ᚷ ᚢ ᚨ ᚱ ᛞ
                    </div>

                    {/*
                        The solution is disappointingly physical.
                    */}

                    <button
                        type="button"
                        onClick={handleOpenDoor}
                        aria-label="Door handle"
                        data-object="ordinary-door-handle"
                        className="dungeon-handle"
                    >
                        <span className="dungeon-handle-base" />
                    </button>

                    <div
                        className="ancient-whisper"
                        aria-hidden="true"
                    />
                </div>
            </div>

            {opened && (
                <div className="dungeon-door-result">
                    <p className="dungeon-door-result__sound">
                        *click*
                    </p>

                    <h2 className="dungeon-door-result__title">
                        The door opens.
                    </h2>

                    <p className="dungeon-door-result__text">
                        Seriously, that's it.
                    </p>

                    <p className="dungeon-door-result__answer">
                        The word you are looking for is:
                        <strong> I OPEN THE DOOR </strong>
                    </p>
                </div>
            )}

            <div className="dungeon-floor-shadow" />

        </section>
    );
}