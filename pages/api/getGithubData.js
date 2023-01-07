import { Octokit } from "octokit";

export default async function handler(req, res) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const data = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "jeremiah-quill",
    repo: "simple-portfolio",
  });

  res.status(200).json({ data });
}
