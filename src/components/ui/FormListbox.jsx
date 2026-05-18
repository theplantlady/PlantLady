'use client'

import { Fragment } from 'react'
import { Listbox, Label, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

export default function FormListbox({
    label,
    value,
    onChange,
    options,
    optionLabel = 'name',
    className = '',
}) {
    return (
        <Listbox value={value} onChange={onChange}>
            {({ open }) => (
                <>
                    <Label className="absolute -top-3 left-2 z-20 inline-block rounded-lg bg-plant-white px-1 text-sm font-medium text-gray-900">
                        {label}
                    </Label>

                    <div className={`relative z-10 ${className}`}>
                        <Listbox.Button className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-2 pl-3 pr-2 text-left text-gray-900 shadow-sm outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-plant-pink sm:text-base/6">
                            <span className="col-start-1 row-start-1 truncate pr-6 text-base font-semibold">
                                {value?.[optionLabel] || 'Select an option'}
                            </span>
                            <ChevronUpDownIcon
                                aria-hidden="true"
                                className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                            />
                        </Listbox.Button>

                        <Transition
                            as={Fragment}
                            show={open}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-0 text-base shadow-lg ring-1 ring-black/5 focus:outline-none outline outline-1 -outline-offset-1 outline-gray-300 sm:text-base">
                                {options.map((option) => (
                                    <Listbox.Option
                                        key={option.id ?? option.value}
                                        value={option}
                                    >
                                        {({ active, selected }) => (
                                            <li
                                                className={`${
                                                    active
                                                        ? 'bg-plant-pink text-white'
                                                        : 'bg-white text-gray-900'
                                                } relative cursor-default select-none py-2 pl-3 pr-9 outline-none`}
                                            >
                                                <span
                                                    className={`${
                                                        selected ? 'font-semibold' : 'font-normal'
                                                    } block truncate`}
                                                >
                                                    {option[optionLabel]}
                                                </span>

                                                {selected && (
                                                    <span
                                                        className={`${
                                                            active
                                                                ? 'text-white'
                                                                : 'text-plant-pink'
                                                        } absolute inset-y-0 right-0 flex items-center pr-4`}
                                                    >
                                                        <CheckIcon
                                                            aria-hidden="true"
                                                            className="size-5"
                                                        />
                                                    </span>
                                                )}
                                            </li>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
