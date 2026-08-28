import { useState } from "react";

interface OpenButtonProps {
  onSuccess: () => void;
}

export default function OpenButton({ onSuccess }: OpenButtonProps) {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const text = event.currentTarget.textContent?.trim().toLowerCase();

    if (text === "open") {
      setMessage("Answer: Easy");
      setMessageType("success");
      onSuccess();
    } else {
      setMessage("Sorry, that's not good.");
      setMessageType("error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button
        type="button"
        onClick={handleClick}
        style={{
          padding: "14px 32px",
          border: "none",
          borderRadius: "8px",
          background: "#714B67",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        Ouvrir
      </button>

      {message && (
        <p
          style={{
            marginTop: "12px",
            fontWeight: "600",
            color: messageType === "success" ? "#16a34a" : "#dc2626",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}