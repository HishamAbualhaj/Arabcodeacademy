/**
 * VideoBackground Component
 *
 * A React component for displaying a video as a fullscreen or section background.
 * It ensures the video fills its container while maintaining aspect ratio and
 * provides a slot for rendering child components over the video background.
 *
 * @component
 * @example
 *
 *   <VideoBackground videoSrc="/path/to/video.mp4">
 *     <h1 style={{ color: 'white', textAlign: 'center' }}>Welcome to My Website</h1>
 *   </VideoBackground>
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to render over the video.
 * @param {string} props.videoSrc - The source URL of the video to be used as background.
 *
 * @returns {JSX.Element} The rendered VideoBackground component.
 */

import { Box } from "@chakra-ui/react";
import React from "react";

interface VideoBackgroundProps {
  children: React.ReactNode;
  videoSrc: string;
}
const VideoBackground: React.FC<VideoBackgroundProps> = ({ children, videoSrc }) => {
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "700px", lg: "900px", "2xl": "1068px" }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        overflow="hidden"
        zIndex={0}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={videoSrc}
        />
      </Box>
      {children}
    </Box>
  );
};

export default VideoBackground;
