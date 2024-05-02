import React from "react";
import { SignInButton, SignedOut, useAuth } from "@clerk/nextjs";

const NavbarButtons = () => {
  return (
    <div className="flex items-center justify-between mx-6">
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default NavbarButtons;
