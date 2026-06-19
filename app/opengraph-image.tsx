import { ImageResponse } from "next/og";

export const alt = "Billy Lush Insurance, life insurance in the Conejo Valley, licensed in CA & TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card: parchment + oak-green + acorn gold, matching the site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5efe2",
          padding: "72px 80px",
          fontFamily: "Georgia, serif",
          color: "#1f3b2c",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
              background: "#b9852f",
              border: "4px solid #1f3b2c",
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8a5a2b",
            }}
          >
            Billy Lush Insurance
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, maxWidth: 940 }}>
            A lush life for the people you love.
          </div>
          <div style={{ fontSize: 32, color: "#3a3a32", maxWidth: 880 }}>
            Life insurance from a neighbor who actually lives here: term, whole life, final expense
            &amp; IUL, in plain English.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#3a3a32",
            borderTop: "2px solid #d8cdb5",
            paddingTop: 28,
          }}
        >
          <div>Newbury Park &amp; the Conejo Valley</div>
          <div style={{ color: "#8a5a2b" }}>Licensed in CA &amp; TX · (323) 580-9137</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
