import './SpecialInput.css'

export default function SpecialInput({
  inputValue,
  setInputValue,
  placeholder,
  isTextarea,
  ...rest
}) {
  return (
    <div className='specialinput'>
      {isTextarea ? (
        <textarea
          {...rest}
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
          required
          onPaste={(e) => e.preventDefault()}
        />
      ) : (
        <input
          {...rest}
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
          required
          onPaste={(e) => e.preventDefault()}
        />
      )}
      <span>{placeholder}</span>
    </div>
  )
}
