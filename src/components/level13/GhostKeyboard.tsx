import { useRef, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GhostKeyboard.css';

const TARGET_PHRASE = "I solemnly swear I am up to no good";

function remapChar(char: string): string {
    if (!/^[a-zA-Z]$/.test(char)) return char;
    const isUpper = char === char.toUpperCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const shuffled = [...alphabet].sort(() => Math.random() - 0.5);
    const mapped = shuffled[alphabet.indexOf(char.toLowerCase())];
    return isUpper ? mapped.toUpperCase() : mapped;
}

// Rendu de la phrase dans un canvas — non sélectionnable, non copiable
function PhraseCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const W = canvas.offsetWidth;
        const H = 60;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.scale(dpr, dpr);

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#f8f4f7';
        ctx.roundRect(0, 0, W, H, 10);
        ctx.fill();

        ctx.font = 'bold 18px monospace';
        ctx.fillStyle = '#714b67';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`"${TARGET_PHRASE}"`, W / 2, H / 2);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="phrase-canvas"
            style={{ width: '100%', height: '60px', display: 'block', borderRadius: '10px', border: '2px solid #714b67' }}
        />
    );
}

interface GhostKeyboardProps {
    onSuccess: () => void;
    nextRoute: string;
}

export default function GhostKeyboard({ onSuccess, nextRoute }: GhostKeyboardProps) {
    const [value, setValue] = useState('');
    const [shake, setShake] = useState(false);
    const [solved, setSolved] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Bloque paste partout sur la page
    useEffect(() => {
        if (solved) return;
        const blockPaste = (e: ClipboardEvent) => {
            e.preventDefault();
            e.stopImmediatePropagation();
        };
        const blockCopy = (e: ClipboardEvent) => {
            e.preventDefault();
            e.stopImmediatePropagation();
        };
        document.addEventListener('paste', blockPaste, true);
        document.addEventListener('copy', blockCopy, true);
        return () => {
            document.removeEventListener('paste', blockPaste, true);
            document.removeEventListener('copy', blockCopy, true);
        };
    }, [solved]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
        // Bloque Ctrl+C, Ctrl+V, Ctrl+A, Ctrl+X explicitement
        if ((e.ctrlKey || e.metaKey) && ['c', 'v', 'a', 'x'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            return;
        }
        if (e.ctrlKey || e.metaKey) return;

        if (e.key === 'Backspace') {
            e.preventDefault();
            setValue(prev => prev.slice(0, -1));
            return;
        }

        if (e.key === 'Delete') {
            e.preventDefault();
            setValue('');
            return;
        }

        if (e.key.length !== 1) return;

        e.preventDefault();
        const fakeChar = remapChar(e.key);
        setValue(prev => prev + fakeChar);
        setShake(true);
        setTimeout(() => setShake(false), 400);
    }, []);

    // Vérifie si la valeur tapée correspond (après remapping, ce sera quasi impossible — c'est voulu)
    // La seule vraie vérification se fait via une action spéciale, ici on laisse le keyboard fantôme
    // impossible à résoudre par hasard, et on expose un bouton secret si la valeur exacte est entrée
    useEffect(() => {
        if (value === TARGET_PHRASE && !solved) {
            setSolved(true);
            onSuccess();
            setTimeout(() => navigate(nextRoute), 1500);
        }
    }, [value, solved, onSuccess, navigate, nextRoute]);

    return (
        <div className="ghost-keyboard-wrapper">
            <p className="ghost-keyboard-prompt">Type exactly this phrase:</p>
            <PhraseCanvas />
            <p className="ghost-keyboard-hint">
                🎹 The keyboard doesn't quite cooperate...
            </p>
            <input
                ref={inputRef}
                className={`ghost-keyboard-input ${shake ? 'ghost-shake' : ''} ${solved ? 'ghost-solved' : ''}`}
                value={value}
                onKeyDown={handleKeyDown}
                onChange={() => {}}
                placeholder="Start typing..."
                disabled={solved}
                spellCheck={false}
                autoComplete="off"
                autoFocus
            />
            {value.length > 0 && !solved && (
                <p className="ghost-keyboard-chaos">
                    💀 That's definitely not what you pressed...
                </p>
            )}
            {solved && (
                <p className="ghost-keyboard-success">
                    ✅ Mischief managed! Moving on...
                </p>
            )}
        </div>
    );
}