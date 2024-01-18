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
                className={`shadow-sm px-4 py-2 border-b-2 focus:outline-none focus:border-blue-500 text-center font-semibold text-cyan-600 ${className}`}
                required={required} />
        </>
    )

}