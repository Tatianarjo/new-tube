import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "@/modules/home/ui/components/home-navbar";
interface HomeLayoutProps {
    children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return ( 
    <SidebarProvider>
        <div className="w-full">
           <HomeNavBar />
           <div>
 {children}
           </div>
        </div>
       
        </SidebarProvider>
        );
};