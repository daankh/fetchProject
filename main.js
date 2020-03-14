const getUsers = e => {
  e.preventDefault();
  const usersGender = document.querySelector('select[name="gender"]').value;
  const usersNumber = document.querySelector('input[name="users-number"]')
    .value;

  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === "both" ? "male,female" : usersGender
  }`;

  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw Error("To nie jest odpowiedz 200");
      } else {
        return response.json();
      }
    })
    .then(result => showUsers(result.results))
    .catch(err => console.log(err));
};

const showUsers = users => {
  const resultArea = document.querySelector(".user-list");
  resultArea.innerHTML = "";
  users.forEach(user => {
    const { name, picture } = user;
    const { title, first, last } = name;
    const { medium } = picture;
    const item = document.createElement("div");
    item.classList.add("user");
    item.innerHTML = `
        <div class="user__name">${title.toUpperCase()} ${first} ${last}</div>
        <img class="user__image" src="${medium}">
    `;
    resultArea.appendChild(item);
  });
};

window.addEventListener("DOMContentLoaded", () => {
  const getUsersForm = document.querySelector(".generator");
  getUsersForm.addEventListener("submit", getUsers);
});
