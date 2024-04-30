import React from "react";
import MuxPlayer from "@mux/mux-player-react";

const VideoPlayer = () => {
  return (
    <MuxPlayer
      playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
      onPlay={() => console.log("its now playing")}
      metadata={{
        video_id: "video-id-123456",
        video_title: "Bick Buck Bunny",
        viewer_user_id: "user-id-bc-789",
      }}
      streamType="on-demand"
    />
  );
};

export default VideoPlayer;
