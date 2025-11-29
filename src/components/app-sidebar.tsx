"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  AnalyticsIcon,
  ComputerDollerIcon,
  DiscoverSquareIcon,
  HouseIcon,
  LiveStreaming2Icon,
  LiveStreamingIcon,
  Logo,
  Playlist2Icon,
  PlaylistFavoriteIcon,
  PlaylistIcon,
  VideoIcon,
  VideoReplayIcon,
} from "@/constants/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS_1 = [
  {
    id: "nav-item-1",
    href: "#",
    label: "Home",
    icon: <HouseIcon className="size-5" />,
  },
  {
    id: "nav-item-2",
    href: "#",
    label: "Explore",
    icon: <DiscoverSquareIcon className="size-5" />,
  },
  {
    id: "nav-item-3",
    href: "#",
    label: "Subsciptions",
    icon: <PlaylistFavoriteIcon className="size-5" />,
  },
  {
    id: "nav-item-4",
    href: "#",
    label: "Playlist",
    icon: <PlaylistIcon className="size-5" />,
  },
  {
    id: "nav-item-5",
    href: "#",
    label: "Saved Videos",
    icon: <LiveStreamingIcon className="size-5" />,
  },
  {
    id: "nav-item-6",
    href: "#",
    label: "History",
    icon: <VideoReplayIcon className="size-5" />,
  },
  {
    id: "nav-item-7",
    href: "#",
    label: "Live",
    icon: <LiveStreaming2Icon className="size-5" />,
  },
  {
    id: "nav-item-8",
    href: "#",
    label: "Shorts",
    icon: <Playlist2Icon className="size-5" />,
  },
];

const NAV_ITEMS_2 = [
  {
    id: "nav-item-9",
    href: "channel-content",
    label: "Channel Content",
    icon: <VideoIcon className="size-5" />,
  },
  {
    id: "nav-item-10",
    href: "#",
    label: "Analytics",
    icon: <AnalyticsIcon className="size-5" />,
  },
  {
    id: "nav-item-11",
    href: "#",
    label: "Monetization",
    icon: <ComputerDollerIcon className="size-5" />,
  },
];

export function AppSidebar() {
  const { state, isMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={cn(
          "h-20 flex-row items-center bg-[#030303]",
          state === "collapsed" && !isMobile
            ? "justify-center"
            : "justify-between px-4"
        )}
      >
        <Logo
          className={cn(
            "w-32",
            state === "collapsed" && !isMobile ? "hidden" : ""
          )}
        />
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup className="px-0 py-4">
          <SidebarMenu>
            {NAV_ITEMS_1.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  tooltip={state === "collapsed" && !isMobile ? item.label : ""}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "sm:text-base h-auto",
                      pathname.includes(item.href)
                        ? "bg-primary/15 hover:bg-primary/15!"
                        : "",
                      state === "collapsed" && !isMobile
                        ? "flex items-center justify-center"
                        : ""
                    )}
                  >
                    {item.icon && (
                      <span
                        className={cn(
                          pathname.includes(item.href) ? "text-primary" : "",
                          state === "collapsed" && !isMobile
                            ? "[&>svg]:size-6"
                            : ""
                        )}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span
                      className={cn(
                        "leading-none",
                        state === "collapsed" && !isMobile
                          ? "hidden"
                          : "visible"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarSeparator className="mx-0" />

        <SidebarGroup className="px-0 py-4">
          <SidebarMenu>
            {NAV_ITEMS_2.map((item) => (
              <SidebarMenuItem key={item.id}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : ""
                  )}
                  tooltip={state === "collapsed" && !isMobile ? item.label : ""}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "sm:text-base h-auto",
                      pathname.includes(item.href)
                        ? "bg-primary/15 hover:bg-primary/15!"
                        : "",
                      state === "collapsed" && !isMobile
                        ? "flex items-center justify-center"
                        : ""
                    )}
                  >
                    {item.icon && (
                      <span
                        className={cn(
                          pathname.includes(item.href) ? "text-primary" : "",
                          state === "collapsed" && !isMobile
                            ? "[&>svg]:size-6"
                            : ""
                        )}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span
                      className={cn(
                        "leading-none",
                        state === "collapsed" && !isMobile
                          ? "hidden"
                          : "visible"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
