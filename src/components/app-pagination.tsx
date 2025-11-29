import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function AppPagination() {
  return (
    <Pagination className="justify-end">
      <PaginationContent className="gap-x-2">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="bg-[#EEEEEE0D] rounded p-0 text-[#EEEEEE66]"
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-[#EEEEEE0D] rounded border border-[#EEEEEE66]"
          >
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-[#EEEEEE0D] rounded border border-[#EEEEEE66] text-[#EEEEEE66]"
          >
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis className="bg-[#EEEEEE0D] rounded border border-[#EEEEEE66] text-[#EEEEEE66]" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-[#EEEEEE0D] rounded border border-[#EEEEEE66] text-[#EEEEEE66]"
          >
            9
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            className="bg-[#EEEEEE0D] rounded border border-[#EEEEEE66] text-[#EEEEEE66]"
          >
            10
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            className="bg-primary rounded p-0 hover:bg-primary/90!"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default AppPagination;
