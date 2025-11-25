import { cn } from '@/lib/utils';

interface Props {
    heightPx: number;
    delay: number;
    className?: string;
}

export const LoadLine: React.FC<Props> = ({ className, heightPx, delay }) => {
    return (
        <div
            style={
                {
                    '--target-height': `${heightPx}px`,
                    animationDelay: `${delay}ms`,
                } as React.CSSProperties
            }
            className={cn(
                'w-4 rounded-xl bg-[linear-gradient(to_bottom_right,#BCE8FF,#DAF4FF,#BFD8FF,#A4BCFF)]',
                'animate-wave',
                className
            )}></div>
    );
};
