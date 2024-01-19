"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/Error.png"
        height="300"
        width="300"
        alt="Error"
        className="object-contain dark:hidden"
      />
      <Image
        src="/Error Dark.png"
        alt="Error"
        height="300"
        width="300"
        className="object-contain hidden dark:block"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">
            Go back
        </Link>
      </Button>
    </div>
  );
};

export default Error;
