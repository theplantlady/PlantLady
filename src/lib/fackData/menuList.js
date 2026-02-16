import menu_image_1 from "@/assets/images/menu-image-1.png"
export const menuList = [
    {
        id: 1,
        name: "Home",
        path: "/",
        isMegaMenu: false,
        isDropdown: false,
    },
    {
        id: 2,
        name: "Projects",
        path: '/pages/projects',
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 3,
        name: "Services",
        path: "/pages/services",
        isDropdown: false,
        isMegaMenu: [
            {
                id: 1,
                menus: [
                    {
                        id: 1,
                        name: "Design",
                        path: "/pages/services/service-design",
                        desc: "Transforming spaces into lush, personalized green environments."
                    },
                    {
                        id: 2,
                        name: "Installation",
                        path: "/pages/services/service-installation",
                        desc: "Seamless integration of plantscapes, from vision to reality."
                    },
                    {
                        id: 3,
                        name: "Consulting",
                        path: "/pages/services/service-consulting",
                        desc: "Expert guidance on plant selection, placement, and care strategies."
                    }
                ]
            },
            {
                id: 2,
                menus: [
                    {
                        id: 4,
                        name: "Residential Service",
                        path: "/pages/services/service-residential",
                        desc: "Custom greenery solutions designed to enhance home aesthetics and wellness."
                    },
                    {
                        id: 5,
                        name: "Commercial Service",
                        path: "/pages/services/service-commercial",
                        desc: "Biophilic designs that elevate workplaces, hotels, and business environments."
                    },
                    {
                        id: 6,
                        name: "Living Walls",
                        path: "/pages/services/service-livingwall",
                        desc: "Vertical gardens that bring nature indoors with striking elegance."
                    }
                ]
            },
            {
                id: 3,
                menus: [
                    {
                        id: 7,
                        name: "Embark on a Design Journey with Us",
                        path: "#",
                        desc: "Let’s collaborate to bring your green vision to life.",
                        img: menu_image_1
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "About Us",
        path: "/pages/about-us",
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 5,
        name: "Blog",
        path: "/pages/blog",
        isMegaMenu: false,
        isDropdown: false,
    },
    {
        id: 6,
        name: "Store",
        path: "/pages/store/product-archive",
        isMegaMenu: false,
        isDropdown: false,
    },
    {
        id: 7,
        name: "Contact",
        path: "/pages/contact",
        isMegaMenu: false,
        isDropdown: false
    },
]