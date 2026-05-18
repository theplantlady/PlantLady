'use client'

import { useState, useEffect, Fragment } from 'react'
import { Listbox, Label, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useDispatch } from 'react-redux'
import { setActiveContextSection, setSelectedPlantPalette } from '@/redux/uiSlice'

const types = [
    { id: 1, name: 'Individual' },
    { id: 2, name: 'Business' },
]

const notificationMethods = [
    { id: 'email', title: 'Email' },
    { id: 'phone', title: 'Phone' },
    { id: 'sms', title: 'Phone (SMS)' },
]

const livingWallPlantOptions = [
    { id: 'pothos', label: 'Pothos' },
    { id: 'philodendron', label: 'Philodendron' },
    { id: 'ferns', label: 'Ferns' },
    { id: 'spider-plant', label: 'Spider Plant' },
    { id: 'syngonium', label: 'Arrowhead / Syngonium' },
    { id: 'peperomia', label: 'Peperomia' },
    { id: 'prayer-plant', label: 'Prayer Plant' },
    { id: 'tradescantia', label: 'Tradescantia' },
    { id: 'moss', label: 'Moss / Preserved Look' },
    { id: 'designer-choice', label: "Designer's Choice" },
]

const residentialPlantOptions = [
    { id: 'pothos', label: 'Pothos' },
    { id: 'snake-plant', label: 'Snake Plant' },
    { id: 'zz-plant', label: 'ZZ Plant' },
    { id: 'monstera', label: 'Monstera' },
    { id: 'philodendron', label: 'Philodendron' },
    { id: 'peace-lily', label: 'Peace Lily' },
    { id: 'fiddle-leaf-fig', label: 'Fiddle Leaf Fig' },
    { id: 'rubber-plant', label: 'Rubber Plant' },
    { id: 'dracaena', label: 'Dracaena' },
    { id: 'spider-plant', label: 'Spider Plant' },
    { id: 'ferns', label: 'Ferns' },
    { id: 'palms', label: 'Palms' },
    { id: 'succulents-cacti', label: 'Succulents / Cacti' },
    { id: 'orchids', label: 'Orchids' },
    { id: 'not-sure', label: 'Not Sure Yet' },
]

const commercialAreaOptions = [
    { id: 'lobby', label: 'Lobby / Reception' },
    { id: 'offices', label: 'Offices' },
    { id: 'conference-rooms', label: 'Conference Rooms' },
    { id: 'restaurant-dining', label: 'Dining / Hospitality Area' },
    { id: 'retail-floor', label: 'Retail Floor' },
    { id: 'waiting-room', label: 'Waiting Room' },
    { id: 'patio', label: 'Patio / Outdoor Area' },
    { id: 'restrooms', label: 'Restrooms' },
    { id: 'common-areas', label: 'Common Areas' },
    { id: 'other', label: 'Other' },
]

const designStyleOptions = [
    { id: 'clean-modern', label: 'Clean Modern' },
    { id: 'lush-tropical', label: 'Lush Tropical' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'earthy-organic', label: 'Earthy Organic' },
    { id: 'colorful-textural', label: 'Colorful / Textural' },
    { id: 'low-maintenance', label: 'Low Maintenance' },
    { id: 'statement-moment', label: 'Statement Moment' },
    { id: 'not-sure', label: 'Not Sure Yet' },
]

const consultationTypeOptions = [
    { id: 'plant-health', label: 'Plant Health' },
    { id: 'plant-selection', label: 'Plant Selection' },
    { id: 'layout-styling', label: 'Layout / Styling' },
    { id: 'repotting-care', label: 'Repotting / Care Plan' },
    { id: 'light-assessment', label: 'Light Assessment' },
    { id: 'pet-safe-plants', label: 'Pet-Safe Plants' },
    { id: 'maintenance-plan', label: 'Maintenance Plan' },
    { id: 'living-wall-planning', label: 'Living Wall Planning' },
]

const plantPaletteOptions = [
    ...livingWallPlantOptions,
    ...residentialPlantOptions,
].filter((plant, index, plants) => plants.findIndex((item) => item.id === plant.id) === index)

const inputClassName =
    'block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-plant-pink sm:text-base/6'

const floatingLabelClassName =
    'absolute -top-3 left-2 inline-block rounded-lg bg-plant-white px-1 text-sm font-medium text-gray-900'

const servicePillClassName =
    'w-full cursor-pointer select-none rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-center font-bold text-gray-800 transition-colors duration-200 ease-in-out peer-checked:border-plant-pink peer-checked:bg-plant-pink peer-checked:text-white'

const optionChipClassName =
    'w-full cursor-pointer select-none rounded-lg border-2 border-gray-300 bg-white px-4 py-2 text-center text-sm font-bold text-gray-800 transition-colors duration-200 ease-in-out peer-checked:border-plant-pink peer-checked:bg-plant-pink peer-checked:text-white'

const sectionClassName = 'border-b border-gray-900/10 pb-12'

export default function SalesForm() {
    const dispatch = useDispatch()
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
            livingWall: false,
            residential: false,
            commercial: false,
            installation: false,
            design: false,
            consultation: false,
        },
        details: {
            residential: {
                description: '',
                servicePlan: '',
                quoteBasis: '',
                primaryNeed: '',
                plantChoices: [],
                existingPlants: '',
                plantCount: '',
                lightConditions: '',
                careFrequency: '',
                petsOrChildren: '',
                oneTimeScope: '',
                oneTimeBudget: '',
            },
            commercial: {
                description: '',
                businessType: '',
                primaryNeed: '',
                areas: [],
                existingPlants: '',
                plantCount: '',
                lightConditions: '',
                maintenanceFrequency: '',
                serviceWindow: '',
                accessMethod: '',
                parkingLoading: '',
                accessNotes: '',
                monthlyBudget: '',
            },
            livingWall: {
                description: '',
                location: '',
                dimensions: '',
                lighting: '',
                budget: '',
                timeline: '',
                plantChoices: [],
                plants: '',
            },
            installation: {
                description: '',
            },
            design: {
                description: '',
                projectType: '',
                designGoal: '',
                styleDirection: [],
                spaceDetails: '',
                maintenancePreference: '',
                budget: '',
                timeline: '',
                colors: '',
            },
            consultation: {
                description: '',
                consultationTypes: [],
                urgency: '',
                meetingPreference: '',
                photosAvailable: '',
                decisionStage: '',
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

    const toggleArrayValue = (path, value) => {
        setForm((prev) => {
            const next = { ...prev }
            let ref = next

            for (let i = 0; i < path.length - 1; i++) {
                ref[path[i]] = { ...ref[path[i]] }
                ref = ref[path[i]]
            }

            const key = path[path.length - 1]
            const current = Array.isArray(ref[key]) ? ref[key] : []

            ref[key] = current.includes(value)
                ? current.filter((item) => item !== value)
                : [...current, value]

            return next
        })
    }

    const handleTypeChange = (value) => {
        setSelected(value)
        update(['type'], value.name)
    }

    const lw = form.details.livingWall
    const residential = form.details.residential
    const commercial = form.details.commercial
    const design = form.details.design
    const consultation = form.details.consultation

    const livingWallPlantChoices = lw.plantChoices || []
    const residentialPlantChoices = residential.plantChoices || []
    const commercialAreaChoices = commercial.areas || []
    const designStyleChoices = design.styleDirection || []
    const consultationTypeChoices = consultation.consultationTypes || []
    const selectedPlantPalette = [...new Set([...livingWallPlantChoices, ...residentialPlantChoices])]
    const selectedPlantPaletteKey = selectedPlantPalette.join('|')

    const showDimensions = !!lw.location
    const showLighting = !!lw.dimensions
    const showBudget = !!lw.lighting
    const showTimeline = !!lw.budget

    const showResidentialQuoteBasis = !!residential.servicePlan
    const showResidentialOneTimeQuote = residential.servicePlan === 'One Time'
    const showResidentialPlantChoices = !!residential.servicePlan && !!residential.primaryNeed
    const showResidentialLogistics =
        showResidentialPlantChoices &&
        (residentialPlantChoices.length > 0 || !!(residential.existingPlants || '').trim())
    const showResidentialFrequency = !!residential.plantCount
    const showResidentialRecurringCare =
        residential.servicePlan === 'Recurring' || residential.servicePlan === 'Not Sure'

    const showCommercialAreas = !!commercial.primaryNeed
    const showCommercialScale =
        showCommercialAreas &&
        (commercialAreaChoices.length > 0 || !!(commercial.existingPlants || '').trim())
    const showCommercialMaintenance = !!commercial.plantCount
    const showCommercialAccess = !!commercial.maintenanceFrequency

    const showDesignDirection = !!design.projectType
    const showDesignBudget = designStyleChoices.length > 0 || !!(design.spaceDetails || '').trim()
    const showConsultationDetails = consultationTypeChoices.length > 0

    useEffect(() => {
        const selectedPlantIds = selectedPlantPaletteKey ? selectedPlantPaletteKey.split('|') : []
        const selectedPlants = selectedPlantIds
            .map((plantId) => plantPaletteOptions.find((plant) => plant.id === plantId))
            .filter(Boolean)

        dispatch(setSelectedPlantPalette(selectedPlants))

        if (selectedPlants.length > 0) {
            dispatch(setActiveContextSection('plant-palette'))
        }
    }, [dispatch, selectedPlantPaletteKey])

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
        <div className="mx-auto max-w-7xl bg-plant-white p-4 text-gray-900">
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
                                            className={servicePillClassName}
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
                                            className={servicePillClassName}
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
                                            className={servicePillClassName}
                                        >
                                            {label}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {selected.name === 'Individual' && form.services.residential && (
                            <div className={sectionClassName}>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Residential Service Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Help us understand whether this is a one-time plant service or continuing care.
                                </p>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="residential-description">
                                        What can we help with?
                                    </label>
                                    <textarea
                                        id="residential-description"
                                        rows="4"
                                        className={inputClassName}
                                        placeholder="Tell us what is going on with your plants or space."
                                        value={residential.description}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'residential', 'description'],
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <label className={floatingLabelClassName} htmlFor="residential-service-plan">
                                            Service Plan
                                        </label>
                                        <select
                                            id="residential-service-plan"
                                            className={inputClassName}
                                            value={residential.servicePlan}
                                            onChange={(e) =>
                                                update(
                                                    ['details', 'residential', 'servicePlan'],
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">Select service type</option>
                                            <option value="One Time">One-time service</option>
                                            <option value="Recurring">Continuing plant care</option>
                                            <option value="Not Sure">Not sure yet</option>
                                        </select>
                                    </div>

                                    {showResidentialQuoteBasis && (
                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="residential-quote-basis">
                                                Quote Basis
                                            </label>
                                            <select
                                                id="residential-quote-basis"
                                                className={inputClassName}
                                                value={residential.quoteBasis}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'quoteBasis'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select quote basis</option>
                                                <option value="Existing Plants">Quote my current plants</option>
                                                <option value="Selected Plants">Quote a starter plant selection</option>
                                                <option value="Both">Use my current plants and selected plants</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>
                                    )}
                                </div>

                                {showResidentialOneTimeQuote && (
                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="residential-one-time-scope">
                                                One-Time Service
                                            </label>
                                            <select
                                                id="residential-one-time-scope"
                                                className={inputClassName}
                                                value={residential.oneTimeScope}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'oneTimeScope'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select one-time need</option>
                                                <option value="Plant Health Reset">Plant health reset</option>
                                                <option value="Repotting Visit">Repotting visit</option>
                                                <option value="Plant Refresh">Plant refresh / cleanup</option>
                                                <option value="Plant Shopping">Plant shopping and setup</option>
                                                <option value="Move In Setup">Move-in setup</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="residential-one-time-budget">
                                                One-Time Budget
                                            </label>
                                            <select
                                                id="residential-one-time-budget"
                                                className={inputClassName}
                                                value={residential.oneTimeBudget}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'oneTimeBudget'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select range</option>
                                                <option value="Under $150">Under $150</option>
                                                <option value="$150-$300">$150-$300</option>
                                                <option value="$300-$600">$300-$600</option>
                                                <option value="$600+">$600+</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="residential-primary-need">
                                        Primary Need
                                    </label>
                                    <select
                                        id="residential-primary-need"
                                        className={inputClassName}
                                        value={residential.primaryNeed}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'residential', 'primaryNeed'],
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">Select primary need</option>
                                        <option value="Routine Maintenance">Routine plant maintenance</option>
                                        <option value="Plant Health">Plant health / rescue</option>
                                        <option value="Repotting">Repotting / refresh</option>
                                        <option value="Styling">Plant styling / placement</option>
                                        <option value="New Plants">Help choosing new plants</option>
                                        <option value="Move In Setup">New home / move-in plant setup</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {showResidentialPlantChoices && (
                                    <>
                                        <fieldset className="mt-6">
                                            <legend className="text-sm font-semibold text-gray-900">
                                                Plants to include in the quote conversation
                                            </legend>
                                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {residentialPlantOptions.map((plant) => {
                                                    const inputId = `residential-plant-${plant.id}`

                                                    return (
                                                        <div key={plant.id} className="flex">
                                                            <input
                                                                id={inputId}
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                checked={residentialPlantChoices.includes(plant.id)}
                                                                onChange={() =>
                                                                    toggleArrayValue(
                                                                        ['details', 'residential', 'plantChoices'],
                                                                        plant.id
                                                                    )
                                                                }
                                                            />
                                                            <label htmlFor={inputId} className={optionChipClassName}>
                                                                {plant.label}
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </fieldset>

                                        <div className="relative mt-4">
                                            <label className={floatingLabelClassName} htmlFor="residential-existing-plants">
                                                Existing Plants
                                            </label>
                                            <textarea
                                                id="residential-existing-plants"
                                                rows="3"
                                                className={inputClassName}
                                                placeholder="List current plants, rough sizes, and anything struggling."
                                                value={residential.existingPlants}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'existingPlants'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </>
                                )}

                                {showResidentialLogistics && (
                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="residential-plant-count">
                                                Approximate Plant Count
                                            </label>
                                            <select
                                                id="residential-plant-count"
                                                className={inputClassName}
                                                value={residential.plantCount}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'plantCount'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select range</option>
                                                <option value="1-5">1-5 plants</option>
                                                <option value="6-15">6-15 plants</option>
                                                <option value="16-30">16-30 plants</option>
                                                <option value="31+">31+ plants</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="residential-light-conditions">
                                                Light Conditions
                                            </label>
                                            <select
                                                id="residential-light-conditions"
                                                className={inputClassName}
                                                value={residential.lightConditions}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'lightConditions'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select lighting</option>
                                                <option value="Low Light">Low light</option>
                                                <option value="Medium Indirect">Medium indirect light</option>
                                                <option value="Bright Indirect">Bright indirect light</option>
                                                <option value="Direct Sun">Direct sun</option>
                                                <option value="Mixed">Mixed conditions</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {showResidentialFrequency && (
                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        {showResidentialRecurringCare && (
                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="residential-care-frequency">
                                                    Desired Care Frequency
                                                </label>
                                                <select
                                                    id="residential-care-frequency"
                                                    className={inputClassName}
                                                    value={residential.careFrequency}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'residential', 'careFrequency'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select frequency</option>
                                                    <option value="Weekly">Weekly</option>
                                                    <option value="Biweekly">Every other week</option>
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Seasonal">Seasonal refreshes</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>
                                        )}

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="residential-pets-children">
                                                Pets or Children?
                                            </label>
                                            <select
                                                id="residential-pets-children"
                                                className={inputClassName}
                                                value={residential.petsOrChildren}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'residential', 'petsOrChildren'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select one</option>
                                                <option value="Pets">Pets in the home</option>
                                                <option value="Children">Children in the home</option>
                                                <option value="Both">Pets and children</option>
                                                <option value="Neither">Neither</option>
                                                <option value="Prefer Safe Plants">Prefer non-toxic plant planning</option>
                                            </select>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {selected.name === 'Business' && form.services.commercial && (
                            <div className={sectionClassName}>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Commercial Maintenance Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Tell us about the space, service expectations, and recurring care fit.
                                </p>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="commercial-description">
                                        Project Need
                                    </label>
                                    <textarea
                                        id="commercial-description"
                                        rows="4"
                                        className={inputClassName}
                                        placeholder="Describe your commercial plant maintenance or refresh need."
                                        value={commercial.description}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'commercial', 'description'],
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <label className={floatingLabelClassName} htmlFor="business-type">
                                            Business Type
                                        </label>
                                        <select
                                            id="business-type"
                                            className={inputClassName}
                                            value={commercial.businessType}
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
                                            <option value="Restaurant">Restaurant</option>
                                            <option value="Hospitality">Hospitality</option>
                                            <option value="Medical / Wellness">Medical / Wellness</option>
                                            <option value="Salon / Spa">Salon / Spa</option>
                                            <option value="Apartment / Multifamily">Apartment / Multifamily</option>
                                            <option value="Event Venue">Event Venue</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="relative">
                                        <label className={floatingLabelClassName} htmlFor="commercial-primary-need">
                                            Primary Need
                                        </label>
                                        <select
                                            id="commercial-primary-need"
                                            className={inputClassName}
                                            value={commercial.primaryNeed}
                                            onChange={(e) =>
                                                update(
                                                    ['details', 'commercial', 'primaryNeed'],
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">Select primary need</option>
                                            <option value="Routine Maintenance">Routine plant maintenance</option>
                                            <option value="New Plant Program">New plant program</option>
                                            <option value="Plant Replacement">Plant replacement / refresh</option>
                                            <option value="Plant Health">Plant health / rescue</option>
                                            <option value="Styling">Plant styling / placement</option>
                                            <option value="Seasonal Refresh">Seasonal refresh</option>
                                            <option value="Not Sure">Not sure yet</option>
                                        </select>
                                    </div>
                                </div>

                                {showCommercialAreas && (
                                    <>
                                        <fieldset className="mt-6">
                                            <legend className="text-sm font-semibold text-gray-900">
                                                Which areas need plants or maintenance?
                                            </legend>
                                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {commercialAreaOptions.map((area) => {
                                                    const inputId = `commercial-area-${area.id}`

                                                    return (
                                                        <div key={area.id} className="flex">
                                                            <input
                                                                id={inputId}
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                checked={commercialAreaChoices.includes(area.id)}
                                                                onChange={() =>
                                                                    toggleArrayValue(
                                                                        ['details', 'commercial', 'areas'],
                                                                        area.id
                                                                    )
                                                                }
                                                            />
                                                            <label htmlFor={inputId} className={optionChipClassName}>
                                                                {area.label}
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </fieldset>

                                        <div className="relative mt-4">
                                            <label className={floatingLabelClassName} htmlFor="commercial-existing-plants">
                                                Existing Plants or Program
                                            </label>
                                            <textarea
                                                id="commercial-existing-plants"
                                                rows="3"
                                                className={inputClassName}
                                                placeholder="Tell us what is already in place, if anything."
                                                value={commercial.existingPlants}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'commercial', 'existingPlants'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </>
                                )}

                                {showCommercialScale && (
                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="commercial-plant-count">
                                                Approximate Plant Count
                                            </label>
                                            <select
                                                id="commercial-plant-count"
                                                className={inputClassName}
                                                value={commercial.plantCount}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'commercial', 'plantCount'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select range</option>
                                                <option value="1-15">1-15 plants</option>
                                                <option value="16-40">16-40 plants</option>
                                                <option value="41-75">41-75 plants</option>
                                                <option value="76+">76+ plants</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="commercial-light-conditions">
                                                Light Conditions
                                            </label>
                                            <select
                                                id="commercial-light-conditions"
                                                className={inputClassName}
                                                value={commercial.lightConditions}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'commercial', 'lightConditions'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select lighting</option>
                                                <option value="Low Light">Low light</option>
                                                <option value="Medium Indirect">Medium indirect light</option>
                                                <option value="Bright Indirect">Bright indirect light</option>
                                                <option value="Direct Sun">Direct sun</option>
                                                <option value="Mixed">Mixed conditions</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {showCommercialMaintenance && (
                                    <div className="mt-6 space-y-4">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="commercial-maintenance-frequency">
                                                    Maintenance Frequency
                                                </label>
                                                <select
                                                    id="commercial-maintenance-frequency"
                                                    className={inputClassName}
                                                    value={commercial.maintenanceFrequency}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'commercial', 'maintenanceFrequency'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select frequency</option>
                                                    <option value="Weekly">Weekly</option>
                                                    <option value="Biweekly">Every other week</option>
                                                    <option value="Monthly">Monthly</option>
                                                    <option value="Quarterly">Quarterly refresh</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>

                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="commercial-service-window">
                                                    Service Window
                                                </label>
                                                <select
                                                    id="commercial-service-window"
                                                    className={inputClassName}
                                                    value={commercial.serviceWindow}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'commercial', 'serviceWindow'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select timing</option>
                                                    <option value="Business Hours">During business hours</option>
                                                    <option value="Before Open">Before opening</option>
                                                    <option value="After Hours">After hours</option>
                                                    <option value="Weekend">Weekend access</option>
                                                    <option value="Flexible">Flexible</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>

                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="commercial-monthly-budget">
                                                    Monthly Budget
                                                </label>
                                                <select
                                                    id="commercial-monthly-budget"
                                                    className={inputClassName}
                                                    value={commercial.monthlyBudget}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'commercial', 'monthlyBudget'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select range</option>
                                                    <option value="Under $300">Under $300</option>
                                                    <option value="$300-$750">$300-$750</option>
                                                    <option value="$750-$1,500">$750-$1,500</option>
                                                    <option value="$1,500+">$1,500+</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>
                                        </div>

                                        {showCommercialAccess && (
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    <div className="relative">
                                                        <label className={floatingLabelClassName} htmlFor="commercial-access-method">
                                                            Building Access
                                                        </label>
                                                        <select
                                                            id="commercial-access-method"
                                                            className={inputClassName}
                                                            value={commercial.accessMethod}
                                                            onChange={(e) =>
                                                                update(
                                                                    ['details', 'commercial', 'accessMethod'],
                                                                    e.target.value
                                                                )
                                                            }
                                                        >
                                                            <option value="">Select access</option>
                                                            <option value="Escorted">Someone escorts the technician</option>
                                                            <option value="Front Desk">Front desk / concierge access</option>
                                                            <option value="Key or Code">Key, fob, or access code</option>
                                                            <option value="Security Check In">Security check-in required</option>
                                                            <option value="Public Access">Public access during service window</option>
                                                            <option value="Not Sure">Not sure yet</option>
                                                        </select>
                                                    </div>

                                                    <div className="relative">
                                                        <label className={floatingLabelClassName} htmlFor="commercial-parking-loading">
                                                            Parking / Loading
                                                        </label>
                                                        <select
                                                            id="commercial-parking-loading"
                                                            className={inputClassName}
                                                            value={commercial.parkingLoading}
                                                            onChange={(e) =>
                                                                update(
                                                                    ['details', 'commercial', 'parkingLoading'],
                                                                    e.target.value
                                                                )
                                                            }
                                                        >
                                                            <option value="">Select parking</option>
                                                            <option value="Easy Parking">Easy parking</option>
                                                            <option value="Loading Zone">Loading zone available</option>
                                                            <option value="Garage">Garage parking</option>
                                                            <option value="Street Parking">Street parking</option>
                                                            <option value="Difficult">Parking is difficult</option>
                                                            <option value="Not Sure">Not sure yet</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="relative">
                                                    <label className={floatingLabelClassName} htmlFor="commercial-access-notes">
                                                        Access Notes
                                                    </label>
                                                    <textarea
                                                        id="commercial-access-notes"
                                                        rows="3"
                                                        className={inputClassName}
                                                        placeholder="Hours, parking, loading dock, elevator, gate code, security desk, or after-hours instructions."
                                                        value={commercial.accessNotes}
                                                        onChange={(e) =>
                                                            update(
                                                                ['details', 'commercial', 'accessNotes'],
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {form.services.livingWall && (
                            <div className={sectionClassName}>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Living Wall Service Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    A few focused details help us understand scale, budget, and plant direction.
                                </p>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="living-wall-description">
                                        Vision
                                    </label>
                                    <textarea
                                        id="living-wall-description"
                                        rows="4"
                                        className={inputClassName}
                                        placeholder="What is your vision for the living wall?"
                                        value={lw.description}
                                        onChange={(e) =>
                                            update(
                                                ['details', 'livingWall', 'description'],
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="wall-location">
                                        Wall Location
                                    </label>
                                    <select
                                        id="wall-location"
                                        className={inputClassName}
                                        value={lw.location}
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
                                        <option value="Mixed">Indoor / outdoor mix</option>
                                        <option value="Not Sure">Not sure yet</option>
                                    </select>
                                </div>

                                {showDimensions && (
                                    <div className="relative mt-4">
                                        <label className={floatingLabelClassName} htmlFor="wall-dimensions">
                                            Approximate Dimensions
                                        </label>
                                        <input
                                            id="wall-dimensions"
                                            type="text"
                                            className={inputClassName}
                                            placeholder="e.g., 8 ft x 10 ft"
                                            value={lw.dimensions}
                                            onChange={(e) =>
                                                update(
                                                    ['details', 'livingWall', 'dimensions'],
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                )}

                                {showLighting && (
                                    <div className="relative mt-4">
                                        <label className={floatingLabelClassName} htmlFor="wall-lighting">
                                            Lighting
                                        </label>
                                        <select
                                            id="wall-lighting"
                                            className={inputClassName}
                                            value={lw.lighting}
                                            onChange={(e) =>
                                                update(
                                                    ['details', 'livingWall', 'lighting'],
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">Select lighting</option>
                                            <option value="Low Light">Low light</option>
                                            <option value="Medium Indirect">Medium indirect light</option>
                                            <option value="Bright Indirect">Bright indirect light</option>
                                            <option value="Direct Sun">Direct sun</option>
                                            <option value="Artificial Light">Mostly artificial light</option>
                                            <option value="Not Sure">Not sure yet</option>
                                        </select>
                                    </div>
                                )}

                                {showBudget && (
                                    <div className="relative mt-4">
                                        <label className={floatingLabelClassName} htmlFor="wall-budget">
                                            Budget Range
                                        </label>
                                        <select
                                            id="wall-budget"
                                            className={inputClassName}
                                            value={lw.budget}
                                            onChange={(e) =>
                                                update(
                                                    ['details', 'livingWall', 'budget'],
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">Select range</option>
                                            <option value="Under $2,500">Under $2,500</option>
                                            <option value="$2,500-$5,000">$2,500-$5,000</option>
                                            <option value="$5,000-$10,000">$5,000-$10,000</option>
                                            <option value="$10,000+">$10,000+</option>
                                            <option value="Not Sure">Not sure yet</option>
                                        </select>
                                    </div>
                                )}

                                {showTimeline && (
                                    <div className="relative mt-4">
                                        <label className={floatingLabelClassName} htmlFor="wall-timeline">
                                            Timeline
                                        </label>
                                        <select
                                            id="wall-timeline"
                                            className={inputClassName}
                                            value={lw.timeline}
                                            onChange={(e) =>
                                                update(
                                                    ['details', 'livingWall', 'timeline'],
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">Select timeline</option>
                                            <option value="ASAP">As soon as possible</option>
                                            <option value="1-2 Months">1-2 months</option>
                                            <option value="3-6 Months">3-6 months</option>
                                            <option value="Future Planning">Future planning</option>
                                            <option value="Not Sure">Not sure yet</option>
                                        </select>
                                    </div>
                                )}

                                {!!lw.timeline && (
                                    <>
                                        <fieldset className="mt-6">
                                            <legend className="text-sm font-semibold text-gray-900">
                                                Plant preferences
                                            </legend>
                                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {livingWallPlantOptions.map((plant) => {
                                                    const inputId = `living-wall-plant-${plant.id}`

                                                    return (
                                                        <div key={plant.id} className="flex">
                                                            <input
                                                                id={inputId}
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                checked={livingWallPlantChoices.includes(plant.id)}
                                                                onChange={() =>
                                                                    toggleArrayValue(
                                                                        ['details', 'livingWall', 'plantChoices'],
                                                                        plant.id
                                                                    )
                                                                }
                                                            />
                                                            <label htmlFor={inputId} className={optionChipClassName}>
                                                                {plant.label}
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </fieldset>

                                        <div className="relative mt-4">
                                            <label className={floatingLabelClassName} htmlFor="plant-preferences">
                                                Plant Notes
                                            </label>
                                            <textarea
                                                id="plant-preferences"
                                                rows="3"
                                                className={inputClassName}
                                                placeholder="Any specific plants, textures, colors, or themes you want included?"
                                                value={lw.plants}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'livingWall', 'plants'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                        {form.services.design && (
                            <div className={sectionClassName}>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Design Consultation Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Tell us what the space should feel like, how it needs to function, and how hands-on you want plant care to be.
                                </p>

                                <div className="relative mt-4">
                                    <label className={floatingLabelClassName} htmlFor="design-description">
                                        Design Brief
                                    </label>
                                    <textarea
                                        id="design-description"
                                        rows="4"
                                        className={inputClassName}
                                        placeholder="Share what you want the space to feel like, any inspiration, and what is not working today."
                                        value={design.description}
                                        onChange={(e) =>
                                            update(['details', 'design', 'description'], e.target.value)
                                        }
                                    />
                                </div>

                                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className="relative">
                                        <label className={floatingLabelClassName} htmlFor="design-project-type">
                                            Project Type
                                        </label>
                                        <select
                                            id="design-project-type"
                                            className={inputClassName}
                                            value={design.projectType}
                                            onChange={(e) =>
                                                update(['details', 'design', 'projectType'], e.target.value)
                                            }
                                        >
                                            <option value="">Select project type</option>
                                            <option value="Home Plant Styling">Home plant styling</option>
                                            <option value="Commercial Plant Styling">Commercial plant styling</option>
                                            <option value="Plant Refresh">Plant refresh</option>
                                            <option value="New Space Setup">New space setup</option>
                                            <option value="Renovation">Renovation / remodel support</option>
                                            <option value="Event or Install">Event or special installation</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {showDesignDirection && (
                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="design-goal">
                                                Design Goal
                                            </label>
                                            <select
                                                id="design-goal"
                                                className={inputClassName}
                                                value={design.designGoal}
                                                onChange={(e) =>
                                                    update(['details', 'design', 'designGoal'], e.target.value)
                                                }
                                            >
                                                <option value="">Select primary goal</option>
                                                <option value="Statement Moment">Create a statement moment</option>
                                                <option value="Soften Space">Soften the space</option>
                                                <option value="Brand Impression">Improve client or guest impression</option>
                                                <option value="Fill Empty Areas">Fill empty areas thoughtfully</option>
                                                <option value="Low Maintenance Beauty">Low-maintenance beauty</option>
                                                <option value="Healthier Space">Make the space feel healthier</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>
                                    )}
                                </div>

                                {showDesignDirection && (
                                    <>
                                        <fieldset className="mt-6">
                                            <legend className="text-sm font-semibold text-gray-900">
                                                Style direction
                                            </legend>
                                            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                                {designStyleOptions.map((style) => {
                                                    const inputId = `design-style-${style.id}`

                                                    return (
                                                        <div key={style.id} className="flex">
                                                            <input
                                                                id={inputId}
                                                                type="checkbox"
                                                                className="peer hidden"
                                                                checked={designStyleChoices.includes(style.id)}
                                                                onChange={() =>
                                                                    toggleArrayValue(
                                                                        ['details', 'design', 'styleDirection'],
                                                                        style.id
                                                                    )
                                                                }
                                                            />
                                                            <label htmlFor={inputId} className={optionChipClassName}>
                                                                {style.label}
                                                            </label>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </fieldset>

                                        <div className="relative mt-4">
                                            <label className={floatingLabelClassName} htmlFor="design-space-details">
                                                Space Details
                                            </label>
                                            <textarea
                                                id="design-space-details"
                                                rows="3"
                                                className={inputClassName}
                                                placeholder="Rooms, square footage, ceiling height, light, traffic, pets, children, or brand considerations."
                                                value={design.spaceDetails}
                                                onChange={(e) =>
                                                    update(['details', 'design', 'spaceDetails'], e.target.value)
                                                }
                                            />
                                        </div>
                                    </>
                                )}

                                {showDesignBudget && (
                                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="design-maintenance-preference">
                                                Maintenance Preference
                                            </label>
                                            <select
                                                id="design-maintenance-preference"
                                                className={inputClassName}
                                                value={design.maintenancePreference}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'design', 'maintenancePreference'],
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">Select preference</option>
                                                <option value="Plant Lady Maintained">The Plant Lady maintains it</option>
                                                <option value="Client Maintained">We maintain it ourselves</option>
                                                <option value="Hybrid">Hybrid support</option>
                                                <option value="Lowest Maintenance">Lowest maintenance possible</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="design-budget">
                                                Design Budget
                                            </label>
                                            <select
                                                id="design-budget"
                                                className={inputClassName}
                                                value={design.budget}
                                                onChange={(e) =>
                                                    update(['details', 'design', 'budget'], e.target.value)
                                                }
                                            >
                                                <option value="">Select range</option>
                                                <option value="Under $1,000">Under $1,000</option>
                                                <option value="$1,000-$2,500">$1,000-$2,500</option>
                                                <option value="$2,500-$5,000">$2,500-$5,000</option>
                                                <option value="$5,000+">$5,000+</option>
                                                <option value="Not Sure">Not sure yet</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="design-timeline">
                                                Timeline
                                            </label>
                                            <select
                                                id="design-timeline"
                                                className={inputClassName}
                                                value={design.timeline}
                                                onChange={(e) =>
                                                    update(['details', 'design', 'timeline'], e.target.value)
                                                }
                                            >
                                                <option value="">Select timeline</option>
                                                <option value="ASAP">As soon as possible</option>
                                                <option value="1-2 Months">1-2 months</option>
                                                <option value="3-6 Months">3-6 months</option>
                                                <option value="Future Planning">Future planning</option>
                                            </select>
                                        </div>

                                        <div className="relative">
                                            <label className={floatingLabelClassName} htmlFor="color-preferences">
                                                Color / Material Notes
                                            </label>
                                            <textarea
                                                id="color-preferences"
                                                rows="3"
                                                className={inputClassName}
                                                placeholder="Colors, finishes, planters, textures, or existing decor we should respect."
                                                value={design.colors}
                                                onChange={(e) =>
                                                    update(['details', 'design', 'colors'], e.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {form.services.consultation && (
                            <div className={sectionClassName}>
                                <h3 className="text-base font-semibold text-gray-900">
                                    Consultation Details
                                </h3>
                                <p className="mt-2 text-base text-gray-600">
                                    Choose the type of plant help you need so we can route the conversation correctly.
                                </p>

                                <fieldset className="mt-6">
                                    <legend className="text-sm font-semibold text-gray-900">
                                        Consultation type
                                    </legend>
                                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {consultationTypeOptions.map((type) => {
                                            const inputId = `consultation-type-${type.id}`

                                            return (
                                                <div key={type.id} className="flex">
                                                    <input
                                                        id={inputId}
                                                        type="checkbox"
                                                        className="peer hidden"
                                                        checked={consultationTypeChoices.includes(type.id)}
                                                        onChange={() =>
                                                            toggleArrayValue(
                                                                ['details', 'consultation', 'consultationTypes'],
                                                                type.id
                                                            )
                                                        }
                                                    />
                                                    <label htmlFor={inputId} className={optionChipClassName}>
                                                        {type.label}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </fieldset>

                                {showConsultationDetails && (
                                    <>
                                        <div className="relative mt-4">
                                            <label className={floatingLabelClassName} htmlFor="consultation-description">
                                                Main Questions
                                            </label>
                                            <textarea
                                                id="consultation-description"
                                                rows="4"
                                                className={inputClassName}
                                                placeholder="What decisions are you trying to make, or what problems are you trying to solve?"
                                                value={consultation.description}
                                                onChange={(e) =>
                                                    update(
                                                        ['details', 'consultation', 'description'],
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="consultation-urgency">
                                                    Urgency
                                                </label>
                                                <select
                                                    id="consultation-urgency"
                                                    className={inputClassName}
                                                    value={consultation.urgency}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'consultation', 'urgency'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select urgency</option>
                                                    <option value="Plant Emergency">Plant emergency</option>
                                                    <option value="This Week">This week</option>
                                                    <option value="This Month">This month</option>
                                                    <option value="Planning Ahead">Planning ahead</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>

                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="consultation-meeting-preference">
                                                    Meeting Preference
                                                </label>
                                                <select
                                                    id="consultation-meeting-preference"
                                                    className={inputClassName}
                                                    value={consultation.meetingPreference}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'consultation', 'meetingPreference'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select format</option>
                                                    <option value="Phone">Phone call</option>
                                                    <option value="Video">Video consultation</option>
                                                    <option value="In Person">In-person consultation</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>

                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="consultation-photos-available">
                                                    Photos Available?
                                                </label>
                                                <select
                                                    id="consultation-photos-available"
                                                    className={inputClassName}
                                                    value={consultation.photosAvailable}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'consultation', 'photosAvailable'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select one</option>
                                                    <option value="Yes">Yes, I can share photos</option>
                                                    <option value="No">No photos yet</option>
                                                    <option value="Can Take Photos">I can take photos before the call</option>
                                                </select>
                                            </div>

                                            <div className="relative">
                                                <label className={floatingLabelClassName} htmlFor="consultation-decision-stage">
                                                    Decision Stage
                                                </label>
                                                <select
                                                    id="consultation-decision-stage"
                                                    className={inputClassName}
                                                    value={consultation.decisionStage}
                                                    onChange={(e) =>
                                                        update(
                                                            ['details', 'consultation', 'decisionStage'],
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">Select stage</option>
                                                    <option value="Need Advice Only">Need advice only</option>
                                                    <option value="Considering Service">Considering hiring help</option>
                                                    <option value="Ready To Book">Ready to book service</option>
                                                    <option value="Not Sure">Not sure yet</option>
                                                </select>
                                            </div>
                                        </div>
                                    </>
                                )}
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
