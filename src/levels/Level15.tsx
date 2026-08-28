import { useEffect, useState } from "react";
import LevelTemplate from "../components/LevelTemplate";
import ContentText from "../components/ContentText";
import Hint from "../components/Hint";
import "./Level15.css";

interface Level15Props {
  onUnlock: () => void;
}

export default function Level15({ onUnlock }: Level15Props) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [systemError, setSystemError] = useState("");

  useEffect(() => {
    const header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";
    const guestPayload = btoa(
      JSON.stringify({
        user: "guest",
        role: "user",
        current_required_admin_param: "admin_2026",
      }),
    ).replace(/=/g, "");

    const initialJwt = `${header}.${guestPayload}.sig_guest`;

    if (!localStorage.getItem("session_token")) {
      localStorage.setItem("session_token", initialJwt);
    }

    if (!(window as any).__tokenGenerator) {
      (window as any).__tokenGenerator = {
        getAdminToken: (param: string) => {
          if (param === "admin_2026") {
            const adminPayload = btoa(
              JSON.stringify({
                user: "root",
                role: "admin",
                access: "granted",
              }),
            ).replace(/=/g, "");

            const adminJwt = `${header}.${adminPayload}.sig_admin_secure`;
            console.log(adminJwt);
            return adminJwt;
          } else {
            console.warn("Invalid security parameter.");
            return "Access Denied";
          }
        },
      };

      console.log(
        "System diagnostic: legacy hook 'window.__tokenGenerator' detected. Last execution trace: 5 days ago.",
      );
    }
  }, []);

  const handleVerify = () => {
    const currentToken = localStorage.getItem("session_token");
    if (currentToken && currentToken.includes("sig_admin_secure")) {
      setIsAuthorized(true);
      setSystemError("");
    } else {
      setIsAuthorized(false);
      setSystemError(
        "YOUR CURRENT CREDENTIALS DO NOT GRANT SUFFICIENT PRIVILEGES",
      );
    }
  };

  return (
    <LevelTemplate
      levelNumber={15}
      title="ADMIN ACCESS REQUIRED"
      subtitle="Verify your session credentials to proceed."
      hintTimerDuration={20}
      riddleContent={
        <>
          <ContentText text="Access restricted. Administrative clearance is mandatory to access this core module." />

          <div className="system-module-terminal">
            &gt; core.subsystem.handshake()
            <br />
            &gt; error: security policy violation in active context.
            <br />
            &gt; status: execution halted, waiting for clearance override...
          </div>

          <div className="system-module-panel">
            <button onClick={handleVerify} className="system-module-btn">
              Verify Session
            </button>

            {systemError && (
              <div className="system-module-alert-error">❌ {systemError}</div>
            )}

            {isAuthorized && (
              <div className="system-module-alert-success">
                ✔ Clearance verified! Passcode:{" "}
                <strong className="system-module-code">
                  access_granted_9921
                </strong>
              </div>
            )}
          </div>
        </>
      }
      // correctAnswer="access_granted_9921"
      nextRoute="/level16"
      hints={[
        <Hint number={1}>
          <ContentText text="Inspect your session parameters stored in local storage." />
        </Hint>,
        <Hint number={2}>
          <ContentText text="Check global runtime environments for legacy debugging interfaces (`window.__tokenGenerator`)." />
        </Hint>,
        <Hint number={3}>
          <ContentText text="Execute the generator with the proper security parameter, update your active session state, and re-run verification." />
        </Hint>,
      ]}
      onUnlock={onUnlock}
    />
  );
}
