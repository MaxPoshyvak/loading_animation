import { Loading } from '@/components/shared/Loading';
import { GlassButton } from '@/components/ui/GlassButton';

export default function Home() {
    return (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
            <GlassButton>SoundInfluencers</GlassButton>
            <Loading />
        </div>
    );
}
