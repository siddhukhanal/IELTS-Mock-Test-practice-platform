"use client"
import Link from "next/link";
import { type IconType } from 'react-icons';
import { MdHome, MdTrendingUp, MdExplore, MdChatBubble, MdBookmark } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const ICON_SIZE = 28;

const NavLink = () => {
    const links = [
        { name: 'Home', href: '/dashboard', icon: MdHome },
        // { name: 'Grid', href: '/grid'},
        // { name: 'Home', href: '/practice'},
        // { name: 'Home', href: '/results'},
        // { name: 'Home', href: '/upgrade'},
        { name: 'Contact', href: '/dashboard/contact', icon: MdBookmark },
    ];
    const pathname = usePathname();
    return (
        <div className="relative group flex flex-col items-center justify-center w-full space-y-3">
            {links.map((link) => {
                return (
                    <SideLink
                        selected={pathname == link.href}
                        href={link.href}
                        Icon={link.icon}
                        title={link.name}
                    />
                );
            })}
        </div>
    );
};

const SideLink = ({
    selected,
    href,
    Icon,
    title,
}: {
    selected: boolean;
    href: string;
    Icon: IconType;
    title: string;
}) => {
    return (
        <div className="relative group flex items-center">
            <Link
                key={title}
                href={href}
                className={`transition-colors duration-200 ${selected
                    ? "text-primary"
                    : "text-stone-400 group-hover:text-stone-600"
                    }`}
            >
                {/* <p className="hidden md:block">{link.name}</p> */}
                <Icon size={ICON_SIZE} className={`transition-colors duration-200 ${selected
                    ? "text-primary"
                    : "text-stone-400 group-hover:text-stone-600"
                    }`} />

            </Link>
        </div>
    );
};
export default NavLink;
