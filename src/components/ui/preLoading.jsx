import React from 'react'

const PreLoading = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-[#f9fffc]">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-plant-pink border-t-transparent"></div>
                <p className="text-lg font-semibold text-primary-foreground">Loading...</p>
            </div>
        </div>
    )
}

export default PreLoading