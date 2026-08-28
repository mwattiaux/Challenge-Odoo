import { useNavigate } from 'react-router-dom';
import LevelTemplate from '../components/LevelTemplate';
import ContentText from '../components/ContentText';
import Hint from '../components/Hint';
import ComponentLabel from '../components/ComponentLabel';
import EvasiveButton from '../components/level2/EvasiveButton';
import SecretTitleTrigger from '../components/level2/SecretTitleTrigger';

interface Level2Props {
    onUnlock: () => void;
}

export default function Level2({ onUnlock }: Level2Props) {
    const navigate = useNavigate();

    const handleSecretClick = () => {
        onUnlock();
        navigate('/odoo-intern-2');
    };

    return (
        <>
            <style>{`
                .level-card form.form-group {
                display: none !important;
                }
            `}</style>

            <SecretTitleTrigger onTrigger={handleSecretClick} />

            <LevelTemplate
                levelNumber={2}
                title="Click on me !"
                subtitle="RTFM: Read The Fine Manual"
                hintTimerDuration={30}

                riddleContent={
                    <>
                        <EvasiveButton label="Click me if you can!" />
                    </>
                }

                // correctAnswer=""
                nextRoute="/odoo-intern-2"

                hints={[
                    <Hint number={9.000}>
                        <ComponentLabel name="Gotch you! 🤡" />
                        <ContentText text="Excellent CS:GO skills, I’m sure. Sadly, they won’t make you finish this one any faster." />
                    </Hint>
                ]}

                onUnlock={onUnlock}
            />
        </>
    );
}