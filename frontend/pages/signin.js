import Layout from "../components/layout";
import LoginForm from '../components/LoginFrom';

export default function SignIn(){
    return (
        <Layout>
            <div className="min-h-bodyheight">
                <img src="/images/signin-back.png" className="absolute bottom-0 right-0 z-0" />
                <div className="flex items-center justify-center w-full h-full min-h-bodyheight">
                    <LoginForm />
                </div>
            </div>
        </Layout>
    )
}