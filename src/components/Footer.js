import React from 'react'

export default function Footer() {
  return (
    <div className="text-center " id='footer'>
      <p>My Blog &copy; {new Date().getFullYear()}</p>
    </div>
  )
}
