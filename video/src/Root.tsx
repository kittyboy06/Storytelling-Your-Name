import { registerRoot, Composition } from 'remotion';
import { PresentationWalkthrough } from './Composition';
import React from 'react';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="Walkthrough"
                component={PresentationWalkthrough}
                durationInFrames={14 * 90}
                fps={30}
                width={1920}
                height={1080}
            />
        </>
    );
};

registerRoot(RemotionRoot);
