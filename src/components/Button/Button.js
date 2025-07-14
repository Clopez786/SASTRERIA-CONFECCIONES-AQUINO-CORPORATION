import "./Button.scss";

export default function Button({ txt = "Click me", onClick }) {
    return (
        <button className="btn" onClick={onClick}>
            {txt}
        </button>
    );
}
