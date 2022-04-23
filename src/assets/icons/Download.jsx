export const Download = ({ title = 'Download', titleId = '' }) => {
  return (
    <svg className='h-6 w-6 mr-1' aria-labelledby={titleId}>
      {title ? <title id={titleId}>{title}</title> : null}
      <g fill="currentColor">
        <path d="m17.707 10.708-1.414-1.414L13 12.587V2.001h-2v10.586L7.707 9.294l-1.414 1.414L12 16.415l5.707-5.707ZM18 18.001v2H6v-2H4v2c0 1.102.897 2 2 2h12c1.104 0 2-.898 2-2v-2h-2Z" />
      </g>
    </svg>
  )
}