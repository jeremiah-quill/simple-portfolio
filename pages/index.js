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
      <main className="grid place-items-center h-screen bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200">
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
              Welcome to my corner of the internet. I'm a self-taught developer, and I like to build
              cool things on the web. Check back soon for more updates:
            </p>
            <ul className="m-4">
              <li>Synced spotify player</li>
              <li>Portfolio of work</li>
              <li>OSS react UI components and tools</li>
            </ul>
            <div className="mt-16 italic text-xs font-thin text-slate-300">
              Last updated: 12/30/2022
            </div>
          </div>
          <footer className="p-4 flex justify-between border-t border-slate-500">
            <div className="flex gap-2 place-self-end">
              <a
                href="https://github.com/jeremiah-quill"
                target="_blank"
                className="bg-slate-200 p-2 rounded-full w-[40px] h-[40px]">
                <img src="/assets/images/logos/github.svg" className="" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeremiah-quill-281b06122/"
                target="_blank"
                className="bg-slate-200 p-2 rounded-full w-[40px] h-[40px]">
                <img src="/assets/images/logos/linkedin.svg" className="" />
              </a>
              <a
                href="https://open.spotify.com/user/jcq5010?si=86269fd6b7c94c56"
                target="_blank"
                className="bg-slate-200 p-2 rounded-full w-[40px] h-[40px]">
                <img src="/assets/images/logos/spotify.svg" className="" />
              </a>
            </div>
            <div className="grid gap-2 text-sm">
              <a href="https://www.mccormicktaylor.com/" target="_blank">
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
