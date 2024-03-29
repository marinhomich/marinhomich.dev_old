"use client"

import { useState } from "react"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@marinhomich/ui/sheet"
import { cn } from "@marinhomich/utils"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { ScrollArea } from "./ui/scroll-area"

export default function SidebarMobileSite() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Icons.menu className="mr-4 md:hidden" size={20} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="pr-8">
          <MobileLink
            href="/"
            className="flex items-center"
            onOpenChange={setIsOpen}
          >
            <Icons.command className="h-6 w-6" />
            <span className="ml-2 font-bold">{siteConfig.name}</span>
          </MobileLink>
        </SheetHeader>

        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            <MobileLink href={"/about"} onOpenChange={setIsOpen}>
              About
            </MobileLink>
            <MobileLink href={"/articles"} onOpenChange={setIsOpen}>
              Articles
            </MobileLink>
            <MobileLink href={"/projects"} onOpenChange={setIsOpen}>
              Projects
            </MobileLink>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
