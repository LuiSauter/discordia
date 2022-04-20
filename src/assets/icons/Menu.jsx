export const Menu = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 512 512"
      className="h-8 w-8 text-white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
        stroke="none"
      />
    </svg>
  )
}