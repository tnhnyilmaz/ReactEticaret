import React, { memo } from 'react';

const WarningComp = ({isOpen,onClose,onConfirm}) => {
    console.log("warnıng rendered")
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded-md shadow-lg">
                <h2 className="text-xl font-bold mb-4">Silmek İstediğinizden Emin Misiniz?</h2>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                        Evet
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 px-4 py-2 rounded-md"
                    >
                        Hayır
                    </button>
                </div>
            </div>
        </div>
    )
}

export default memo(WarningComp)