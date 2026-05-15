'use client';

import React, { useState } from "react";
import { IconShare } from "@tabler/icons-react";
import ShareDialog from "./ShareDialog";

export default function ShareButton({ url }: { url: string }) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setDialogOpen(true)}
        aria-label="Share post"
      >
        <IconShare className="text-four hover:text-five" />
      </button>
      <ShareDialog
        url={url}
        isOpen={isDialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}