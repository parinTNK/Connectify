import { SignInButton, SignUpButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"



export default function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal" >
          <Button variant="default" size="lg">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton mode="modal" />
      </SignedOut>


      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
