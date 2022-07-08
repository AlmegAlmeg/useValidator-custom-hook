import './CustomInput.css'
const CustomInput = ({ label, handleChange, errors, type = 'text' }) => {
    return (
        <div className="custom-input">
            <label htmlFor={label.toLocaleLowerCase()}>{ label }:</label>
            <input 
                type={type} 
                name={label.toLocaleLowerCase()} 
                id={label.toLocaleLowerCase()}
                onChange={handleChange}
            />
            { errors[label.toLocaleLowerCase()] && <span>{ errors[label.toLocaleLowerCase()] }</span>}
        </div>
    )
}
 
export default CustomInput