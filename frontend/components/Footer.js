import Link from "next/link";

export default function Footer(){
    return (
        <div className="flex items-center w-full p-7">
            <Link href="/aboutus"><span className="mr-3 text-xs cursor-pointer">About Us</span></Link>
            <Link href="/privacy"><span className="text-xs cursor-pointer">Privacy Policy</span></Link>
        </div>
    )
}