"use client"
import MapDirectionProvider from '@/contextApi/mapDirectionProvider'
import { store } from '@/redux/store'
import { Toaster } from 'react-hot-toast'
import { Provider, useSelector, useDispatch } from 'react-redux'
import FloatingContactButton from '@/components/ui/FloatingContactButton'
import SalesSlideoverWrapper from '@/components/ui/SalesSlideoverWrapper'
import SalesForm from '@/components/ui/SalesForm'
import ContextualMirror from '@/components/ui/contextual/ContextualMirror'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { setSalesSlideoverOpen } from '@/redux/uiSlice'
import Logo from "@/assets/icons/logo";

const SplitWorkspace = ({ children }) => {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.ui.isSalesSlideoverOpen)

    return (
        <div className="flex w-full min-h-screen overflow-x-hidden">
            {/* Main Content Area */}
            <main 
                className={`flex-1 transition-all duration-500 ease-in-out ${
                    isOpen ? 'xl:w-[calc(100%-45rem)]' : 'w-full'
                }`}
            >
                {children}
            </main>

            {/* Desktop Side Panel (Flex Column) */}
            <aside 
                className={`hidden xl:flex flex-col transition-all duration-500 ease-in-out border-l border-gray-200 bg-plant-white ${
                    isOpen ? 'w-[45rem] opacity-100' : 'w-0 opacity-0 overflow-hidden'
                }`}
            >
                <div className="h-screen sticky top-0 flex flex-col overflow-hidden">
                    {/* Header for Side Panel */}
                    <div className="flex items-center justify-between p-6 bg-plant-white border-b border-gray-100">
                        <div className="h-12 w-auto">
                            <ContextualMirror />
                        </div>
                        <button 
                            onClick={() => dispatch(setSalesSlideoverOpen(false))}
                            className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Scrollable Form Area */}
                    <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
                        <SalesForm />
                    </div>
                </div>
            </aside>
        </div>
    )
}

const LayoutChildren = ({ children }) => {
    return (
        <MapDirectionProvider>
            <Provider store={store}>
                <SplitWorkspace>
                    {children}
                </SplitWorkspace>
                
                {/* Floating elements */}
                <FloatingContactButton />
                
                {/* Mobile-only Slideover (Hidden on xl) */}
                <div className="xl:hidden">
                    <SalesSlideoverWrapper />
                </div>

                <Toaster position="top-right"
                    containerStyle={{
                        top: 60,
                    }}
                />
            </Provider>
        </MapDirectionProvider>
    )
}

export default LayoutChildren
