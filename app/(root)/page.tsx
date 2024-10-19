import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="p-4">
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}
