import RegisterFrom from '../components/RegisterForm';
import Link from 'next/link';

export default function SignIn(){
    return (
        <div className="flex flex-row h-screen">
            <div className="basis-7/12">
                <div className="flex items-center justify-between p-7">
                    <h1 className="text-3xl font-bold">Game Plan</h1>
                </div>
                <div className="relative flex flex-row items-end min-h-bodyheight">
                    <div className="basis-1/12"></div>
                    <img src="/images/register.png" width="100%" className='basis-10/12' />
                    <div className="basis-1/12"></div>
                </div>
                <div className="flex items-center w-full p-7">
                    <Link href="/aboutus"><span className="mr-3 text-xs cursor-pointer">About Us</span></Link>
                    <Link href="/privacy"><span className="text-xs cursor-pointer">Privacy Policy</span></Link>
                </div>
            </div>
            <div className="basis-5/12">
                <RegisterFrom />
            </div>
        </div>
    )
}