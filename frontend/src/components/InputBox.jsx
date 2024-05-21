import PropTypes from 'prop-types';

export default function InputBOX({ label, placeholder, type, onChange }) {
    const inputId = label.replace(/\s+/g, '-').toLowerCase(); // Generate a unique id for the input

    return (
        <div className="pt-2 text-sm font-medium text-left py-1">
            <label htmlFor={inputId}>{label}</label>
            <input
                id={inputId}
                onChange={onChange}
                className="w-full px-2 py-1 rounded border border-slate-400"
                type={type}
                placeholder={placeholder}
            />
        </div>
    );
}

InputBOX.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

InputBOX.defaultProps = {
    placeholder: '',
    type: 'text',
};
