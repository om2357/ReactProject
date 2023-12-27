import React from 'react'

function button({
    children,
    type= 'button',
    bgColor = 'bg-blue-600',
    textColor='text-white',
    className= '',
    ...props
}) {
  return (
    <div className={`px-4 py-2 rounded-lg ${className} ${bgColor}`} {...props}>
        {children}
    </div>
  )
}

export default button