// components/SharePost.tsx
'use client'
import React, { useState } from "react";
import {
    IconBrandFacebook,
    IconX,
    IconBrandGithub,
    IconBrandDiscord,
    IconBrandStackoverflow,
    IconXboxXFilled,
    IconBrandFacebookFilled,
    IconBrandXFilled,
} from "@tabler/icons-react";
import {
    FacebookShareButton,
    FacebookIcon,
    GithubIcon,
    TwitterShareButton,
    TwitterIcon

  } from 'next-share'
import { LinkIcon } from "@nextui-org/react";
import { text } from "stream/consumers";

type ShareDialogProps = {
    url: string;
    isOpen: boolean;
    onClose: () => void;
};

const ShareDialog: React.FC<ShareDialogProps> = ({ url, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Share this post</h2>
                <div className="flex gap-4 mb-4 text-four">
                    <a href={`https://x.com/compose/post?url=${url}`} target="_blank" rel="noopener noreferrer">
                        <IconBrandXFilled size={32} />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?url=${url}`} target="_blank" rel="noopener noreferrer">
                        <LinkIcon  />
                    </a>
                    <a href={`https://github.com/orgs/community/discussions/new?category=sponsors`} title="ned" target="_blank" rel="noopener noreferrer">
                        <IconBrandGithub  size={32} />
                    </a>
                    <a href={`https://discord.com`} target="_blank" rel="noopener noreferrer">
                        <IconBrandDiscord  size={32} />
                    </a>
                    <a href={`https://stackoverflow.com`} target="_blank" rel="noopener noreferrer">
                        <IconBrandStackoverflow size={32} />
                    </a>
                    <a href={`https://stackoverflow.com`} target="_blank" rel="noopener noreferrer">
                        <IconBrandFacebookFilled  size={32} />
                    </a>

                </div>
                <button
                    onClick={onClose}
                    className="bg-four text-primary py-1 px-4 rounded hover:bg-five"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ShareDialog;
