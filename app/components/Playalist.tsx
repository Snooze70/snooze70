import React from "react";

const PlaylistCard = ({ icon = "", title, trackCount }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={icon} alt={`${title} icon`} />
      <p className="text-green-800">{title}</p>
      <span className="text-green-800 text-lg font-semibold">
        {trackCount} Tracks
      </span>
    </div>
  );
};

const MeditationPlaylists = ({ playlists }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-12 my-8">
      {playlists.map((playlist, index) => (
        <PlaylistCard
          key={index}
          title={playlist.title}
          trackCount={playlist.trackCount}
          icon={playlist.icon}
        />
      ))}
    </div>
  );
};

export default MeditationPlaylists;
