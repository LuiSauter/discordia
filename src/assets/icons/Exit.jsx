export const Exit = ({ title = 'Exit', titleId = '' }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      viewBox="0 0 512 512"
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M405 136.798 375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
        stroke="none"
      />
    </svg>
  )
}