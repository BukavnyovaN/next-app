'use client';

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site.config";
import { layoutConfig } from "@/config/layout.config";
import RegistrationModal from "@/components/UI/modals/registration.modal";
import LoginModal from "@/components/UI/modals/login.modal";
import { useState } from "react";

export const Logo = () => {
  return (
    <Image
      src={'/logo-192x192.png'}
      alt={siteConfig.title}
      width={26}
      height={26}
      priority
    />
  );
};

export default function Header() {
  const pathname = usePathname();
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const getNavItems = () => {
    return siteConfig.navItems.map(({href, label}) => {
      const isActive = pathname === href;

      return (
        <NavbarItem key={label}>
          <Link color="foreground" href={href} className={isActive ? 'text-blue-500' : 'text-foreground'}>
            {label}
          </Link>
        </NavbarItem>)
    })
  }

  return (
    <Navbar className={`h-[${layoutConfig.headerHeight}]`}>
      <NavbarBrand>
        <Link href={'/'} className={'flex gap-1'}>
        <Logo />
        <p className="font-bold text-inherit">{siteConfig.title}</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {getNavItems()}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            color="secondary"
            href="#"
            variant="flat"
            onPress={() => setIsLoginOpen(true)}
          >
            Логин
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            onPress={() => setIsRegistrationOpen(true)}
          >
            Регистрация
          </Button>
        </NavbarItem>
      </NavbarContent>

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </Navbar>
  );
}
