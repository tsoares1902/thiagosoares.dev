import { ImageResponse } from "next/og";

export const alt = "Thiago Soares | Software Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

const technologies = ["Node.js", "React", "MongoDB", "AWS"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#050505",
          color: "#ffffff",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          overflow: "hidden",
          padding: 72,
          position: "relative",
          width: "100%"
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 255, 102, 0.22), rgba(255, 255, 255, 0.04))",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            bottom: -120,
            display: "flex",
            height: 420,
            position: "absolute",
            right: -90,
            transform: "rotate(-8deg)",
            width: 520
          }}
        />

        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.12)",
            display: "flex",
            flexDirection: "column",
            gap: 42,
            height: "100%",
            justifyContent: "space-between",
            padding: 56,
            position: "relative",
            width: "100%"
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: 18
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#ffffff",
                color: "#050505",
                display: "flex",
                fontSize: 28,
                fontWeight: 800,
                height: 64,
                justifyContent: "center",
                width: 64
              }}
            >
              TS
            </div>

            <div
              style={{
                color: "rgba(255, 255, 255, 0.72)",
                display: "flex",
                fontSize: 30,
                fontWeight: 600
              }}
            >
              thiagosoares.dev
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 86,
                fontWeight: 800,
                letterSpacing: 0,
                lineHeight: 0.95,
                maxWidth: 760
              }}
            >
              Thiago Soares
            </div>

            <div
              style={{
                color: "rgba(255, 255, 255, 0.72)",
                display: "flex",
                fontSize: 42,
                fontWeight: 600
              }}
            >
              Software Engineer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 14
            }}
          >
            {technologies.map((technology) => (
              <div
                key={technology}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.16)",
                  color: "rgba(255, 255, 255, 0.84)",
                  display: "flex",
                  fontSize: 25,
                  fontWeight: 700,
                  padding: "14px 20px"
                }}
              >
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
