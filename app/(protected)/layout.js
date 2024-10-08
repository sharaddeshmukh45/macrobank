import { verifyAuth } from "@/lib/auth";

import { redirect } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";
import { cookies } from "next/headers";
import { UserInfoProvider } from "./providers";

export const metadata = {
  title: "Macro Bank App",
  description: "Macro Bank",
};

export default async function AuthLayout({ children }) {
  const user = await verifyAuth();
  let userData = {};
  if (!user.session) {
    redirect("/");
  }else{
    userData = {
      email: cookies().get("email").value,
      name: cookies().get("name").value,
    };
  }

  return (
    <>
      <div className="bg-[#f2f2f2] min-h-screen h-full">
        <UserInfoProvider value={userData}>
          <Header />
          {children}
          <Footer />
        </UserInfoProvider>
      </div>
    </>
  );
}
