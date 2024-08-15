import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    // <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
    //   <div className="h-full lg:flex flex-col items-center justify-center px-4">
    //     <div className="flex items-center justify-center mt-8">
    //       <ClerkLoaded>
    //         <SignIn path="/sign-in" />
    //       </ClerkLoaded>
    //       <ClerkLoading>
    //         <Loader2 className="animate-spin text-muted-foreground" />
    //       </ClerkLoading>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center mt-8">
      <ClerkLoaded>
        <SignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <Loader2 className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
}
