import AppPagination from "@/components/app-pagination";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Table } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PreferenceHorizontalIcon } from "@/constants/icons";
import { ChevronLeftIcon } from "lucide-react";
import { ChannelContentList } from "./components/channel-content-list";

const TABS = [
  {
    id: "tab-item-1",
    value: "videos",
    label: "Videos",
  },
  {
    id: "tab-item-2",
    value: "flicks",
    label: "Flicks",
  },
  {
    id: "tab-item-3",
    value: "live",
    label: "Live",
  },
  {
    id: "tab-item-4",
    value: "post",
    label: "Post",
  },
  {
    id: "tab-item-5",
    value: "playlists",
    label: "Plyalists",
  },
];

function ChannelContentPage() {
  return (
    <section className="flex flex-col gap-y-4 px-4 sm:px-5 py-4">
      <div className="flex items-center gap-x-4 w-full sm:px-2 sm:py-2">
        <Button variant="ghost" size="icon">
          <ChevronLeftIcon className="text-[#EEEEEE66] size-6" />
        </Button>
        <h2 className="font-medium text-lg md:text-xl">Channel Content</h2>
      </div>

      <Tabs defaultValue="videos">
        <TabsList className="bg-transparent sm:px-4 gap-x-2 sm:gap-x-5">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.value}
              className="rounded-none bg-transparent! border-none relative after:content-[''] after:w-full after:h-0.5 after:rounded-full after:bg-primary after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 after:ease-in-out data-[state=active]:after:scale-x-100 text-xs sm:text-base"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <Separator />

        <div className="flex w-full justify-end py-1">
          <Button className="px-4!">
            <PreferenceHorizontalIcon className="size-5" />
            Filter
          </Button>
        </div>

        {TABS.map((tab) => (
          <TabsContent key={tab.id} value={tab.value.toLowerCase()}>
            <ChannelContentList />
          </TabsContent>
        ))}

        <AppPagination />
      </Tabs>
    </section>
  );
}

export default ChannelContentPage;
