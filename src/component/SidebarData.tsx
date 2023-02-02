import * as AiIcons from 'react-icons/ai';
import * as RxIcons from 'react-icons/rx';
import * as HiIcons from 'react-icons/hi';
import * as BiIcons from 'react-icons/bi';
export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/',
        icon: <RxIcons.RxDashboard />,
        cName: 'nav-text'
    },
    {
        title: 'Employees',
        path: '/employees',
        icon: <HiIcons.HiOutlineUserGroup />,
        cName: 'nav-text'
    },
    {
        title: 'User',
        path: '/users',
        icon: <AiIcons.AiOutlineUser />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <AiIcons.AiOutlineInfoCircle />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <BiIcons.BiLogOut />,
        cName: 'nav-text'
    }
]