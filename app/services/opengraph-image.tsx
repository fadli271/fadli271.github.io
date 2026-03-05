import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-static";
export const revalidate = false;

export const alt = "Fadli Dev Studio — Jasa Pembuatan Website UMKM";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#020617",
          color: "#e5e7eb",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
          overflow: "hidden",
        }}
      >
        {/* Atmospheric gradient + glow layer */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 0%, rgba(56,189,248,0.38), transparent 55%)," +
              "radial-gradient(circle at 88% 18%, rgba(129,140,248,0.34), transparent 52%)," +
              "radial-gradient(circle at 10% 85%, rgba(59,130,246,0.32), transparent 50%)," +
              "linear-gradient(135deg, #020617, #020617 25%, #020617 46%, #020617)",
            opacity: 0.9,
          }}
        />

        {/* Subtle noise / texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(0deg, rgba(15,23,42,0.45), rgba(15,23,42,0.45))," +
              "repeating-linear-gradient(45deg, rgba(15,23,42,0.9) 0, rgba(15,23,42,0.9) 1px, transparent 1px, transparent 3px)",
            mixBlendMode: "soft-light",
            opacity: 0.45,
          }}
        />

        {/* Main layout */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "row",
            padding: "56px 80px",
            gap: 72,
          }}
        >
          {/* LEFT: Copy + value props */}
          <div
            style={{
              flex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Logo-like mark + brand */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background:
                    "conic-gradient(from 160deg, #38bdf8, #4f46e5, #0ea5e9, #38bdf8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 18px 55px rgba(15,23,42,0.9)",
                }}
              >
                <span
                  style={{
                    fontSize: 26,
                    fontWeight: 800,
                    letterSpacing: -0.5,
                    color: "#020617",
                  }}
                >
                  F
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <span
                  style={{
                    fontSize: 22,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "#bae6fd",
                  }}
                >
                  FADLI DEV STUDIO
                </span>
                <span
                  style={{
                    fontSize: 18,
                    color: "#9ca3af",
                  }}
                >
                  Bantu UMKM tampil profesional & closing lebih cepat
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              style={{
                margin: "40px 0 0",
                fontSize: 72,
                lineHeight: 1.05,
                fontWeight: 800,
                letterSpacing: -1.8,
              }}
            >
              Jasa Pembuatan Website
              <br />
              <span style={{ color: "#38bdf8" }}>untuk UMKM</span>
            </h1>

            {/* Service types as chips */}
            <div
              style={{
                marginTop: 24,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {["Landing Page", "Toko Online", "Sistem Operasional"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      padding: "8px 18px",
                      borderRadius: 999,
                      border: "1px solid rgba(148,163,184,0.5)",
                      color: "#cbd5e1",
                      fontSize: 22,
                      background: "rgba(15,23,42,0.75)",
                    }}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>

            {/* Price + CTA-ish badge */}
            <div
              style={{
                marginTop: 32,
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  borderRadius: 24,
                  padding: "18px 26px",
                  background:
                    "linear-gradient(135deg, #0ea5e9, #2563eb, #4f46e5)",
                  boxShadow:
                    "0 22px 60px rgba(15,23,42,0.8), 0 0 0 1px rgba(15,23,42,0.4)",
                  color: "#f9fafb",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  minWidth: 280,
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    textTransform: "uppercase",
                    letterSpacing: 2.5,
                    opacity: 0.9,
                  }}
                >
                  Mulai
                </span>
                <span
                  style={{
                    fontSize: 34,
                    fontWeight: 800,
                    letterSpacing: -0.6,
                  }}
                >
                  Rp 895.000
                </span>
                <span
                  style={{
                    fontSize: 18,
                    opacity: 0.92,
                  }}
                >
                  Mulai dari paket hemat untuk bisnis kecil Anda.
                </span>
              </div>

              <div
                style={{
                  borderRadius: 999,
                  border: "1px solid rgba(148,163,184,0.55)",
                  padding: "14px 22px",
                  fontSize: 22,
                  color: "#e2e8f0",
                  background:
                    "linear-gradient(120deg, rgba(15,23,42,0.9), rgba(15,23,42,0.75))",
                  boxShadow: "0 14px 35px rgba(15,23,42,0.8)",
                  whiteSpace: "nowrap",
                }}
              >
                Konsultasi Gratis via WhatsApp
              </div>
            </div>

            {/* Trust markers */}
            <div
              style={{
                marginTop: 26,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                color: "#9ca3af",
                fontSize: 18,
              }}
            >
              {[
                "SEO Friendly",
                "Dibangun dengan Next.js",
                "Gratis maintenance 3 bulan",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    borderRadius: 999,
                    background: "rgba(15,23,42,0.85)",
                    border: "1px solid rgba(51,65,85,0.9)",
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: 999,
                      background:
                        "radial-gradient(circle at 30% 30%, #f9fafb, #22c55e)",
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Visual focus card for conversion feel */}
          <div
            style={{
              flex: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                width: 360,
                borderRadius: 32,
                padding: 22,
                background:
                  "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
                border: "1px solid rgba(148,163,184,0.55)",
                boxShadow:
                  "0 26px 70px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,0.7)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: 18,
                    color: "#9ca3af",
                  }}
                >
                  Paket UMKM
                </span>
                <span
                  style={{
                    fontSize: 18,
                    color: "#22c55e",
                  }}
                >
                  Go Digital
                </span>
              </div>

              <div
                style={{
                  marginTop: 4,
                  borderRadius: 22,
                  padding: 16,
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.32), transparent 55%)," +
                    "radial-gradient(circle at 100% 0%, rgba(129,140,248,0.32), transparent 60%)," +
                    "linear-gradient(to bottom, #020617, #020617)",
                  border: "1px solid rgba(30,64,175,0.9)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#e5e7eb",
                    }}
                  >
                    Siap online dalam hitungan hari
                  </span>
                  <div
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(15,23,42,0.85)",
                      border: "1px solid rgba(56,189,248,0.7)",
                      fontSize: 16,
                    }}
                  >
                    Live cepat
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 10,
                    marginTop: 6,
                  }}
                >
                  {["Profil Bisnis", "Katalog", "WhatsApp", "SEO Dasar"].map(
                    (item) => (
                      <div
                        key={item}
                        style={{
                          borderRadius: 14,
                          padding: "8px 10px",
                          background: "rgba(15,23,42,0.85)",
                          border: "1px solid rgba(30,64,175,0.7)",
                          fontSize: 16,
                          color: "#cbd5e1",
                        }}
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div
                style={{
                  marginTop: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fontSize: 16,
                  color: "#9ca3af",
                }}
              >
                <span>Optimasi tampil di Google & mobile</span>
                <span
                  style={{
                    borderRadius: 999,
                    padding: "6px 10px",
                    background: "rgba(34,197,94,0.12)",
                    color: "#bbf7d0",
                    border: "1px solid rgba(34,197,94,0.45)",
                  }}
                >
                  Siap dipromosikan
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer URL */}
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 32,
            fontSize: 22,
            color: "#94a3b8",
            letterSpacing: 0.3,
          }}
        >
          fadlidevstudio.my.id/services
        </div>
      </div>
    ),
    size,
  );
}
