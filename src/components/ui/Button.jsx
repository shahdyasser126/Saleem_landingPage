export default function Button({ children, href = "#", variant = "primary", className = "" }) {
  return <a className={`button button-${variant} ${className}`} href={href}>{children}</a>;
}
