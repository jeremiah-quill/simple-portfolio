import { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../utils";

export function Musicbar() {
  const { data: track, error, isLoading } = useSWR("/api/getSpotifyHistory", fetcher);
  const [open, setOpen] = useState(false);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  function toggle() {
    setOpen(!open);
  }

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
            percentage={20}
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

function TrackPill({ track, isPrimary, percentage }) {
  const { album, artist, trackName, src } = track;

  return (
    <div className={`flex gap-4 p-2 rounded-md ${isPrimary && "bg-slate-700"}`}>
      <img src={src} className="w-[72px]" />
      <div className="flex flex-col flex-1">
        <div className="text-xl font-thin">{trackName}</div>
        <div className="text-sm">
          {artist} - {album}
        </div>
        <div
          style={{ width: `${percentage}%` }}
          className={`h-[5px] bg-green-500 mt-auto rounded-full mb-2`}
        />
      </div>
    </div>
  );
}
