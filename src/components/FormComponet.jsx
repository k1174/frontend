import { useState } from "react";
import { X } from "lucide-react";

const FormComponent = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [fields, setFields] = useState([]);
    const [formId, setFormId] = useState(0);
    
    const toggleDropdown = () => {
        setShowDropdown(prev => !prev);
    };

    const addField = (type) => {
        const newField = {
            id: 'form' + '-' + formId + '-' + type,
            type,
            label: `${type} Field Label`,
            value: ""
        };
        setFormId(prev => prev + 1)
        setFields(prevFields => [...prevFields, newField]);
        setShowDropdown(false);
        console.log(fields)
    };

    const removeField = (fieldId) => {
        setFields(prevFields => prevFields.filter(field => field.id !== fieldId));
    };

    const handleFieldChange = (fieldId, newValue) => {
        setFields(prevFields => 
            prevFields.map(field => 
                field.id === fieldId 
                    ? { ...field, value: newValue }
                    : field
            )
        );
    };

    const renderField = (field) => {
        return (
            <div key={field.id} className="mb-4 relative">
                <div className="flex justify-between items-center mb-2">
                    <label 
                        htmlFor={field.id} 
                        className="block text-gray-700 font-bold"
                    >
                        {field.label}
                    </label>
                    <button
                        onClick={() => removeField(field.id)}
                        className="text-gray-500 hover:text-red-600 transition-colors"
                        aria-label="Remove field"
                    >
                        <X size={20} />
                    </button>
                </div>
                <input
                    required
                    type="text"
                    name={field.id}
                    id={field.id}
                    value={field.value}
                    onChange={(e) => handleFieldChange(field.id, e.target.value)}
                    className="border rounded w-full py-2 px-3"
                />
            </div>
        );
    };

    return (
        <section className="bg-indigo-50">
            <div className="container m-auto max-w-2xl py-2">
                <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                    <div id="Content" className="space-y-4">
                        {fields.map(field => renderField(field))}
                    </div>

                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            type="button"
                        >
                            Add Field
                            <svg 
                                className={`w-2.5 h-2.5 ms-3 transition-transform ${showDropdown ? 'rotate-180' : ''}`} 
                                aria-hidden="true" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 10 6"
                            >
                                <path 
                                    stroke="currentColor" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="m1 1 4 4 4-4" 
                                />
                            </svg>
                        </button>

                        {showDropdown && (
                            <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                                <ul className="py-2 text-sm text-gray-700">
                                    <li>
                                        <button
                                            onClick={() => addField('Text')}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                            Text
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => addField('Number')}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                            Number
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => addField('Email')}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                            Email
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormComponent;