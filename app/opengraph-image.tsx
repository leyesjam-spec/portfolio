import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} | ${site.title}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await readFile(join(process.cwd(), "public/profile.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#00366D",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 680,
          }}
        >
          <div
            style={{
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              opacity: 0.85,
            }}
          >
            {site.title}
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              marginTop: 16,
              lineHeight: 1.15,
            }}
          >
            {site.name}
          </div>
          <div
            style={{
              fontSize: 24,
              marginTop: 24,
              lineHeight: 1.4,
              opacity: 0.9,
            }}
          >
            {site.tagline}
          </div>
        </div>
        <img
          src={photoSrc}
          alt=""
          width={360}
          height={360}
          style={{
            objectFit: "cover",
            objectPosition: "center 18%",
            borderRadius: 28,
            border: "8px solid white",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
