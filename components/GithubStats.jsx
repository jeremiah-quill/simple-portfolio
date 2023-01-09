import useSWR from "swr";
import { fetcher } from "../utils";

export function GithubStats() {
  const { data: repoStats, error, isLoading } = useSWR("/api/getGithubData", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (repoStats.message) return <div>{repoStats.message}</div>;

  return (
    <div className="italic text-xs font-thin text-slate-300">
      Last modified: {repoStats.lastModified}
    </div>
  );
}
