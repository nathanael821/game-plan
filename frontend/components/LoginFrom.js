import Link from "next/link";

export default function LoginForm() {
    return (
        <div className="z-10 form-container-rt">
            <div className="max-w-xl mx-auto divide-y md:max-w-4xl">
                <div className="py-12">
                    <h2 className="text-xl text-center">Login to your Game Plan account</h2>
                    <div className="max-w-md mt-8">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-gray-700">Email address</span>
                                <input
                                    type="email"
                                    className="form-element-rt"
                                    placeholder="Your email address"
                                />
                            </label>
                            <label className="block">
                                <span className="text-gray-700">Password</span>
                                <input
                                    type="password"
                                    className="form-element-rt"
                                    placeholder="Your password"
                                />
                            </label>
                            <label className="block underline">
                                <Link href="/resetpass">Forgot password</Link>
                            </label>
                            <label className="flex justify-end">
                                <Link href="/">
                                    <button className="form-submit-rt">Login</button>
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}