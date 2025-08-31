import "./LanguageToggle.scss";

export default function LanguageToggle({ lang, setLang, showLabel = true }) {
    const label = lang === "es" ? "Idioma" : "Language";
    return (
        <div className="lang-toggle" role="group" aria-label={label}>
            {showLabel && <span className="lang-toggle__label">{label}:</span>}
            <button
                type="button"
                className={`lang-toggle__btn ${lang === "en" ? "is-active" : ""}`}
                onClick={() => setLang("en")}
            >
                EN
            </button>
            <button
                type="button"
                className={`lang-toggle__btn ${lang === "es" ? "is-active" : ""}`}
                onClick={() => setLang("es")}
            >
                ES
            </button>
        </div>
    );
}
