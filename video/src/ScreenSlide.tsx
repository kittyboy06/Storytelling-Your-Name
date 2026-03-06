import {
    AbsoluteFill,
    InterpolateOptions,
    interpolate,
    spring,
    useCurrentFrame,
    useVideoConfig,
    Img,
    staticFile,
} from 'remotion';
import React from 'react';

export const ScreenSlide: React.FC<{
    imageSrc: string;
    title: string;
}> = ({ imageSrc, title }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        config: {
            damping: 200,
        },
    });

    const opacity = interpolate(frame, [0, 15], [0, 1], {
        extrapolateRight: 'clamp',
    });

    return (
        <AbsoluteFill style={{ backgroundColor: '#050a14', overflow: 'hidden' }}>
            <AbsoluteFill
                style={{
                    transform: `scale(${interpolate(scale, [0, 1], [1, 1.05])})`,
                    opacity,
                }}
            >
                <Img
                    src={staticFile(imageSrc)}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </AbsoluteFill>

            {/* Title Overlay */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 50,
                    left: 50,
                    right: 50,
                    textAlign: 'center',
                    color: 'white',
                    fontFamily: 'system-ui, sans-serif',
                    fontSize: 40,
                    fontWeight: 'bold',
                    textShadow: '0 4px 10px rgba(0,0,0,0.8)',
                    opacity: interpolate(frame, [20, 40], [0, 1], {
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp',
                    }),
                    transform: `translateY(${interpolate(frame, [20, 40], [20, 0], {
                        extrapolateLeft: 'clamp',
                        extrapolateRight: 'clamp',
                    })}px)`,
                }}
            >
                {title}
            </div>
        </AbsoluteFill>
    );
};
