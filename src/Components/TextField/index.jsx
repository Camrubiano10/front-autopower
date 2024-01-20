/* eslint-disable react/prop-types */
export default function TextField({
    type="text",
    maxLength,
    name,
    placeholder,
    onChange,
    onFocus,
    value,
    className,
    required = "true",
}) {

    return (
        <>
            <input
                type={type}
                name={name}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                value={value}
                className={`shadow-sm mt-2 border-b-2 border-cyan-100 focus:outline-none focus:border-blue-500 text-center font-light text-cyan-600 uppercase ${className}`}
                required={required} />
        </>
    )

}