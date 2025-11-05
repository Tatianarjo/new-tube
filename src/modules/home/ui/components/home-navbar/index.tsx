import Image from "next/image";
import Link from "next/link";
import { SearchInput } from "./search-input"
import { SidebarTrigger } from "@/components/ui/sidebar";
export const HomeNavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                {/*Menu & Logo */}
                <div className="flex items-center shrink-0">
                    <SidebarTrigger />
                    <Link href="/">
                        <div className="p-4 flex items-center gap-1">
                            <Image src="/tottube.svg" height={32} width={32} alt="Tot Tube Logo" />
                            <p className="text-xl font-semibold tracking-tight">TotTubeGirl</p>
                        </div>
                    </Link>
                </div>
                {/* Search Bar */}
                <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
                    <SearchInput />
                </div>
            </div>
        </nav>
    );
}