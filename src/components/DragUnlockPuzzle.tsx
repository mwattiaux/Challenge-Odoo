import { useState } from 'react';
import type { DragEvent, ReactNode } from 'react';
import './DragUnlockPuzzle.css';

export const DRAG_UNLOCK_FLAG = 'What a drag';

type Zone = 'admin' | 'user';

export default function DragUnlockPuzzle() {
  const [buttonZone, setButtonZone] = useState<Zone>('admin');
  const [solved, setSolved] = useState(false);
  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e: DragEvent<HTMLButtonElement>) => {
    setDragging(true);
    e.dataTransfer.setData('text/plain', 'flag-button'); // required for Firefox
  };

  const handleDragEnd = () => setDragging(false);

  const handleDrop = (zone: Zone) => (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (zone === 'user') setButtonZone('user');
  };

  const allowDrop = (e: DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div className="drag-unlock-puzzle">
      <div className="drag-unlock-grid">
        <div
          onDragOver={allowDrop}
          onDrop={handleDrop('admin')}
          className="drag-unlock-zone drag-unlock-zone--admin"
        >
          <span className="drag-unlock-zone-label">Admin zone</span>
          {buttonZone === 'admin' && (
            <FlagButton
              locked
              dragging={dragging}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onClick={() => {}}
            />
          )}
        </div>

        <div
          onDragOver={allowDrop}
          onDrop={handleDrop('user')}
          className="drag-unlock-zone drag-unlock-zone--user"
        >
          <span className="drag-unlock-zone-label drag-unlock-zone-label--user">User zone</span>

          {/* Decorative filler buttons */}
          <div className="drag-unlock-decoys">
            <DecoyButton>Settings</DecoyButton>
            <DecoyButton>Notifications</DecoyButton>
            {buttonZone === 'user' && (
              <FlagButton
                locked={false}
                dragging={dragging}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onClick={() => setSolved(true)}
              />
            )}
            <DecoyButton>Profile</DecoyButton>
            <DecoyButton>Help</DecoyButton>
          </div>
        </div>
      </div>

      {solved && <div className="drag-unlock-flag">🎉 {DRAG_UNLOCK_FLAG}</div>}
    </div>
  );
}

interface FlagButtonProps {
  locked: boolean;
  dragging: boolean;
  onDragStart: (e: DragEvent<HTMLButtonElement>) => void;
  onDragEnd: () => void;
  onClick: () => void;
}

function FlagButton({ locked, dragging, onDragStart, onDragEnd, onClick }: FlagButtonProps) {
  return (
    <button
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
      disabled={locked}
      className="drag-unlock-flag-button"
      style={{
        background: locked ? '#B8AEB4' : '#714B67',
        cursor: locked ? 'grab' : 'pointer',
        opacity: dragging ? 0.5 : 1,
      }}
      title={locked ? 'Drag me elsewhere…' : 'Click here'}
    >
      {locked ? '🔒 Restricted' : '✓ Show Password'}
    </button>
  );
}

function DecoyButton({ children }: { children: ReactNode }) {
  return (
    <button onClick={(e) => e.preventDefault()} className="drag-unlock-decoy-button">
      {children}
    </button>
  );
}
