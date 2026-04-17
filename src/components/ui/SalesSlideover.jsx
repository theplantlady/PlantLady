'use client'

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import SalesForm from './SalesForm'
import Logo from "@/assets/icons/logo";

export function SalesSlideover({open, setOpen}) {
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setOpen}>
                <div className="fixed inset-0"/>

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
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-3xl">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-plant-white shadow-xl">
                                        <div className="flex-1 pt-4 pr-2 bg-plant-white">

                                            {/* Header */}
                                            <div className="flex items-end justify-between space-x-3 ">

                                                <div className={'relative w-auto h-full'}>

                                                        <Logo height={"100%"} width={"100%"} className="relative max-h-fit shadow-2xl" />

                                                </div>

                                                <button
                                                    type="button"
                                                    className="text-gray-400 hover:text-gray-500"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <XMarkIcon className="h-6 w-6" />
                                                </button>
                                            </div>

                                            <SalesForm />
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