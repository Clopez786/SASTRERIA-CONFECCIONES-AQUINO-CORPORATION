import LanguageToggle from '../components/LanguageToggle/LanguageToggle';

const PHONE1_DISPLAY = "(305) 635-8575";
const PHONE1_E164 = "+13056358575";

const PHONE2_DISPLAY = "(786) 870-3744";
const PHONE2_E164 = "+17868703744";

const ADDRESS_DISPLAY = "3505 NW 17th Ave, Miami, FL 33142";
const ADDRESS_MAPS =
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(ADDRESS_DISPLAY);

// Copy
const t = {
    en: {
        title: "Contact Us",
        phoneLabel: "Business Phone",
        phone2Label: "Aquino Direct Phone",
        addressLabel: "Address",
        scanTitle: "Scan to add contact",
        scanHelp: "Open your phone’s Camera and point at the code.",
        qrAlt: "QR code to add Aquino Tailor contact",
    },
    es: {
        title: "Contáctanos",
        phoneLabel: "Teléfono",
        phone2Label: "Teléfono de Aquino",
        addressLabel: "Dirección",
        scanTitle: "Escanea para agregar contacto",
        scanHelp: "Abre la cámara de tu teléfono y apunta al código.",
        qrAlt: "Código QR para agregar el contacto de Aquino Tailor",
    },
};

export default function Contact({ lang = "en", setLang }) {
    const L = t[lang] || t.en;

    // MECARD supports multiple TEL fields
    const mecard = `MECARD:N:Aquino Tailor;TEL:${PHONE1_E164};TEL:${PHONE2_E164};ADR:${ADDRESS_DISPLAY};;`;
    const qrSrc =
        "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" +
        encodeURIComponent(mecard);

    return (
        <div className="contact" lang={lang}>
            <div className="contact__header">
                <h1 className="contact__title">{L.title}</h1>
            </div>

            <div className="contact__card">
                {/* Info column(s) */}
                <div className="contact__info">
                    <div className="contact__infoFlex">
                        <div className="contact__block">
                            <div className="contact__label">{L.phoneLabel}</div>
                            <a className="contact__value contact__phone" href={`tel:${PHONE1_E164}`}>
                                {PHONE1_DISPLAY}
                            </a>
                        </div>

                        <div className="contact__block">
                            <div className="contact__label">{L.phone2Label}</div>
                            <a className="contact__value contact__phone" href={`tel:${PHONE2_E164}`}>
                                {PHONE2_DISPLAY}
                            </a>
                        </div>

                        <div className="contact__block">
                            <div className="contact__label">{L.addressLabel}</div>
                            <a
                                className="contact__value contact__address"
                                href={ADDRESS_MAPS}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {ADDRESS_DISPLAY}
                            </a>
                        </div>
                    </div>
                </div>

                {/* QR column */}
                <div className="contact__qr">
                    <h2 className="contact__qrTitle">{L.scanTitle}</h2>
                    <img className="contact__qrImg" src={qrSrc} alt={L.qrAlt} />
                    <div className="contact__qrHelp">{L.scanHelp}</div>
                </div>
            </div>
        </div>
    );
}
