import ContentImage from '../components/ContentImage';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';
import LevelTemplate from '../components/LevelTemplate';
import "./Level9.css";

interface Level9Props {
    onUnlock: () => void;
}

export default function Level9({ onUnlock }: Level9Props) {
    return (
        <LevelTemplate
            levelNumber={9}
            title="Nothing to hide"
            subtitle="I dont have anything to hide, but I do have something to show you. Can you find it?"
            hintTimerDuration={10}

            riddleContent={
                <>
                    <ContentImage
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp12537711.jpg"
                        alt="Placeholder"
                    />

                    <div className="nothing-here-box">
                        <p className="rdm-text p-1">g 2 t</p>
                        <p className="rdm-text p-2">Q 1 o</p>
                        <p className="rdm-text p-3">6</p>
                        <p className="rdm-text p-4">i</p>
                    </div>

                </>
            }

            // correctAnswer="Q61go2it"
            nextRoute="/odoo-intern-9"

            hints={[
                <Hint number={1}>
                    <ContentText text="Tone on Tone" />
                </Hint>,
                <Hint number={2}>
                    <ContentText text="Color is the key" />
                </Hint>,
                <Hint number={3}>
                    <ContentText text="The color var is the key" />
                </Hint>,
                <Hint number={4}>
                    <ContentText text="The color var of the tag is the key" />
                </Hint>
            ]}

            onUnlock={onUnlock}
        />
    );
}
