export function HamburgerIcon({ black }) {
  return (
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
  );
}
export function XMArkIcon({ black }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 10.9394L16.9697 5.96961L18.0304 7.03027L13.0606 12L18.0303 16.9697L16.9697 18.0304L12 13.0607L7.03045 18.0302L5.96979 16.9696L10.9393 12L5.96973 7.03042L7.03039 5.96976L12 10.9394Z"
        fill={black ? "black" : "white"}
      />
    </svg>
  );
}
