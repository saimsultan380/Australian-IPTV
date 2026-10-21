"use client";

import { useEffect, useRef, useState } from "react";
import { DevicePickIcon } from "@/components/ui/graphics";
import { devices, devicesIntro, guides } from "@/lib/content";

export function Devices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasSelected, setHasSelected] = useState(false);
  const guideRef = useRef<HTMLDivElement>(null);
  const activeDevice = devices[activeIndex];
  const activeGuide = guides[activeDevice.guideIndex];

  useEffect(() => {
    if (!hasSelected || !guideRef.current) return;
    guideRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeIndex, hasSelected]);

  const selectDevice = (index: number) => {
    setHasSelected(true);
    setActiveIndex(index);
  };

  return (
    <section className="section" id="devices">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{devicesIntro.eyebrow}</p>
          <h2>{devicesIntro.title}</h2>
          <p className="lede">{devicesIntro.lede}</p>
        </div>

        <div className="devices-panel">
          <div className="devices-picker" id="firestick">
            <p className="devices-picker-label">Compatible devices</p>
            <div className="device-cards" role="tablist" aria-label="Choose a device">
              {devices.map((device, index) => {
                const selected = index === activeIndex;
                return (
                  <button
                    key={device.name}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="device-guide-panel"
                    className={selected ? "device-card is-active" : "device-card"}
                    onClick={() => selectDevice(index)}
                  >
                    <DevicePickIcon icon={device.icon} />
                    <span>{device.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            ref={guideRef}
            id="device-guide-panel"
            className="device-guide"
            role="tabpanel"
          >
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
