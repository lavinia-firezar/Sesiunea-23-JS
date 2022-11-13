// Fie urmatorul array:
const employees = [
  {
    name: "Duroaia Dan",
    position: "UI/UX",
    salary: 4500,
  },
  {
    name: "Trifanov Aurelia",
    position: "Software Developer",
    salary: 6800,
  },
  {
    name: "Popescu Emilia",
    position: "Product Manager",
    salary: 4000,
  },
];

// 1. Creeaza doua functii:
// 1.1. setEmployees - primeste ca parametru un array de angajati si adauga array-ul respectiv in localStorage, sub cheia "employees". Nu returneaza nimic.
// 1.2. getEmployees - nu primeste niciun parametru. Extrage din local storage valoarea cheii "employees" si o returneaza, ca array.

function setEmployees(employees) {
  localStorage.setItem("employees", JSON.stringify(employees));
}

// 2.1. Adauga array-ul employees in localStorage.
setEmployees(employees);

function getEmployees() {
  const keyValue = localStorage.getItem("employees");
  return JSON.parse(keyValue);
}

// 2. Folosind functiile de mai sus, realizeaza urmatoarele operatii:
// 2.2. Extrage angajatii din localStorage.
const arrEmployees = getEmployees();
// 2.3 Parcurge angajatii si afiseaza la consola unmatorul mesaj:
// Angajatul {name}, {position}, are salariul de {salary}.
for (let i = 0; i < arrEmployees.length; i++) {
  console.log(
    `Angajatul ${arrEmployees[i].name}, ${arrEmployees[i].position}, are salariul de ${arrEmployees[i].salary}`
  );
}
