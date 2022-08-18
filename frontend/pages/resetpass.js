import Layout from "../components/layout";
import ResetPassword from "../components/ResetPassword";

export default function SignIn(){
    return (
        <Layout>
            <div className="flex flex-row items-center min-h-bodyheight">
                <img src="/images/reset-back.png" className="absolute bottom-0 right-0 z-0" />
                <div className="basis-1/12"></div>
                <div className="z-10">
                    <ResetPassword />
                </div>
            </div>
        </Layout>
    )
}