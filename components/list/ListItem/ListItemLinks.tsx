'use client';

import { Project } from "@/types";
import { useListItemContext } from "..";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui";

export const Links = () => {
  const item = useListItemContext<Project>();
  return (
    <>
      {item.links && (
        <div className="flex-none flex items-center gap-2">
          {item.links.github && (
            <Link href={item.links.github}>
              <GitHubLogoIcon className="w-4 h-4" />
            </Link>
          )}
          {item.links.github && item.links.demo && <Separator className="w-2" />}
          {item.links.demo && (
            <Link href={item.links.demo}>
              <LinkIcon className="w-4 h-4" />
            </Link>
          )}
        </div>
      )}
    </>
  );
};