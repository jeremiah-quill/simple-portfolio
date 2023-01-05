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
          <div className="flex gap-4 bg-blue-500 p-2 rounded-md">
            <img src="/assets/images/album-art.png" className="w-[50px]" />
            <div>
              <div className="text-xl font-thin">track name</div>
              <div className="text-sm">artist - album</div>
            </div>
          </div>
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
        <div className="flex gap-4 bg-blue-500 p-2 rounded-md">
          <img src="/assets/images/album-art.png" className="w-[50px]" />
          <div>
            <div className="text-xl font-thin">track name</div>
            <div className="text-sm">artist - album</div>
          </div>
        </div>
        <div className=" rounded-md mt-4">
          <ul>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
            <li className="flex gap-4 p-2">
              <img src="/assets/images/album-art.png" className="w-[50px]" />
              <div>
                <div className="text-xl font-thin">track name</div>
                <div className="text-sm">artist - album</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
