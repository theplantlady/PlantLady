'use client'

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import SalesForm from './SalesForm'
import Logo from "@/assets/icons/logo";

export function SalesSlideover({open, setOpen}) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => {
                // Only allow closing via the X button or backdrop on mobile.
                // On desktop, we want to allow clicking the background without closing.
                if (window.innerWidth < 1280) {
                    setOpen(false);
                }
            }}>
                {/* Backdrop - Only visible/active on mobile */}
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity xl:hidden" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-3xl border-l border-gray-200">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-plant-white shadow-2xl">
                                        <div className="flex-1 pt-4 pr-2 bg-plant-white">

                                            {/* Header */}
                                            <div className="flex items-end justify-between space-x-3 px-4">
                                                <div className={'relative w-auto h-full'}>
                                                    <Logo height={"100%"} width={"100%"} className="relative max-h-fit shadow-2xl" />
                                                </div>

                                                <button
                                                    type="button"
                                                    className="text-gray-400 hover:text-gray-500 p-2"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <XMarkIcon className="h-6 w-6" />
                                                </button>
                                            </div>

                                            <div className="px-4 py-6">
                                                <SalesForm />
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
