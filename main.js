const getUsers = () => {
  const url = "https://randomuser.me/api/?results=10";
  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw Error("To nie jest odpowiedz 200");
      } else {
        return response.json();
      }
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

window.addEventListener("DOMContentLoaded", () => {
  const getUsersButton = document.querySelector("button");
  getUsersButton.addEventListener("click", getUsers);
});
