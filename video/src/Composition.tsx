import { Series } from 'remotion';
import { ScreenSlide } from './ScreenSlide';
import React from 'react';

const sections = [
    "Hero Section: Narrating Fate through ER Diagram",
    "Introduction: The Architecture of Connection",
    "Core Entities: Database Perspective",
    "Chapter 1: The Body Swap & Messages",
    "Chapter 2: The Comet & Disaster",
    "Chapter 3: The Truth About Time",
    "Chapter 4: Taki's Attempt & Twilight Meeting",
    "Chapter 5: The Years After",
    "ER Dashboard: Musubi Relationship",
    "Full ER Diagram: Story Schema",
    "Photo Gallery: Project Tiamat (Part 1)",
    "Photo Gallery: Project Tiamat (Part 2)",
    "Conclusion: Powerful Message About Fate",
    "Conclusion: Narrative-to-Data Pipeline"
];

export const PresentationWalkthrough: React.FC = () => {
    return (
        <Series>
            {sections.map((title, i) => (
                <Series.Sequence durationInFrames={90} key={i}>
                    <ScreenSlide
                        imageSrc={`assets/screens/section_${String(i + 1).padStart(2, '0')}.png`}
                        title={title}
                    />
                </Series.Sequence>
            ))}
        </Series>
    );
};
