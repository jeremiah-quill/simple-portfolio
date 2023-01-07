import { useEffect, useState } from "react";

export function GithubStats() {
  const [repoData, setRepoData] = useState({ lastModified: "", commitCount: "" });

  useEffect(() => {
    async function getRepoData() {
      const response = await fetch("/api/getGithubData");
      const data = await response.json();
      setRepoData({ lastModified: data.data.headers["last-modified"], commitCount: 10 });
      console.log(data);
    }
    getRepoData();
  }, []);

  return (
    <div className="italic text-xs font-thin text-slate-300">
      Last modified: {repoData.lastModified}
    </div>
  );
}
