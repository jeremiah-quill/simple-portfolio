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
      <h1 className="font-bold text-3xl mb-16">Welcome 👋</h1>
      <div className="grid gap-4 font-thin">
        <p>
          My name is <span className="px-1 bg-slate-500 rounded-lg">Jeremiah</span>, I&apos;m a web
          developer, and this is my corner of the internet.
        </p>
        <p>This website is currently under construction but new features are rolling out weekly.</p>
        <p>
          In the meantime feel free to contact me at{" "}
          <a className="underline px-1 bg-slate-500 rounded-lg" href="mailto:jcq5010@gmail.com">
            jcq5010@gmail.com
          </a>{" "}
          or <span className="px-1 bg-slate-500 rounded-lg">508-439-9618</span>.
        </p>
      </div>
    </>
  );
}
