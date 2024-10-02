import { useState } from "react";

const FormComponent = () => {
    const [list, setList] = useState(true);
    const [formId, setFormId] = useState(0);

    const toggleList = () => {
        setList(prev => !prev)
    }

    function add(type) {
        const ele = document.getElementById('content')
        console.log(type)
        const id = 'form' + '-' + formId + '-' + type
        switch (type) {
            case 'Text':
                ele.innerHTML += `<div class="mb-4">
                <label htmlFor=${id} id=${id} className="block text-gray-700 font-bold mb-2">Text Field Label</label>
                <input
                    required
                    type="text"
                    name=${id}
                    id=${id}
                    class="border rounded w-full py-2 px-3 mb-2"
                />
            </div>`
                break;
            case 'Number':
                ele.innerHTML += `<div class="mb-4">
                <label htmlFor=${id} id=${id} className="block text-gray-700 font-bold mb-2">Number Field Label</label>
                <input
                    required
                    type="text"
                    name=${id}
                    id=${id}
                    class="border rounded w-full py-2 px-3 mb-2"
                />
            </div>`
                break;
            case 'Email':
                ele.innerHTML += `<div class="mb-4">
                <label htmlFor=${id} id=${id} className="block text-gray-700 font-bold mb-2">Email Field Label</label>
                <input
                    required
                    type="text"
                    name=${id}
                    id=${id}
                    class="border rounded w-full py-2 px-3 mb-2"
                />
            </div>`
                break;

            default:
                break;
        }
        setFormId(prev => prev + 1)
        setList(true)
    }

    return (
        <>
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-2">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <div id="content">

                        </div>
                        <button id="dropdownDefaultButton" onClick={toggleList} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">
                            Dropdown button
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>


                        {/* <!-- Dropdown menu --> */}
                        <div id="dropdown" className={`z-10 ${list ? 'hidden' : ''} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}>
                            <ul className="py-2 text-sm text-gray-700 " >
                                <li>
                                    <a onClick={() => add('Text')} className="block px-4 py-2 hover:bg-gray-100 ">Text</a>
                                </li>
                                <li>
                                    <a onClick={() => add('Number')} className="block px-4 py-2 hover:bg-gray-100 ">Number</a>
                                </li>
                                <li>
                                    <a onClick={() => add('Email')} className="block px-4 py-2 hover:bg-gray-100 ">Email</a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>
            </section >
        </>
    )
}

export default FormComponent;