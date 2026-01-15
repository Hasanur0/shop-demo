export function Flag({ className = '', ...props }) {
  return (
    <img
      className={`max-w-5 block border border-grey-100 rounded ${className}`}
      {...props}
    />
  )
}
