import { ImageResponse } from "next/og";

export const alt = "Choropoulos Sound — DJ και ηχητική κάλυψη στο Αγρίνιο";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#100d0a",
          color: "#f4ece0",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "#c9a36a",
          }}
        >
          DJ · Event Sound · Agrinio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.95,
              fontWeight: 500,
            }}
          >
            Choropoulos
          </div>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.95,
              color: "#e4c48a",
              fontStyle: "italic",
            }}
          >
            Sound
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "rgba(244,236,224,0.72)",
            maxWidth: 760,
          }}
        >
          Weddings, baptisms, karaoke and live events — sound and lighting near
          Agrinio.
        </div>
      </div>
    ),
    { ...size },
  );
}
