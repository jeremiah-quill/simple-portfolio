import { Octokit } from "octokit";

export default async function handler(req, res) {
  const octokit = new Octokit();

  const data = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "jeremiah-quill",
    repo: "simple-portfolio",
  });

  // TODO: test this
  if (data.status !== 200) return res.status(500).json({ error: "Something went wrong" });

  res.status(200).json({ data });
}
