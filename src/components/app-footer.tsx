import Link from "next/link";

const FOOTER_LINK = [
  {
    id: "footer-link-1",
    label: "About",
    href: "#",
  },
  {
    id: "footer-link-2",
    label: "Help",
    href: "#",
  },
  {
    id: "footer-link-3",
    label: "Privacy",
    href: "#",
  },
  {
    id: "footer-link-4",
    label: "Terms",
    href: "#",
  },
];

function AppFooter() {
  return (
    <footer className="min-h-14 py-5 sm:py-0 flex flex-col sm:flex-row items-center justify-between border-t px-5 text-[#EEEEEE66] gap-y-8 sm:gap-y-0">
      <p>Itaeld @ 2025</p>

      <ul className="flex flex-col sm:flex-row items-center gap-x-2 gap-y-4 sm:gap-y-0">
        {FOOTER_LINK.map((link) => (
          <li key={link.id} className="px-4">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <p>v beta 1.0.0</p>
    </footer>
  );
}

export default AppFooter;
