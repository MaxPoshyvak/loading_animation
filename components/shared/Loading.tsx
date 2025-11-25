import React from 'react';
import { cn } from '@/lib/utils';
import { LoadLine } from '@/components/ui/LoadLine';

interface Props {
    className?: string;
}

export const Loading: React.FC<Props> = ({ className }) => {
    const sizes = [15, 49, 89, 33, 49, 85, 81, 29, 15];

    return (
        <div className={cn('w-fit h-100 flex items-center gap-2', className)}>
            {sizes.map((size, index) => (
                <LoadLine key={index} heightPx={size} delay={index * 100} />
            ))}
        </div>
    );
};
