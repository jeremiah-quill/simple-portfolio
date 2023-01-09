import { useEffect, useState, useMemo } from "react";
import useSWR from "swr";

import { fetcher } from "../utils";

export function Musicbar() {
  const { data: track, error, isLoading, mutate } = useSWR("/api/getSpotifyHistory", fetcher);
  const [open, setOpen] = useState(false);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function toggle() {
    setOpen(!open);
  }

  function refreshSong() {
    mutate("/api/getSpotifyHistory");
  }

  if (track.message) return <div>{track.message}</div>;

  if (!open)
    return (
      <div className="bg-black w-full absolute bottom-0 p-4 grid place-items-center group">
        <div className="relative p-2 w-full max-w-[30rem]">
          <button
            onClick={toggle}
            className="lg:opacity-0 lg:-top-[20px] lg:group-hover:opacity-100 lg:group-hover:-top-[40px] hover:bg-slate-300 transition-all absolute -top-[40px] right-0 bg-white text-black rounded-md p-2">
            Expand
          </button>
          <TrackPill
            isPrimary={true}
            track={{
              trackName: track.title,
              artist: track.artist,
              album: track.album,
              src: track.albumImageUrl,
              progress: track.progress,
              duration: track.duration,
            }}
            onTrackEnd={refreshSong}
          />
        </div>
      </div>
    );

  return (
    <div className="bg-black w-full h-[90%] absolute bottom-0 p-4 grid">
      <div className="relative p-2 w-full max-w-[30rem] mx-auto">
        <button
          onClick={toggle}
          className="absolute -top-[40px] right-0 bg-white text-black rounded-md p-2 hover:bg-slate-300">
          Collapse
        </button>
        <TrackPill
          isPrimary={true}
          track={{
            trackName: "primary track",
            artist: "primary artist",
            album: "primary album",
            src: "/assets/images/album-art.png",
          }}
          percentage={10}
        />
        <div className=" rounded-md mt-4">
          <ul>
            {["", "", "", "", ""].map((track, i) => (
              <TrackPill
                key={i}
                isPrimary={false}
                track={{
                  trackName: "track name",
                  artist: "artist",
                  album: "album",
                  src: "/assets/images/album-art.png",
                }}
                percentage={90}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TrackPill({ track, isPrimary, onTrackEnd = () => {} }) {
  const { album, artist, trackName, src, progress, duration } = track;

  const [elapsed, setElapsed] = useState(progress);
  const [total, setTotal] = useState(duration);

  // TODO: clean up this code
  useEffect(() => {
    setElapsed(progress);
    setTotal(duration);

    let currentProgress = progress;
    let currentTotal = duration;

    const interval = setInterval(() => {
      if (currentProgress >= currentTotal) {
        clearInterval(interval);
        setElapsed(duration);
        onTrackEnd();
        return;
      }
      currentProgress = currentProgress + 1000;
      setElapsed(currentProgress);
    }, 1000);
    return () => clearInterval(interval);
  }, [duration, progress]);

  const progressWidth = (elapsed / total) * 100;
  function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const secondsLeft = (Math.floor(ms % 60000) / 1000).toFixed(0);
    const formattedSeconds = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

    if (formattedSeconds === "60") return `${minutes + 1}:00`;

    return `${minutes}:${formattedSeconds}`;
  }

  return (
    <div className={`flex gap-4 p-2 rounded-md ${isPrimary && "bg-slate-700"}`}>
      <img src={src} className="w-[72px]" />
      <div className="flex flex-col flex-1">
        <div className="text-xl font-thin">{trackName}</div>
        <div className="text-sm">
          {artist} - {album}
        </div>
        <div className="flex items-center gap-2">
          <div>{`${formatTime(elapsed)}`}</div>
          <div className="flex-1 flex">
            <div
              style={{ width: `${progressWidth}%` }}
              className={`h-[5px] bg-green-500 rounded-full`}
            />
          </div>
          <div>{`${formatTime(duration)}`}</div>
        </div>
      </div>
    </div>
  );
}
