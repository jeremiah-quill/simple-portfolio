import { Navbar } from "./Navbar";
import { Musicbar } from "./Musicbar";
import { GithubStats } from "./GithubStats";

// TODO:
// add functionality + extract the top left buttons
// extract link pills
export default function Layout({ children }) {
  return (
    <div className="grid place-items-center h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200">
      <div className="absolute top-5 right-5 p-1 pr-4 shadow-lg bg-slate-700 rounded-full flex items-center gap-2">
        <img
          src="assets/images/bio-image.png"
          alt="Jeremiah Quill"
          className="rounded-full w-10 shadow-lg border-2 border-white"
        />
        <h1 className="text-xl font-thin">Jeremiah Quill</h1>
      </div>
      <div className="p-2 w-full max-w-[32rem] ">
        <main className="bg-slate-700 rounded-md h-[31rem] flex flex-col shadow-lg">
          <header className="border-b border-slate-500 p-4 py-2 flex items-center gap-8">
            <div className="flex gap-1">
              <div className="w-[15px] h-[15px] rounded-full bg-red-500"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-orange-300"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-green-500"></div>
            </div>
            <Navbar />
          </header>
          <div className="p-4 flex-1 overflow-y-scroll">{children}</div>
          <footer className="p-4 flex justify-between border-t border-slate-500">
            <div className="grid gap-2">
              <GithubStats />
              <Socialbar />
            </div>
            <div className="grid gap-2 text-sm">
              <a href="https://www.mccormicktaylor.com/" target="_blank" rel="noreferrer">
                <div className="px-2 py-1 bg-white rounded-full text-slate-700 flex justify-between items-center relative border border-white">
                  <div className="pr-8">Web Developer II</div>
                  <img
                    src="/assets/images/logos/mt-logo.svg"
                    className="rounded-full w-[28px] absolute right-0"
                  />
                </div>
              </a>
              <a
                href="mailto:jcq5010@gmail.com"
                className="rounded-full px-2 py-1 bg-green-400 text-slate-700 border border-white">
                Accepting freelance
              </a>
            </div>
          </footer>
        </main>
      </div>
      {/* <Musicbar /> */}
    </div>
  );
}

function Socialbar() {
  return (
    <div className="flex gap-2">
      <a
        href="https://github.com/jeremiah-quill"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-200 p-2 rounded-full w-[40px] h-[40px]">
        <img src="/assets/images/logos/github.svg" className="" />
      </a>
      <a
        href="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-200 p-2 rounded-full w-[40px] h-[40px]">
        <img src="/assets/images/logos/linkedin.svg" className="" />
      </a>
      <a
        href="https://open.spotify.com/user/jcq5010?si=86269fd6b7c94c56"
        target="_blank"
        rel="noreferrer"
        className="bg-slate-200 p-2 rounded-full w-[40px] h-[40px]">
        <img src="/assets/images/logos/spotify.svg" className="" />
      </a>
    </div>
  );
}
