// auth-components.tsx

import React from "react";
import { signIn, signOut } from "auth";
import { Button } from "./ui/button";

interface SignInProps extends React.ComponentPropsWithRef<typeof Button> {
  provider?: string;
}

export function SignIn({ provider, ...props }: SignInProps) {
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    if (provider) {
      await signIn(provider); // Call signIn function
    }
  };

  return (
    <form onSubmit={handleSignIn}> {/* Use onSubmit event for form submission */}
      <Button type="submit" {...props}>
        Sign In
      </Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  const handleSignOut = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    await signOut(); // Call signOut function
  };

  return (
    <form onSubmit={handleSignOut} className="w-full">
      <Button type="submit" variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}