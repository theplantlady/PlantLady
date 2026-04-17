'use client'

import { useState, Fragment } from 'react'
import { Listbox, Label, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const types = [
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Business' },
]

const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'phone', title: 'Phone' },
    { id: 'sms', title: 'Phone (SMS)' },
]

const inputClassName =
    'block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-plant-pink sm:text-base/6'

const floatingLabelClassName =
    'absolute -top-3 left-2 inline-block rounded-lg bg-plant-white px-1 text-sm font-medium text-gray-900'

export default function SalesForm() {
    const [selected, setSelected] = useState(types[0])

    const [form, setForm] = useState({
        type: types[0].name,
        individual: {
            firstName: '',
            lastName: '',
            notificationMethod: 'email',
            email: '',
            phone: '',
            address: {
                streetAddress: '',
                city: '',
                region: '',
                postalCode: '',
            },
        },
        business: {
            businessName: '',
            contactName: '',
            notificationMethod: 'email',
            email: '',
            phone: '',
            businessAddress: {
                streetAddress: '',
                city: '',
                region: '',
                postalCode: '',
            },
        },
        services: {
            livingWall: true,
            residential: true,
            commercial: true,
            installation: true,
            design: true,
            consultation: true,
        },
        details: {
            residential: {
                description: '',
                existingPlants: '',
            },
            commercial: {
                description: '',
                businessType: '',
            },
            livingWall: {
                description: '',
                location: '',
                dimensions: '',
                plants: '',
            },
            installation: {
                description: '',
            },
            design: {
                description: '',
                colors: '',
            },
            consultation: {
                description: '',
            },
        },
        projectDate: '',
    })

    const update = (path, value) => {
        setForm((prev) => {
            const next = { ...prev }
            let ref = next

            for (let i = 0; i < path.length - 1; i++) {
                ref[path[i]] = { ...ref[path[i]] }
                ref = ref[path[i]]
            }

            ref[path[path.length - 1]] = value
            return next
        })
    }

    const handleTypeChange = (value) => {
        setSelected(value)
        update(['type'], value.name)
    }

    const submitForm = async (e) => {
        e.preventDefault()

        await fetch('/api/sales', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...form,
                type: selected.name,
            }),
        })
    }

    return (
        <div className="mx-auto max-w-7xl bg-plant-white p-4">
            <div className="mx-auto max-w-7xl">
                <form onSubmit={submitForm}>
                    <div className="space-y-4">
                        <div className="border-b border-gray-900/10">
                            <div className="flex justify-start py-4">
                                <div className="relative mr-4 w-full max-w-sm">
                                    <Listbox value={selected} onChange={handleTypeChange}>
                                        {({ open }) => (
                                            <>
                                                <Label className="absolute -top-3 left-2 z-20 inline-block rounded-lg bg-plant-white px-1 text-sm font-medium text-gray-900">
                                                    Are you a business or an individual?
                                                </Label>

                                                <div className="relative z-10">
                                                    <Listbox.Button className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-2 pl-3 pr-2 text-left text-gray-900 shadow-sm outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-plant-pink sm:text-base/6">
                                                        <span className="col-start-1 row-start-1 truncate pr-6 text-base font-semibold">
                                                            {selected.name}
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
                                                            {types.map((type) => (
                                                                <Listbox.Option key={type.id} value={type}>
                                                                    {({ active, selected: isSelected }) => (
                                                                        <li
                                                                            className={`${
                                                                                active
                                                                                    ? 'bg-plant-pink text-white'
                                                                                    : 'bg-white text-gray-900'
                                                                            } relative cursor-default select-none py-2 pl-3 pr-9 outline-none`}
                                                                        >
                                                                            <span
                                                                                className={`${
                                                                                    isSelected ? 'font-semibold' : 'font-normal'
                                                                                } block truncate`}
                                                                            >
                                                                                {type.name}
                                                                            </span>

                                                                            {isSelected && (
                                                                                <span
                                                                                    className={`${
                                                                                        active ? 'text-white' : 'text-plant-pink'
                                                                                    } absolute inset-y-0 right-0 flex items-center pr-4`}
                                                                                >
                                                                                    <CheckIcon aria-hidden="true" className="size-5" />
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
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-6">
                            <div className="mt-6 space-y-8">
                                {selected.name === 'Individual' && (
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                                        <h2 className="col-span-6 text-base/7 font-semibold text-gray-900">
                                            Contact Information
                                        </h2>

                                        <div className="relative col-span-6 sm:col-span-3">
                                            <label className={floatingLabelClassName} htmlFor="first-name">
                                                First Name
                                            </label>
                                            <input
                                                id="first-name"
                                                type="text"
                                                required
                                                autoComplete="given-name"
                                                className={inputClassName}
                                                value={form.individual.firstName}
                                                onChange={(e) =>
                                                    update(['individual', 'firstName'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3">
                                            <label className={floatingLabelClassName} htmlFor="last-name">
                                                Last Name
                                            </label>
                                            <input
                                                id="last-name"
                                                type="text"
                                                required
                                                autoComplete="family-name"
                                                className={inputClassName}
                                                value={form.individual.lastName}
                                                onChange={(e) =>
                                                    update(['individual', 'lastName'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <fieldset className="relative col-span-6 pb-2">
                                            <p className="absolute -top-3 left-2 inline-block rounded-lg bg-plant-white px-1 text-sm font-medium text-gray-900">
                                                How do you prefer to be contacted?
                                            </p>
                                            <div className="mt-6 space-y-3 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                                {notificationMethods.map((method) => (
                                                    <div key={method.id} className="flex items-center">
                                                        <input
                                                            id={`individual-${method.id}`}
                                                            name="individual-notification-method"
                                                            type="radio"
                                                            className="size-4"
                                                            checked={
                                                                form.individual.notificationMethod === method.id
                                                            }
                                                            onChange={() =>
                                                                update(
                                                                    ['individual', 'notificationMethod'],
                                                                    method.id
                                                                )
                                                            }
                                                        />
                                                        <label
                                                            htmlFor={`individual-${method.id}`}
                                                            className="ml-3 block text-sm font-medium text-gray-900"
                                                        >
                                                            {method.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>

                                        <div className="relative col-span-6 sm:col-span-4">
                                            <label className={floatingLabelClassName} htmlFor="email">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className={inputClassName}
                                                placeholder="you@example.com"
                                                value={form.individual.email}
                                                onChange={(e) =>
                                                    update(['individual', 'email'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3">
                                            <label className={floatingLabelClassName} htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                className={inputClassName}
                                                placeholder="123-456-7890"
                                                value={form.individual.phone}
                                                onChange={(e) =>
                                                    update(['individual', 'phone'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6">
                                            <label className={floatingLabelClassName} htmlFor="street-address">
                                                Street address
                                            </label>
                                            <input
                                                id="street-address"
                                                type="text"
                                                autoComplete="street-address"
                                                className={inputClassName}
                                                value={form.individual.address.streetAddress}
                                                onChange={(e) =>
                                                    update(
                                                        ['individual', 'address', 'streetAddress'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label className={floatingLabelClassName} htmlFor="city">
                                                City
                                            </label>
                                            <input
                                                id="city"
                                                type="text"
                                                autoComplete="address-level2"
                                                className={inputClassName}
                                                value={form.individual.address.city}
                                                onChange={(e) =>
                                                    update(['individual', 'address', 'city'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className={floatingLabelClassName} htmlFor="region">
                                                State / Province
                                            </label>
                                            <input
                                                id="region"
                                                type="text"
                                                autoComplete="address-level1"
                                                className={inputClassName}
                                                value={form.individual.address.region}
                                                onChange={(e) =>
                                                    update(['individual', 'address', 'region'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className={floatingLabelClassName} htmlFor="postal-code">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                id="postal-code"
                                                type="text"
                                                autoComplete="postal-code"
                                                className={inputClassName}
                                                value={form.individual.address.postalCode}
                                                onChange={(e) =>
                                                    update(
                                                        ['individual', 'address', 'postalCode'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                )}

                                {selected.name === 'Business' && (
                                    <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
                                        <div className="relative col-span-6">
                                            <label className={floatingLabelClassName} htmlFor="business-name">
                                                Business Name
                                            </label>
                                            <input
                                                id="business-name"
                                                type="text"
                                                required
                                                className={inputClassName}
                                                value={form.business.businessName}
                                                onChange={(e) =>
                                                    update(['business', 'businessName'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6">
                                            <label
                                                className={floatingLabelClassName}
                                                htmlFor="business-contact-name"
                                            >
                                                Contact Person
                                            </label>
                                            <input
                                                id="business-contact-name"
                                                type="text"
                                                required
                                                className={inputClassName}
                                                value={form.business.contactName}
                                                onChange={(e) =>
                                                    update(['business', 'contactName'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <fieldset className="relative col-span-6 pb-2">
                                            <p className="absolute -top-3 left-2 inline-block rounded-lg bg-plant-white px-1 text-sm font-medium text-gray-900">
                                                How do you prefer to be contacted?
                                            </p>
                                            <div className="mt-6 space-y-3 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                                                {notificationMethods.map((method) => (
                                                    <div key={method.id} className="flex items-center">
                                                        <input
                                                            id={`business-${method.id}`}
                                                            name="business-notification-method"
                                                            type="radio"
                                                            className="size-4"
                                                            checked={
                                                                form.business.notificationMethod === method.id
                                                            }
                                                            onChange={() =>
                                                                update(
                                                                    ['business', 'notificationMethod'],
                                                                    method.id
                                                                )
                                                            }
                                                        />
                                                        <label
                                                            htmlFor={`business-${method.id}`}
                                                            className="ml-3 block text-sm font-medium text-gray-900"
                                                        >
                                                            {method.title}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </fieldset>

                                        <div className="relative col-span-6 sm:col-span-4">
                                            <label className={floatingLabelClassName} htmlFor="business-email">
                                                Business Email
                                            </label>
                                            <input
                                                id="business-email"
                                                type="email"
                                                required
                                                className={inputClassName}
                                                placeholder="you@example.com"
                                                value={form.business.email}
                                                onChange={(e) =>
                                                    update(['business', 'email'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3">
                                            <label className={floatingLabelClassName} htmlFor="business-phone">
                                                Business Phone
                                            </label>
                                            <input
                                                id="business-phone"
                                                type="tel"
                                                className={inputClassName}
                                                placeholder="123-456-7890"
                                                value={form.business.phone}
                                                onChange={(e) =>
                                                    update(['business', 'phone'], e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6">
                                            <label
                                                className={floatingLabelClassName}
                                                htmlFor="business-street-address"
                                            >
                                                Street address
                                            </label>
                                            <input
                                                id="business-street-address"
                                                type="text"
                                                className={inputClassName}
                                                value={form.business.businessAddress.streetAddress}
                                                onChange={(e) =>
                                                    update(
                                                        ['business', 'businessAddress', 'streetAddress'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label className={floatingLabelClassName} htmlFor="business-city">
                                                City
                                            </label>
                                            <input
                                                id="business-city"
                                                type="text"
                                                className={inputClassName}
                                                value={form.business.businessAddress.city}
                                                onChange={(e) =>
                                                    update(
                                                        ['business', 'businessAddress', 'city'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label className={floatingLabelClassName} htmlFor="business-region">
                                                State / Province
                                            </label>
                                            <input
                                                id="business-region"
                                                type="text"
                                                className={inputClassName}
                                                value={form.business.businessAddress.region}
                                                onChange={(e) =>
                                                    update(
                                                        ['business', 'businessAddress', 'region'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="relative col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label
                                                className={floatingLabelClassName}
                                                htmlFor="business-postal-code"
                                            >
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                id="business-postal-code"
                                                type="text"
                                                className={inputClassName}
                                                value={form.business.businessAddress.postalCode}
                                                onChange={(e) =>
                                                    update(
                                                        ['business', 'businessAddress', 'postalCode'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold text-gray-900">Services Requested</h2>

                            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 md:grid-cols-4">
                                {selected.name === 'Business' && (
                                    <div className="flex">
                                        <input
                                            id="commercial-service"
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={form.services.commercial}
                                            onChange={(e) =>
                                                update(['services', 'commercial'], e.target.checked)
                                            }
                                        />
                                        <label
                                            htmlFor="commercial-service"
                                            className="w-full cursor-pointer select-none rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-center font-bold text-gray-800 transition-colors duration-200 ease-in-out peer-checked:border-plant-pink peer-checked:bg-plant-pink peer-checked:text-white"
                                        >
                                            Maintenance
                                        </label>
                                    </div>
                                )}

                                {selected.name === 'Individual' && (
                                    <div className="flex">
                                        <input
                                            id="residential-service"
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={form.services.residential}
                                            onChange={(e) =>
                                                update(['services', 'residential'], e.target.checked)
                                            }
                                        />
                                        <label
                                            htmlFor="residential-service"
                                            className="w-full cursor-pointer select-none rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-center font-bold text-gray-800 transition-colors duration-200 ease-in-out peer-checked:border-plant-pink peer-checked:bg-plant-pink peer-checked:text-white"
                                        >
                                            Maintenance
                                        </label>
                                    </div>
                                )}

                                {[
                                    ['livingWall', 'Living Walls'],
                                    ['design', 'Design'],
                                    ['installation', 'Installation'],
                                    ['consultation', 'Consultation'],
                                ].map(([key, label]) => (
                                    <div key={key} className="flex">
                                        <input
                                            id={`${key}-service`}
                                            type="checkbox"
                                            className="peer hidden"
                                            checked={form.services[key]}
                                            onChange={(e) =>
                                                update(['services', key], e.target.checked)
                                            }
                                        />
                                        <label
                                            htmlFor={`${key}-service`}
                                            className="w-full cursor-pointer select-none rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-center font-bold text-gray-800 transition-colors duration-200 ease-in-out peer-checked:border-plant-pink peer-checked:bg-plant-pink peer-checked:text-white"
                                        >
                                            {label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {form.services.residential && (
                            <div className="border-b border-gray-900/10 pb-12">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Residential Service Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">Plant care needs</p>

                                <textarea
                                    rows="4"
                                    className={`${inputClassName} mt-4`}
                                    placeholder="Describe your residential plant care needs"
                                    value={form.details.residential.description}
                                    onChange={(e) =>
                                        update(
                                            ['details', 'residential', 'description'],
                                            e.target.value
                                        )
                                    }
                                />

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="existing-plants">
                                        Existing Plants
                                    </label>
                                    <textarea
                                        id="existing-plants"
                                        rows="3"
                                        className={inputClassName}
                                        placeholder="List any plants you currently have and their condition."
                                        value={form.details.residential.existingPlants}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'residential', 'existingPlants'],
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {form.services.commercial && (
                            <div className="border-b border-gray-900/10 pb-12">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Commercial Service Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Let us know about your commercial space and plant needs.
                                </p>

                                <textarea
                                    rows="4"
                                    className={`${inputClassName} mt-4`}
                                    placeholder="Describe your project needs for the commercial space."
                                    value={form.details.commercial.description}
                                    onChange={(e) =>
                                        update(
                                            ['details', 'commercial', 'description'],
                                            e.target.value
                                        )
                                    }
                                />

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="business-type">
                                        Business Type
                                    </label>
                                    <select
                                        id="business-type"
                                        className={inputClassName}
                                        value={form.details.commercial.businessType}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'commercial', 'businessType'],
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">Select your business type</option>
                                        <option value="Office">Office</option>
                                        <option value="Retail">Retail</option>
                                        <option value="Hospitality">Hospitality</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        )}

                        {form.services.livingWall && (
                            <div className="border-b border-gray-900/10 pb-12">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Living Wall Service Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Tell us more about your desired living wall installation.
                                </p>

                                <textarea
                                    rows="4"
                                    className={`${inputClassName} mt-4`}
                                    placeholder="What is your vision for the living wall?"
                                    value={form.details.livingWall.description}
                                    onChange={(e) =>
                                        update(
                                            ['details', 'livingWall', 'description'],
                                            e.target.value
                                        )
                                    }
                                />

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="wall-location">
                                        Wall Location
                                    </label>
                                    <select
                                        id="wall-location"
                                        className={inputClassName}
                                        value={form.details.livingWall.location}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'livingWall', 'location'],
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">Select location</option>
                                        <option value="Indoor">Indoor</option>
                                        <option value="Outdoor">Outdoor</option>
                                    </select>
                                </div>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="wall-dimensions">
                                        Approximate Dimensions (Height x Width)
                                    </label>
                                    <input
                                        id="wall-dimensions"
                                        type="text"
                                        className={inputClassName}
                                        placeholder="e.g., 8 ft x 10 ft"
                                        value={form.details.livingWall.dimensions}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'livingWall', 'dimensions'],
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="plant-preferences">
                                        Plant Preferences
                                    </label>
                                    <textarea
                                        id="plant-preferences"
                                        rows="3"
                                        className={inputClassName}
                                        placeholder="Any specific plants or themes you want included?"
                                        value={form.details.livingWall.plants}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'livingWall', 'plants'],
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {form.services.design && (
                            <div className="border-b border-gray-900/10 pb-12">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Design Service Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Provide information about your design preferences.
                                </p>

                                <textarea
                                    rows="4"
                                    className={`${inputClassName} mt-4`}
                                    placeholder="Share your design ideas or inspiration."
                                    value={form.details.design.description}
                                    onChange={(e) =>
                                        update(['details', 'design', 'description'], e.target.value)
                                    }
                                />

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="color-preferences">
                                        Color Preferences
                                    </label>
                                    <textarea
                                        id="color-preferences"
                                        rows="3"
                                        className={inputClassName}
                                        placeholder="List any specific color themes or palettes."
                                        value={form.details.design.colors}
                                        onChange={(e) =>
                                            update(['details', 'design', 'colors'], e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {form.services.consultation && (
                            <div className="border-b border-gray-900/10 pb-12">
                                <h3 className="text-base font-semibold text-gray-900">
                                    Consultation Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Provide details about your consultation request.
                                </p>

                                <textarea
                                    rows="4"
                                    className={`${inputClassName} mt-4`}
                                    placeholder="What topics would you like to discuss during the consultation?"
                                    value={form.details.consultation.description}
                                    onChange={(e) =>
                                        update(
                                            ['details', 'consultation', 'description'],
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        )}

                        <div className="relative max-w-sm">
                            <label className={floatingLabelClassName} htmlFor="project-date">
                                Preferred Project Date
                            </label>
                            <input
                                id="project-date"
                                type="date"
                                className={inputClassName}
                                value={form.projectDate}
                                onChange={(e) => update(['projectDate'], e.target.value)}
                            />
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-plant-pink px-4 py-2 text-base font-medium text-white hover:bg-plant-pink focus:ring-2 focus:ring-plant-pink focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}