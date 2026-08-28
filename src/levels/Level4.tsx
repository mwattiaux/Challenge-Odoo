import { useEffect } from "react";
import LevelTemplate from "../components/LevelTemplate";
import ContentText from "../components/ContentText";
import ContentImage from "../components/ContentImage";
import Hint from "../components/Hint";

interface Level4Props {
  onUnlock: () => void;
}

export default function Level4({ onUnlock }: Level4Props) {
  const SECRET_PASSWORD = "hx992_sec_token_v4";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({
        event: "FULL_SYSTEM_TELEMETRY_DUMP",
        client_timestamp: Date.now(),
        client_info: {
          user_agent: "Mozilla/5.0 (X11; Linux x86_64)",
          viewport: { width: 1920, height: 1080 },
          color_depth: 24,
          webgl_vendor: "Mesa/X.org",
          webgl_renderer: "AMD Radeon RX 6700 XT",
        },
        network_hops: [
          { hop: 1, ip: "10.0.4.1", latency_ms: 1.2, status: "ROUTED" },
          { hop: 2, ip: "172.16.254.1", latency_ms: 4.8, status: "ROUTED" },
          {
            hop: 3,
            ip: "192.168.1.100",
            latency_ms: 12.1,
            status: "NAT_TRANSLATED",
          },
        ],
        telemetry_dumps: [
          {
            type: "memory_heap",
            allocated_mb: 412,
            peak_mb: 512,
            passkey_fragment_b: "sec_token_v4",
          },
          { type: "cpu_profiler", thread_count: 8, idle_percentage: 92.4 },
          {
            type: "security_context",
            flags: ["auth_ok", "override_disabled", "sandbox_active"],
            session_manifest: {
              active_nodes: 12,
              internal_routing: {
                target_service: "auth-gateway-v2",
                diagnostics: {
                  handshake_result: "SUCCESS",
                  passkey_fragment_a: "hx992_",
                  passkey_assembly_rule: "CONCATENATE_PART1_THEN_PART2",
                  integrity_checksum: "e2c88f1109a2",
                },
              },
            },
          },
          { type: "render_metrics", fps: 60, dropped_frames: 0 },
          { type: "websocket_pool", active_connections: 3, pending_acks: 0 },
          {
            type: "cache_storage",
            quota_used_bytes: 140920,
            entries_count: 42,
          },
          {
            type: "crash_reporter",
            last_crash_timestamp: null,
            error_boundary_active: false,
          },
        ],
      }),
    }).catch(() => {});
  }, []);

  return (
    <LevelTemplate
      levelNumber={4}
      title="Network Inspection"
      subtitle="Sometimes the answer isn't visible on the UI. Look under the hood!"
      hintTimerDuration={10}
      // correctAnswer={SECRET_PASSWORD}
      nextRoute="/odoo-intern-4"
      onUnlock={onUnlock}
      riddleContent={
        <>
          <ContentText text="The application executes automated diagnostic checks during session bootstrap. Confidential operational metrics are packaged into outgoing payloads." />

          <ContentImage
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop"
            alt="Network Inspection"
          />
        </>
      }
      hints={[
        <Hint key={1} number={1}>
          <ContentText text="The frontend speaks to external gateways upon arrival. Have you looked at what leaves the client before rendering completes?" />
        </Hint>,
        <Hint key={2} number={2}>
          <ContentText text="HTTP headers are merely envelopes; real details reside inside the payload body itself." />
        </Hint>,
        <Hint key={3} number={3}>
          <ContentText text="Sift through the noisy telemetry objects in the outgoing POST payload to locate fragments of the secret credential." />
        </Hint>,
        <Hint key={4} number={4}>
          <ContentText text="The authorization key isn't stored in a single field. Look for assembly instructions and combine the separate fragments." />
        </Hint>,
      ]}
    />
  );
}