import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckmarkSquare2Icon, CheckmarkSquareIcon } from "@/constants/icons";
import { EllipsisIcon } from "lucide-react";
import Image from "next/image";

const VIDEOS = [
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/raayan.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/jailer.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/kgf.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/salaar.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/animal.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/raayan.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/jailer.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/kgf.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/salaar.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/animal.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/raayan.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/jailer.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/kgf.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/salaar.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
  {
    video: "How Websites Learned to Fit Everywhere",
    thumbnail: "/animal.png",
    status: "Published",
    monetization: "Monetized",
    stars: "8.5",
    views: "528k",
    comments: "58k",
    watchTime: "20:58:40",
  },
];

export function ChannelContentList() {
  return (
    <Table>
      <TableHeader className="bg-[#030303] sticky top-0 h-[49px]">
        <TableRow>
          <TableHead>
            <button className="bg-transparent border-none">
              <CheckmarkSquare2Icon className="size-5 text-primary" />
            </button>
          </TableHead>
          <TableHead className="min-w-[320px]">Video</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Monetization</TableHead>
          <TableHead>Stars</TableHead>
          <TableHead>Views</TableHead>
          <TableHead>Comments</TableHead>
          <TableHead>Watch time</TableHead>
          <TableHead className="w-[100px]">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {VIDEOS.map((video, index) => (
          <TableRow key={`video-item-${index}`}>
            <TableCell>
              <button className="bg-transparent border-none">
                <CheckmarkSquareIcon className="size-5" />
              </button>
            </TableCell>
            <TableCell className="font-medium flex items-center gap-x-6">
              <div className="min-w-[120px] sm:min-w-[200px] h-[66px] sm:h-[110px] overflow-hidden rounded-md my-1">
                <Image
                  src={video.thumbnail}
                  alt={video.video}
                  className="w-full h-full rounded object-cover"
                  height={145}
                  width={263}
                />
              </div>

              <p className="sm:text-xl w-full max-w-[267px] text-wrap py-4 sm:leading-relaxed line-clamp-2">
                {video.video}
              </p>
            </TableCell>
            <TableCell>{video.status}</TableCell>
            <TableCell>{video.monetization}</TableCell>
            <TableCell>{video.stars}</TableCell>
            <TableCell>{video.views}</TableCell>
            <TableCell>{video.comments}</TableCell>
            <TableCell>{video.watchTime}</TableCell>
            <TableCell>
              <EllipsisIcon />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
