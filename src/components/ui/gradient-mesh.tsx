// Subtle, site-wide ambient background: a few small, softly blurred color
// blobs that drift slowly. Pure CSS keyframe animation — no JavaScript,
// video, or image assets — so it adds motion/depth without any real
// performance cost or extra network weight. Sizing/blur are deliberately
// modest; see the `.mesh-blob` comment in globals.css for why.
export function GradientMesh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="mesh-blob -top-16 -left-16 animate-[mesh-drift-a_28s_ease-in-out_infinite]"
        style={{ background: "var(--accent)" }}
      />
      <div
        className="mesh-blob top-[8%] -right-16 animate-[mesh-drift-b_34s_ease-in-out_infinite]"
        style={{ background: "var(--accent-2)" }}
      />
      <div
        className="mesh-blob bottom-[-10%] left-[20%] animate-[mesh-drift-c_40s_ease-in-out_infinite]"
        style={{ background: "var(--accent-3)" }}
      />
    </div>
  );
}
