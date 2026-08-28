import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import ContentImage from '../components/ContentImage';
import Hint from '../components/Hint';
import "./Level20.css";

interface Level20Props {
    onUnlock: () => void;
}

export default function Level20({ onUnlock }: Level20Props) {
    return (
        <LevelTemplate
            levelNumber={20}
            title="Always nothing to hide ?"
            subtitle="I still dont have anything to hide, I guess."
            hintTimerDuration={30}

            riddleContent={
                <>
                    <ContentImage
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fwhite-board-colored-markers-alphabet-handrawn-vector-illustration-43541280.jpg"
                        alt="Placeholder"
                    />

                    <p className="test-text ykdtms"></p>
                    <p className="test-text ypiecl"></p>
                    <p className="test-text xxjxgj"></p>
                    <p className="test-text coytum"></p>
                    <p className="test-text ttalxi"></p>
                    <p className="test-text qgyjhh"></p>

                </>
            }

            // correctAnswer="X98G26"
            nextRoute="/level21"

            hints={[
                <Hint number={1}>
                    <ContentText text="More colored ?" />
                </Hint>,
                <Hint number={2}>
                    <ContentText text="All letters are in uppercase" />
                </Hint>,
                <Hint number={3}>
                    <ContentText text="I like the french word ORDinateur" />
                </Hint>,
                <Hint number={4}>
                    <ContentText text="Try sort the sum the ord of each class name" />
                </Hint>
            ]}

            onUnlock={onUnlock}
        />
    );
}
