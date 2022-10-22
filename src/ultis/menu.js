import icons from "./icons"

const { MdOutlineLibraryMusic } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <MdOutlineLibraryMusic size={24} />
    },
]