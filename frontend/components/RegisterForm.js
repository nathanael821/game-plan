import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="z-10 w-full h-full text-gray-900 bg-bgform">
            <div className="flex items-center justify-end p-7">
                <div className="px-5 py-2 text-sm rounded-md bg-bgbtn hover:bg-bgbtnactive">
                    <Link href="/signin">Login</Link>
                </div>
            </div>
            <div className="mx-auto divide-y w-formcontainer md:max-w-4xl">
                <div className="pt-48">
                    <h2 className="text-xl text-center">Let's get you set up for success!</h2>
                    <div className="mt-8">
                        <label className="relative block">
                            <span className="text-gray-700">Your email</span>
                            <input
                                type="email"
                                className="form-element-rt"
                                placeholder="syed@gameplan.io"
                            />
                            <span className="absolute underline top-9 right-3">Change</span>
                        </label>
                        <label className="block mt-5">
                            <span className="text-gray-700">Your project</span>
                            <input
                                type="text"
                                className="form-element-rt"
                                placeholder="Ex: My Awesome Project"
                            />
                        </label>
                        <label className="block mt-5">
                            <span className="text-gray-700">Password</span>
                            <input
                                type="password"
                                className="form-element-rt"
                                placeholder="Ex: MyTotallySecretPassword!"
                            />
                        </label>
                        <label className="flex justify-end mt-5">
                            <Link href="/signin"><button className="form-submit-rt">Sign up</button></Link>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}