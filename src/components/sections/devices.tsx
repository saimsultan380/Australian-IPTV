"use client";

import { useState } from "react";
import { DevicePickIcon } from "@/components/ui/graphics";
import { devices, devicesIntro, guides } from "@/lib/content";

export function Devices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDevice = devices[activeIndex];
  const activeGuide = guides[activeDevice.guideIndex];

  return (
    <section className="section" id="devices">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{devicesIntro.eyebrow}</p>
          <h2>{devicesIntro.title}</h2>
          <p className="lede">{devicesIntro.lede}</p>
        </div>

        <div className="devices-panel">
          <div className="devices-picker">
            <p className="devices-picker-label">Compatible devices</p>
            <div className="device-cards" role="tablist" aria-label="Choose a device">
              {devices.map((device, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={device.name}
                    type="button"
                    role="tab"
                    id={device.name === "Amazon Firestick" ? "firestick" : undefined}
                    aria-selected={selected}
                    className={selected ? "device-card is-active" : "device-card"}
                    onClick={() => setActiveIndex(index)}
                  >
                    <DevicePickIcon icon={device.icon} />
                    <span>{device.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="device-guide" role="tabpanel" aria-live="polite">
            <p className="device-guide-kicker">{activeDevice.name}</p>
            <h3>{activeGuide.title}</h3>
            <ol className="device-steps">
              {activeGuide.paragraphs.map((paragraph, index) => (
                <li key={paragraph}>
                  <span className="step-badge">{index + 1}</span>
                  <p>{paragraph}</p>
                </li>
              ))}
            </ol>
            {activeGuide.note ? <p className="note">{activeGuide.note}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
