function ButtonGroup({ children, className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 justify-end ${className}`}>
      {children}
    </div>
  )
}

export default ButtonGroup
