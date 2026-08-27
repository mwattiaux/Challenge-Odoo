import { useState, useRef, useCallback, useEffect } from 'react';
import type { MouseEvent } from 'react';
import './FleeingButtonPuzzle.css';

export const FLEEING_BUTTON_FLAG = "Hey you cheated !";

const FLEE_RADIUS = 100;
const BTN_W = 140;
const BTN_H = 44;

export default function FleeingButtonPuzzle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 40, y: 40 });
  const [solved, setSolved] = useState(false);

  const handleClick = useCallback(() => setSolved(true), []);

  useEffect(() => {
    if (btnRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).__domaine = btnRef.current;
    }
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPos((prev) => {
      const btnCenterX = prev.x + BTN_W / 2;
      const btnCenterY = prev.y + BTN_H / 2;
      const dist = Math.hypot(mouseX - btnCenterX, mouseY - btnCenterY);

      if (dist > FLEE_RADIUS) return prev;

      const angle = Math.atan2(btnCenterY - mouseY, btnCenterX - mouseX);
      let nx = prev.x + Math.cos(angle) * 90;
      let ny = prev.y + Math.sin(angle) * 90;

      const maxX = rect.width - BTN_W;
      const maxY = rect.height - BTN_H;
      if (nx < 0) nx = maxX;
      if (nx > maxX) nx = 0;
      if (ny < 0) ny = maxY;
      if (ny > maxY) ny = 0;

      return { x: nx, y: ny };
    });
  };

  return (
    <div className="fleeing-button-puzzle">
      <div ref={containerRef} onMouseMove={handleMouseMove} className="fleeing-button-arena">
        <button
          id="fleeing-btn"
          ref={btnRef}
          onClick={handleClick}
          className="fleeing-button"
          style={{ left: pos.x, top: pos.y, width: BTN_W, height: BTN_H }}
        >
          I am ... evitable
        </button>
      </div>

      {solved && <div className="fleeing-button-flag">🎉 {FLEEING_BUTTON_FLAG}</div>}
    </div>
  );
}
