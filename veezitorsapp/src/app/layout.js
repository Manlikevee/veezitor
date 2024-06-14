import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import 'material-symbols';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Veezitorcontext from "@/context/Veezitorcontext";
import { VeeContextProvider } from "@/context/veecontext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     {/* <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,0"
        />
      </Head> */}
      <body className={inter.className}>
      <GoogleOAuthProvider clientId="1033817667991-v3dkhbdhpi333u0imh7g81om9p78tkf1.apps.googleusercontent.com">
      <VeeContextProvider>

      
        {children}
        <Toaster className="custom-toaster" richColors position="top-right" />
        </VeeContextProvider>
        </GoogleOAuthProvider>
        </body>
    </html>
  );
}
