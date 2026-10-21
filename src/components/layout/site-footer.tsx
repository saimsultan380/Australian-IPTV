import { FlagMark } from "@/components/ui/flag-mark";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";
import { whatsapp } from "@/lib/whatsapp";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-brand">
          <a className="footer-logo" href="#top">
            <FlagMark width={40} height={20} className="flag-mark footer-flag" />
            <span>{site.name}</span>
          </a>
          <p>{footer.blurb}</p>
        </div>

        <div className="footer-links">
          <div>
            <p className="col-label">Explore</p>
            <ul>
              {footer.explore.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="col-label">Setup</p>
            <ul>
              <li>
                <a href="#devices">Compatible devices</a>
              </li>
              <li>
                <a href="#firestick">Firestick guide</a>
              </li>
              <li>
                <a href="#start">Getting started</a>
              </li>
              <li>
                <a href="#speed">Internet speed</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="col-label">Contact</p>
            <ul>
              <li>
                <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={whatsapp.supportHref} target="_blank" rel="noopener noreferrer">
                  {whatsapp.display}
                </a>
              </li>
              <li>
                <a href="#reseller">Reseller panel</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <p>
            © {year} {site.name}. Streaming for Australian households.
          </p>
          <div className="footer-bottom-links">
            <a href="#choose">Buying guide</a>
            <a href="#faq">FAQs</a>
            <a href={whatsapp.supportHref} target="_blank" rel="noopener noreferrer">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
