import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LoginForm";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import logo from "@/assets/KickSwitchLogo.png";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        <img className="w-[60%] h-full object-cover" src={logo} alt="Logo" />

        <Tabs defaultValue="Login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="SignUp">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="Login">
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Login to your existing account.
                </CardDescription>
              </CardHeader>
              <LoginForm></LoginForm>
            </Card>
          </TabsContent>
          <TabsContent value="SignUp">
            <Card className="p-4">
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Create an account here.</CardDescription>
              </CardHeader>
              <SignUpForm></SignUpForm>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
