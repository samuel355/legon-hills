"use client";
import { SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Home, Menu, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import ListItem from "./ListItem";

const HeaderAlt = () => {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/add-house-listing')
    router.prefetch('/add-land-listing')
    router.prefetch('/dar-es-salaam')
    router.prefetch('/get-home')
    router.prefetch('/get-plot')
    router.prefetch('/nthc')
    router.prefetch('/trabuom')
  }, [router]);

  return (
    <div className="flex items-center px-8 md:px-12 lg:px-12 xl:px-12 py-2 justify-between fixed top-0 w-full shadow-sm z-50 bg-white">
      <NavigationMenu className="flex gap-14 items-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                width={125}
                height={125}
                alt="logo"
                className="w-auto h-auto object-cover"
              />
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList className="hidden md:hidden lg:flex items-center gap-2 ml-10">
          <NavigationMenuItem>
            <ListItem href={"/"} title={"Get Plot"}>
              Get Land
            </ListItem>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <ListItem href={"/contact-us"} title={"Contact Us"}>
              Contact Us
            </ListItem>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <div className="lg:flex gap-4 items-center hidden">

        {isSignedIn ? (
          // <UserButton />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={user?.imageUrl}
                width={35}
                height={35}
                alt="user profile"
                className="rounded-full"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href={"/profile"}
                  className={`hover:text-primary font-medium text-base ${
                    path == "/profile" && "text-primary font-extrabold"
                  }`}
                >
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/profile#/my-listing"}
                  className={`hover:text-primary font-medium text-base ${
                    path == "/listings" && "text-primary font-extrabold"
                  }`}
                >
                  My Listings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-700 text-base font-extrabold">
                <SignOutButton>Logout</SignOutButton>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Link
            className={`border px-8 py-2 rounded-md bg-primary text-white`}
            href="/sign-in"
          >
            Login
          </Link>
        )}
      </div>

      {/* On Mobile Menu */}
      <div className="block lg:hidden xl:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 pl-4 py-4 mr-3">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <button
                  className={`hover:text-primary text-base ${
                    path == "/" && "text-primary font-semibold"
                  }`}
                  onClick={() => router.replace("/")}
                >
                  Home
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className={`hover:text-primary text-base ${
                    path == "/get-plot" && "text-primary font-semibold"
                  }`}
                  onClick={() => router.push("/get-plot")}
                >
                  Get Land
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  className={`hover:text-primary text-base ${
                    path == "/get-home" && "text-primary font-semibold"
                  }`}
                  onClick={() => router.push("/get-home")}
                >
                  Get Property
                </button>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger
                  asChildren
                  className="text-base hover:text-primary"
                >
                  <Link href={''}>Our Sites</Link>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent className="p-3">
                    <DropdownMenuItem>
                      <button
                        className={`hover:text-primary text-base ${
                          path == "/nthc" && "text-primary font-semibold"
                        }`}
                        onClick={() => router.push("/nthc")}
                      >
                        NTHC
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <button
                        className={`hover:text-primary text-base ${
                          path == "/dar-es-salaam" &&
                          "text-primary font-semibold"
                        }`}
                        onClick={() => router.push("/dar-es-salaam")}
                      >
                        Dar Es Salaam
                      </button>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <button
                        className={`hover:text-primary text-base ${
                          path == "/trabuom" && "text-primary font-semibold"
                        }`}
                        onClick={() => router.push("/trabuom")}
                      >
                        Trabuom
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem className="flex justify-between items-center">
              <UserButton />
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}

            {isSignedIn ? (
              // <UserButton />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex flex-row items-center gap-1 mt-3">
                    <p className="ml-1 font-semibold tex-base capitalize">
                      {user?.username}
                      {" Profile"}
                    </p>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button
                      className={`hover:text-primary text-base ${
                        path == "/profile" && "text-primary font-semibold"
                      }`}
                      onClick={() => router.push("/profile")}
                    >
                      My Profile
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      className={`hover:text-primary text-base ${
                        path == "/add-house-listing" &&
                        "text-primary font-semibold"
                      }`}
                      onClick={() => router.push("/add-house-listing")}
                    >
                      Add Home Listing
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      className={`hover:text-primary text-base ${
                        path == "/add-land-listing" &&
                        "text-primary font-semibold"
                      }`}
                      onClick={() => router.push("/add-land-listing")}
                    >
                      Add Land Listing
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <button
                      className={`hover:text-primary text-base ${
                        path == "/profile#/my-listing" &&
                        "text-primary font-semibold"
                      }`}
                      onClick={() => router.push("/profile#/my-listing")}
                    >
                      My Listing
                    </button>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-700 text-base font-extrabold">
                    <SignOutButton>Logout</SignOutButton>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <button
                className={`hover:text-primary text-base text-primary/90 px-8 py-2 border mt-3 ${
                  path == "/sign-in" && "text-primary font-semibold"
                }`}
                onClick={() => router.push("/sign-in")}
              >
                Login
              </button>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default HeaderAlt;
