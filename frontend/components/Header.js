import Link from "next/link";

export default function Header() {
    return (
        <div className="flex items-center justify-between p-7">
            <Link href="/"><span className="text-3xl font-bold cursor-pointer">Game Plan</span></Link>
            <div className="px-5 py-2 text-sm rounded-md bg-bgbtn hover:bg-bgbtnactive">
                <Link href="/signup">Sign up</Link>
            </div>
        </div>
    )
}