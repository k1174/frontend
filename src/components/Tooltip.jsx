import { useState } from "react";
export default function Tooltip() {
    const [display, setDisplay] = useState('hidden');
    return (
        <>
            <p className="flex items-center text-sm text-gray-500">Formating Option <button onMouseEnter={() => setDisplay('')}
                onMouseLeave={() => setDisplay('hidden')} type="button"><svg className="w-4 h-4 ms-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg><span className="sr-only">Show information</span></button></p>
            <div id="popover-description" className={`absolute z-10  inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm ${display} w-72 `} >
                <div className="p-3 space-y-2">
                    <h1 className="text-xl font-semibold mb-3">
                        # Heading
                    </h1>

                    <strong>**Bold text**</strong>
                    {/* italic */}
                    <p><em>*Italic text*</em></p>

                    {/* list */}
                    <p><em>- for bullet list</em></p>
                    <ul>
                        <li className="list-disc list-inside">List item 1</li>
                        <li className="list-disc list-inside">List item 2</li>
                    </ul>

                </div>
            </div>
        </>
    )
}