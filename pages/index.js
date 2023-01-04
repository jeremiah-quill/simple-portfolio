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
      <>
        <p>
          Welcome to my corner of the internet. I&apos;m a self-taught developer, and I like to
          build cool things on the web. For now I&apos;ll be using this section to list my current
          goals for the site. A &quot;to-do&quot; list of sorts.
        </p>
        <ul className="m-4 list-disc">
          <li>
            Build a spotify integration to sync my spotify account with a custom spotify UI player
          </li>
          <li>Add a section to store my personal portfolio of work</li>
          <ul className="ml-4">
            <li>
              <details>
                <summary className="cursor-pointer">Hotspots</summary>
                <p className="text-xs p-4 m-4 bg-slate-500 rounded">
                  A web application for creating a &quot;hotspot&quot; image with overlayed
                  callouts. Generate the HTML, CSS, and JS required to easily display this feature
                  on your site
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
                  well-designed, easily maintanable personal cookbook to store my recipes and notes.
                  This one is more of a long term project goal.
                </p>
              </details>
            </li>
          </ul>
        </ul>
      </>
    </>
  );
}
