

export function HamburgerIcon({black}) {
    return(
        <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 6.5H19V8H5V6.5Z" fill={black ? "black" : "white"} />
        <path d="M5 16.5H19V18H5V16.5Z" fill={black ? "black" : "white"} />
        <path d="M5 11.5H19V13H5V11.5Z" fill={black ? "black" : "white"} />
      </svg>
    )
}