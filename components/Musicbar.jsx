import { useState } from "react";

export function Musicbar() {
  const [open, setOpen] = useState(false);

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
              trackName: "primary track",
              artist: "primary artist",
              ablum: "primary album",
              src: "/assets/images/album-art.png",
            }}
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
        <div>test</div>
        <TrackPill
          isPrimary={true}
          track={{
            trackName: "primary track",
            artist: "primary artist",
            ablum: "primary album",
            src: "/assets/images/album-art.png",
          }}
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
                  ablum: "album",
                  src: "/assets/images/album-art.png",
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TrackPill({ track, isPrimary }) {
  const { album, artist, trackName, src } = track;
  return (
    <div className={`flex gap-4 p-2 rounded-md ${isPrimary && "bg-blue-500"}`}>
      <img src={src} className="w-[50px]" />
      <div>
        <div className="text-xl font-thin">{trackName}</div>
        <div className="text-sm">
          {artist} - {album}
        </div>
      </div>
    </div>
  );
}
