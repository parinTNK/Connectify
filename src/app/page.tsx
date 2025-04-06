import { SignInButton, SignUpButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/ModeToggle";



export default function Home() {
  return (
    <>
    <div className="flex items-center justify-between p-4">
      <SignedOut>
        <SignInButton mode="modal" >
          <Button variant="default" size="lg">
            Sign In
          </Button>
        </SignInButton>
        <SignUpButton mode="modal" />
      </SignedOut>
      <ModeToggle />

      {/* after singin will see */}
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
    </>
  );
}
