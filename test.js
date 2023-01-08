/* 1.Programming Basics */
const dishes = [
  "Spaghetti",
  "Lasagne",
  "Beans on toast",
  "Porridge",
  "Tomato soup",
  "Salmon",
];
for (let i = 0; i < dishes.length; i++) {
  console.log(dishes[i]);
}
/* for (let i in dishes) {
  console.log(dishes[i]);
} */
const randomNum = Math.floor(Math.random() * dishes.length);
console.log(dishes[randomNum]);
/* 2. DOM manipulation */
const testButton = document.getElementById("test-button");
const textContainer = document.getElementById("text-container");
const body = document.getElementById("body");
const handleButtonClick = (e) => {
  textContainer.innerHTML = `<h1>Javascript Test</h1>`;
  body.setAttribute("bgcolor", "pink");
};
testButton.addEventListener("click", (e) => {
  handleButtonClick(e);
});
/* 3.Async API calls */
const getUsersInfo = async () => {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data;
};
const getSpecifiedUsers = async () => {
  const Data = await getUsersInfo();
  const users = Data.data;
  const newArrFirstName = users.map((e) => e.first_name);
  for (i = 0; i <= 2; i++) {
    console.log(newArrFirstName[i]);
  }
};
getSpecifiedUsers();

/* 4.Class (optional) */
class Person {
  constructor(firstname) {
    this.firstname = firstname;
  }

  sayHello() {
    console.log(`Hello my name is ${this.firstname}`);
  }
}
const peter = new Person("Peter");
peter.sayHello();
