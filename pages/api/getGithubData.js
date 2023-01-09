import { Octokit } from "octokit";

export default async function handler(req, res) {
  const octokit = new Octokit();
  const data = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "jeremiah-quill",
    repo: "simple-portfolio",
  });

  // TODO: test this
  if (data.status !== 200) return { message: "Something went wrong" };

  const dateString = data.data["pushed_at"];
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const lastModified = date.toLocaleDateString("en-US", options);

  res.status(200).json({ lastModified });
}
