function FileInput({ className = '', ...props }) {
  return (
    <input
      type="file"
      className={`text-sm rounded-sm [&::file-selector-button]:font-inherit [&::file-selector-button]:font-medium [&::file-selector-button]:px-3 [&::file-selector-button]:py-2 [&::file-selector-button]:mr-3 [&::file-selector-button]:rounded-sm [&::file-selector-button]:border-none [&::file-selector-button]:text-brand-50 [&::file-selector-button]:bg-brand-600 [&::file-selector-button]:cursor-pointer [&::file-selector-button]:transition-colors [&::file-selector-button]:duration-200 [&::file-selector-button]:hover:bg-brand-700 ${className}`}
      {...props}
    />
  )
}

export default FileInput
