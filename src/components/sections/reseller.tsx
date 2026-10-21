import Image from "next/image";
import { ResellerBenefitIcon } from "@/components/ui/graphics";
import { reseller } from "@/lib/content";

export function Reseller() {
  return (
    <section className="section" id="reseller">
      <div className="wrap">
        <div className="reseller-top">
          <div>
            <p className="eyebrow">{reseller.eyebrow}</p>
            <h2>{reseller.title}</h2>
            {reseller.paragraphs.map((paragraph) => (
              <p className="lede" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="reseller-media">
            <Image
              src="/images/australian-iptv-entertainment-square.jpg"
              alt="Australian IPTV entertainment and streaming content"
              width={900}
              height={900}
              className="reseller-photo"
              sizes="(max-width: 900px) 100vw, 520px"
            />
          </div>
        </div>
        <h3 className="benefits-title">{reseller.benefitsTitle}</h3>
        <ul className="benefits">
          {reseller.benefits.map((benefit) => (
            <li key={benefit}>
              <ResellerBenefitIcon name={benefit} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
