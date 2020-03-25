// Question 1

const cat {
    complain: function() {
    console.log("Meow!");
    }
}

// Question 2
const heading = document.querySelector("h3");
console.dir(heading);

// Question 3
heading.style.fontSize = "2em";

// Question 4
heading.classList.add("subheading");

// Question 5
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

// Question 6
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

// Question 7
const cats = [
  {
name: "Blob",
age: 10
  },
  {
name: "Harold"
  },
  {
name: "Blurt",
age: 21
  }
];

function myCats(catArray) {
for (let i = 0; i < catArray.length; i++) {
console.log(catArray[i].name);
  }
}
myCats(cats);

// Question 8
const cats = [
{
name: "Blob",
age: 10
  },
  {
name: "Harold"
  },
  {
name: "Blurt",
age: 21
  }
];

function myCats(catArray) {
  let name = "";

  for (let i = 0; i < catArray.length; i++) {
    name += `<h5>${catArray[i].name}</h5>`;
  }
  return name;
}
const catNames = myCats(cats);

console.log(catNames);

// Question 9

const cats = [
  {
name: "Blob",
age: 10
  },
  {
name: "Harold"
  },
  {
name: "Blurt",
age: 21
  }
];

function myCats(catArray) {
  let name = "";

  for (let i = 0; i < catArray.length; i++) {
name += `<h5>${catArray[i].name}</h5>`;
  }
  return name;
}
const catNames = myCats(cats);

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = catNames;

// Question 10
const cats = [
  {
    name: "Blob",
    age: 10
  },
  {
    name: "Harold"
  },
  {
    name: "Blurt",
    age: 21
  }
];

function myCats(catArray) {
  let catDetails = "";

  for (let i = 0; i < catArray.length; i++) {
    let ageValue = "Age unknown";
    if (catArray[i].age) {
      ageValue = catArray[i].age;
    }
    catDetails += `<div>
                    <h5>${catArray[i].name}</h5>
                    <p>${ageValue}</p>
                    </div>`;
  }
  return catDetails;
}
const catInfo = myCats(cats);
console.log(catInfo);
