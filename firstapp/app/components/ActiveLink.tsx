import { usePathname } from "next/navigation";

export default function ActiveLink({href}){
    const pathLink = usePathname();
    const isActive = pathLink === href;
    console.log(pathLink)
    return isActive;
}