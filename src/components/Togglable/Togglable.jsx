
const Togglable = ({ onClick, children, stringStyle }) => {
  return (
    <button className={stringStyle} onClick={onClick}>
      {children}
    </button>
  )
}

export default Togglable