document.addEventListener("DOMContentLoaded", async function() {
  const repoOwner = "justinottesen";
  const repoName = "justinottesen.github.io";
  const branchName = "master";
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?sha=${branchName}&per_page=1`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("GitHub API request failed: ", errorData);
      throw new Error("GitHub API request failed");
    }

    const data = await response.json();
    if (data.length === 0) {
      throw new Error(`No commits found on the branch '${main}'`);
    }
    const lastCommit = data[0];
    const lastCommitDate = new Date(lastCommit.commit.committer.date);
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = lastCommitDate.toLocaleDateString(undefined, options);

    document.getElementById("lastUpdated").textContent = formattedDate;
  } catch (error) {
    console.error("Error fetching last commit date:", error);
    document.getElementById("lastUpdated").textContent = "Unkown";
  }
});