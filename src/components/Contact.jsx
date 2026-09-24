import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  MapPin,
  MessageSquare,
} from "lucide-react";
import contact from "../assets/contact.webp";

const EASE = [0.22, 1, 0.36, 1];

const ADDONS = [
  "Pet Hair Removal",
  "Heavy Stains",
  "Odor Treatment",
  "Vomit Clean-Up",
  "Seat Extraction",
  "Steam Cleaning",
];

export default function ContactBanner() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "8rem 2rem",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage: `url(${contact})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.05)",
        }}
      />

      {/* Dark overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "rgba(0, 0, 0, 0.78)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "flex-start",
          }}
        >
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="kicker"
              style={{ marginBottom: "1.25rem", whiteSpace: "nowrap" }}
            >
              Get a free quote
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
              style={{
                marginBottom: "1.5rem",
                color: "white",
                fontFamily: "var(--sans)",
                fontSize: "clamp(50px, 6vw, 90px)",
                fontWeight: 800,
                lineHeight: 0.93,
                letterSpacing: "-0.06em",
              }}
            >
              Let&apos;s book
              <br />
              <span style={{ color: "#1673d2" }}>your detail.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px 0px" }}
              transition={{ duration: 0.75, delay: 0.28, ease: EASE }}
              style={{
                maxWidth: "420px",
                color: "rgba(255,255,255,0.65)",
                fontFamily: "var(--sans)",
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              Fill out the form and we&apos;ll get back to you fast with a real
              quote for vehicle detailing across Brisbane.
            </motion.p>

            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "2rem",
                color: "rgba(255,255,255,0.75)",
                fontFamily: "var(--sans)",
                fontSize: "14px",
              }}
            >
              {[
                { icon: Phone, text: "0424 171 357" },
                { icon: Mail, text: "usherton1235@outlook.com" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px 0px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35 + index * 0.1,
                    ease: EASE,
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <item.icon size={14} color="#1673d2" />
                  {item.text}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            style={{
              padding: "2rem",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Quote Request"
              />

              <input
                type="hidden"
                name="access_key"
                value="ff24c4fc-37f1-4687-b494-75d38ef5f01f"
              />

              {[
                { icon: User, placeholder: "Full Name", name: "name" },
                { icon: Phone, placeholder: "Phone Number", name: "phone" },
                {
                  icon: MapPin,
                  placeholder: "Suburb / Location",
                  name: "location",
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px 0px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.25 + index * 0.08,
                    ease: EASE,
                  }}
                  style={inputWrap}
                >
                  <field.icon size={16} color="#1673d2" />

                  <input
                    type="text"
                    name={field.name}
                    placeholder={field.placeholder}
                    required={field.name !== "location"}
                    style={inputStyle}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.5,
                  ease: EASE,
                }}
                style={{
                  ...inputWrap,
                  alignItems: "flex-start",
                }}
              >
                <MessageSquare
                  size={16}
                  color="#1673d2"
                  style={{ marginTop: "2px", flexShrink: 0 }}
                />

                <textarea
                  name="message"
                  placeholder="What vehicle(s) need detailing?"
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "none",
                  }}
                />
              </motion.div>

              {/* Add-on cards */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.55,
                  ease: EASE,
                }}
                style={addonSection}
              >
                <p style={addonHeading}>Add-ons — tick what you need</p>

                <div className="addon-grid" style={addonGrid}>
                  {ADDONS.map((addon) => {
                    const addonSlug = addon
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "_")
                      .replace(/^_|_$/g, "");

                    return (
                      <label
                        key={addon}
                        className="addon-option"
                        style={addonOption}
                      >
                        <input
                          className="addon-checkbox"
                          type="checkbox"
                          name={`addon_${addonSlug}`}
                          value={addon}
                        />

                        <span className="addon-radio" aria-hidden="true" />

                        <span>{addon}</span>
                      </label>
                    );
                  })}
                </div>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{
                  duration: 0.55,
                  delay: 0.63,
                  ease: EASE,
                }}
                whileHover={{
                  translateY: -2,
                  boxShadow: "0 14px 40px rgba(22, 115, 210, 0.4)",
                }}
                whileTap={{ translateY: 0 }}
                style={{
                  width: "100%",
                  marginTop: "14px",
                  padding: "12px 28px",
                  border: "none",
                  borderRadius: "999px",
                  cursor: "pointer",
                  background: "#1673d2",
                  boxShadow: "0 10px 30px rgba(22, 115, 210, 0.25)",
                  color: "white",
                  fontFamily: "var(--sans)",
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "-0.015em",
                }}
              >
                Request quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .addon-option:hover {
          border-color: rgba(22, 115, 210, 0.8) !important;
          background: rgba(22, 115, 210, 0.08);
        }

        .addon-checkbox {
          position: absolute;
          width: 1px;
          height: 1px;
          opacity: 0;
          pointer-events: none;
        }

        .addon-radio {
          display: block;
          width: 13px;
          height: 13px;
          flex: 0 0 13px;
          border: 1px solid rgba(255, 255, 255, 0.38);
          border-radius: 50%;
          transition:
            border-color 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .addon-option:has(.addon-checkbox:checked) {
          border-color: #1673d2 !important;
          background: rgba(22, 115, 210, 0.13);
          color: #ffffff !important;
        }

        .addon-option:has(.addon-checkbox:checked) .addon-radio {
          border-color: #1673d2;
          background: #1673d2;
          box-shadow: inset 0 0 0 3px rgba(8, 8, 8, 0.7);
        }

        .addon-option:has(.addon-checkbox:focus-visible) {
          outline: 2px solid #1673d2;
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }

        @media (max-width: 480px) {
          .addon-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputWrap = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "12px 14px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "10px",
};

const inputStyle = {
  width: "100%",
  padding: 0,
  border: "none",
  outline: "none",
  background: "transparent",
  color: "white",
  fontFamily: "var(--sans)",
  fontSize: "14px",
};

const addonSection = {
  padding: "14px",
  background: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
};

const addonHeading = {
  margin: "0 0 12px",
  color: "rgba(255,255,255,0.65)",
  fontFamily: "var(--sans)",
  fontSize: "13px",
  fontWeight: 700,
  letterSpacing: "-0.01em",
};

const addonGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "8px",
};

const addonOption = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  minHeight: "38px",
  padding: "0 12px",
  border: "1px solid rgba(255,255,255,0.16)",
  borderRadius: "9px",
  color: "rgba(255,255,255,0.78)",
  fontFamily: "var(--sans)",
  fontSize: "12px",
  fontWeight: 600,
  cursor: "pointer",
  transition:
    "border-color 0.2s ease, background 0.2s ease, color 0.2s ease",
};