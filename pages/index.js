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
      <div className="grid place-items-center h-full text-center">
        <div className="grid gap-8">
          <h1 className="text-3xl font-extrabold">Jeremiah Quill: Developer</h1>
          <p>
            Welcome to my corner of the internet. This website is currently under construction, but
            new features are rolling out weekly.
          </p>
        </div>
      </div>
    </>
  );
}
