export const Plus = ({ title = 'new server', titleId = '', styleString }) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 1024 1024"
    className={styleString}
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"
      stroke="none"
    />
    <path
      d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z"
      stroke="none"
    />
  </svg>
)