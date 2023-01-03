import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jeremiah Quill | Developer</title>
        <meta name="description" content="A personal online presence WIP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main className="p-2 grid place-items-center h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200">
        <div className="bg-slate-700 rounded-md max-w-lg">
          <header className="border-b border-slate-500 p-4 py-2 flex items-center gap-8">
            <div className="flex gap-1">
              <div className="w-[15px] h-[15px] rounded-full bg-red-500"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-orange-300"></div>
              <div className="w-[15px] h-[15px] rounded-full bg-green-500"></div>
            </div>
            <h1 className="text-white font-bold ml-auto">Jeremiah Quill ~ Dev</h1>
          </header>
          <div className="p-4">
            <p>
              Welcome to my corner of the internet. I&apos;m a self-taught developer, and I like to
              build cool things on the web. For now I&apos;ll be using this section to list my
              current goals for the site. A "to-do" list of sorts.
            </p>
            <ul className="m-4 list-disc">
              <li>
                Build a spotify integration to sync my spotify account with a custom spotify UI
                player
              </li>
              <li>Add a section to store my personal portfolio of work</li>
              <ul className="ml-4">
                <li>
                  <details>
                    <summary className="cursor-pointer">Hotspots</summary>
                    <p className="text-xs p-4 m-4 bg-slate-500 rounded">
                      A web application for creating a "hotspot" image with overlayed callouts.
                      Generate the HTML, CSS, and JS required to easily display this feature on your
                      site
                    </p>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="cursor-pointer">Hex Color Game</summary>
                    <p className="text-xs p-4 m-4 bg-slate-500 rounded">
                      A game that tests your knowledge of hex colors.
                    </p>
                  </details>
                </li>
                <li>
                  <details>
                    <summary className="cursor-pointer">Personal Recipe Book</summary>
                    <p className="text-xs p-4 m-4 bg-slate-500 rounded">
                      The first full stack project I ever built was a social cookbook. I&apos;m
                      revisiting this, but with less emphasis on social. This is essentially a
                      well-designed, easily maintanable personal cookbook to store my recipes and
                      notes. This one is more of a long term project goal.
                    </p>
                  </details>
                </li>
              </ul>
            </ul>
            <div className="mt-16 italic text-xs font-thin text-slate-300">
              Last updated: 1/3/2023
            </div>
          </div>
          <footer className="p-4 flex justify-between border-t border-slate-500">
            <div className="flex gap-2 place-self-end">
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
            <div className="grid gap-2 text-sm">
              <a href="https://www.mccormicktaylor.com/" target="_blank" rel="noreferrer">
                <div className="px-2 py-1 bg-white rounded-full text-slate-700 flex justify-between items-center relative border border-white">
                  <div>Designer II</div>
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
        </div>
      </main>
    </>
  );
}
