import { useRef, useState } from 'react';
import './EvasiveButton.css';

interface EvasiveButtonProps {
    label?: string;
}

export default function EvasiveButton({ label = "Click me!" }: EvasiveButtonProps) {
    const playgroundRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLButtonElement>(null);
    const [pos, setPos] = useState<{ top: string; left: string }>({ top: '50%', left: '50%' });

    const flee = () => {
        const playground = playgroundRef.current;
        const btn = btnRef.current;
        if (!playground || !btn) return;

        const { width, height } = playground.getBoundingClientRect();
        const btnW = btn.offsetWidth;
        const btnH = btn.offsetHeight;

        const margin = 8;
        const newLeft = margin + Math.random() * (width - btnW - margin * 2);
        const newTop = margin + Math.random() * (height - btnH - margin * 2);

        setPos({
            left: `${newLeft}px`,
            top: `${newTop}px`,
        });
    };

    return (
        <div className="evasive-playground" ref={playgroundRef}>
            <button
                ref={btnRef}
                className="evasive-btn"
                style={{ top: pos.top, left: pos.left, transform: 'none' }}
                onMouseEnter={flee}
                onFocus={flee}
            >
                {label}
            </button>
        </div>
    );
}