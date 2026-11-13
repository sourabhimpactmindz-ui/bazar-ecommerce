import "./Button.css";

// variant: "" (black) | "white" | "yellow"
export default function Button({ href = "#", variant = "", children, ...rest }) {
  return (
    <a className={`btn ${variant}`.trim()} href={href} {...rest}>
      {children} <i aria-hidden="true">→</i>
    </a>
  );
}
