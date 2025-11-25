import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    children: React.ReactNode;
}

export const GlassButton: React.FC<Props> = ({ className, children }) => {
    return (
        <button
            className={cn(
                'group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full',
                'text-[#202934] font-semibold tracking-wide transition-all duration-300 ease-out font-[Poppins]',
                'bg-white/30 backdrop-blur-[1px] backdrop-saturate-180 backdrop-contrast-125 border border-white/10 shadow-lg shadow-black/10 hover:bg-white/20 hover:border-white/20 hover:shadow-xl hover:scale-105 hover:py-3.5 active:scale-95 active:bg-white/10',

                className
            )}>
            <div className="absolute inset-x-0 -top-px h-px w-full bg-linear-to-r from-transparent via-white/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            {children}
        </button>
    );
};
