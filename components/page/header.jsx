"use client";
import { ModeToggle } from "../ModeToggle";
import Logo from "./logo";
import { Button } from "../ui/button";
import Search from "./search";
import { ChevronDown, ChevronLeft, Share2 } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai"; // Import if using react-icons

export default function Header() {
    const path = usePathname();
    console.log(path);
    return (
        <header className="grid gap-3 pt-5 px-5 pb-5 md:px-20 lg:px-32">
            <div className="flex items-center justify-between">
                {path == "/" ? (
                    <Button size="icon" onClick={() => { navigator.share({ url: window.location.href }) }} variant="outline" className="rounded-full lg:-ml-4"><Share2 className="w-4 h-4" /></Button>
                ) : (
                    <Button size="icon" asChild variant="outline" className="rounded-full"><Link href="/"><ChevronLeft className="w-5 h-5" /></Link></Button>
                )}
                <Logo />  
                <div className="flex gap-4 items-center">
                    <ModeToggle />
                    <a href="https://www.instagram.com/_umangggg__" target="_blank" rel="noopener noreferrer">
                        {/* Using online logo */}
                        { <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" alt="Instagram Logo" className="w-6 h-6" /> }
                        
                        {/* Using react-icons */}
                        
                    </a>
                </div>
            </div>
            
            <Search />
        </header>
    )
}
