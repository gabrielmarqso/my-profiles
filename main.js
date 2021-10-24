function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/gabrielmarqso`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profilePic.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
