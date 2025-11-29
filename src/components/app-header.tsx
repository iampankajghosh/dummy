"use client";

import {
  Logo,
  NotificationIcon,
  PreferenceHorizontalIcon,
  SearchIcon,
  UploadIcon,
} from "@/constants/icons";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

function AppHeader() {
  const { state, isMobile } = useSidebar();
  return (
    <div
      className={cn(
        "flex items-center gap-x-5 bg-[#030303] shadow-[0px_4px_4px_0px_rgba(0,0,0,)0.25] h-20 pl-4 pr-5 sm:pr-8 sm:pl-0",
        isMobile || state === "collapsed" ? "justify-between" : "justify-end"
      )}
    >
      <div className="flex items-center gap-x-4">
        <SidebarTrigger className={cn(isMobile ? "visible" : "hidden")} />
        <Logo
          className={cn(
            "w-28 sm:w-32",
            state === "collapsed" || isMobile ? "visible" : "hidden"
          )}
        />
      </div>

      <div className="hidden md:flex items-center justify-center gap-x-2 flex-1">
        <InputGroup className="bg-[#0F0F0F] w-full max-w-[729px] rounded border-0 h-10 has-[[data-slot=input-group-control]:focus-visible]:border-primary has-[[data-slot=input-group-control]:focus-visible]:ring-primary/50">
          <InputGroupInput
            placeholder="Search videos and channels......."
            className="placeholder:text-[#EEEEEE66]"
          />
          <InputGroupAddon>
            <SearchIcon className="size-5 text-[#EEEEEE99]" />
          </InputGroupAddon>
        </InputGroup>

        <Button size="icon-sm" variant="ghost">
          <PreferenceHorizontalIcon className="size-5 text-primary" />
        </Button>
      </div>

      <div className="flex items-center gap-x-4">
        <Button
          variant="outline"
          className="mr-4 rounded-md font-semibold min-w-[136px] hidden md:inline-flex"
        >
          <UploadIcon className="size-5" />
          Upload
        </Button>

        <Button
          size="icon-sm"
          variant="ghost"
          className="size-[34px] sm:hidden"
        >
          <SearchIcon className="size-5 text-primary" />
        </Button>

        <Button size="icon-sm" variant="ghost" className="size-[34px]">
          <NotificationIcon className="size-5 text-primary" />
        </Button>

        <Avatar className="rounded-[5px] size-9 sm:size-10">
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/140588883?s=48&v=4"
            alt="@pankajghosh"
          />
          <AvatarFallback>PG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default AppHeader;
