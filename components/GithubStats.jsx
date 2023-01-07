import { useEffect, useState } from "react";

export function GithubStats() {
  const [repoData, setRepoData] = useState({ lastModified: "", commitCount: "" });

  useEffect(() => {
    async function getRepoData() {
      const response = await fetch("/api/getGithubData");
      const data = await response.json();

      const dateString = data.data.headers["last-modified"];
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);

      setRepoData({ lastModified: formattedDate, commitCount: 10 });
    }
    getRepoData();
  }, []);

  return (
    <div className="italic text-xs font-thin text-slate-300">
      Last modified: {repoData.lastModified}
    </div>
  );
}
