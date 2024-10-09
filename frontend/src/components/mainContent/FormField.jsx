import React from 'react'

const FormField = ({ label, name, type, value, onChange, required, rows }) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-customGray rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          rows={rows}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-2 border border-customGray rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
          required={required}
          accept={type === "file" ? "image/*" : undefined}
        />
      )}
    </div>
  )
}

export default FormField
