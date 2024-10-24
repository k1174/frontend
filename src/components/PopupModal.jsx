import React, { useRef } from 'react'
import { X } from 'lucide-react'

import Download from './Download'

function PopupModal({ onClose }) {
    const popupModalRef = useRef();

    const closePopupModal = (e) => {
        if (popupModalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div
            ref={popupModalRef}
            onClick={closePopupModal}
            className='fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50'
        >
            <div className='relative bg-indigo-500  w-[800px] rounded-lg shadow-lg p-6'>
                <button
                    onClick={onClose}
                    className='absolute top-3 right-3 text-white hover:text-red-400 transition-colors'
                >
                    <X size={30} />
                </button>
                <div className='flex flex-col gap-5'>
                    <h1 className="text-2xl text-white flex justify-center font-semibold mb-4">Manage Event Report</h1>
                    <div className="bg-white w-full max-w-[800px] h-[600px] rounded-lg px-6 py-4 flex flex-col gap-4 overflow-y-scroll">
                        <Download />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default PopupModal