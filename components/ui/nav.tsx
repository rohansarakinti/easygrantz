"use client";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
NavigationMenu,
NavigationMenuItem,
NavigationMenuLink,
NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import Logo from '../../app/images/eglogo.png'

export const Header1 = () => {
const navigationItems = [
    {
        title: "Home",
        href: "/",
        description: "",
    },
    {
        title: "Grants",
        href: "/grants",
        description: "",
    },
    {
        title: "Microloans",
        href: "/microloans",
        description: "",
    },
    {
        title: "Contact",
        href: "/contact",
        description: "",
    },
];

const [isOpen, setOpen] = useState(false);
const router = usePathname();

return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background  lg:border-b-2 lg:border-b-gray-200 ">
    <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center mt-5">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
        <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
            {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                {
                    <>
                    <NavigationMenuLink>
                        <Button asChild variant={router!=item.href ? "outline" : "default"} className={router!=item.href ? "border-2 border-green-600": ""}>
                            <Link href={item.href}>{item.title}</Link>
                        </Button>
                    </NavigationMenuLink>
                    </>
                }
                </NavigationMenuItem>
            ))}
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
        <p className="font-semibold text-xl">Easygrantz</p><Image src={Logo} className="w-0 md:w-8" alt="Easygrantz Logo"/>
        </div>
        <div className="flex justify-end w-full gap-4">
        {/* <Button variant={router!="/contact" ? "outline" : "default"} className={router!="/contact" ? "border-2 border-green-600 invisible sm:visible": "invisible sm:visible"}>
            <Link href="/contact">Contact</Link>
        </Button> */}
        <div className="border-r hidden md:inline"></div>
        {/* <Button variant="outline" disabled>Sign in</Button> */}
        <Button className="" onClick={() => setOpen(!isOpen)}>
            Get started
        </Button>
        </div>
        <div className="flex w-12 shrink items-end justify-end">
        {isOpen && (
            <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
            {navigationItems.map((item) => (
                <div key={item.title}>
                <div className="flex flex-col gap-2">
                    {
                    <Link
                        href={item.href}
                        className="flex justify-between items-center"
                    >
                        <span className="text-lg">{item.title}</span>
                    </Link>
                    }
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    </div>
    </header>
);
};