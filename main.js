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
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

window.addEventListener("DOMContentLoaded", () => {
  const getUsersForm = document.querySelector(".generator");
  getUsersForm.addEventListener("submit", getUsers);
});
