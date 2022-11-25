// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// select items
const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item...setting up event listener...adding function to DOM when HTML is loaded which will be the currentItem(default person) established
window.addEventListener("DOMContentLoaded", function() {
  // showing the output of the function which is currentItem[0]
  showPerson()

});

// show person based on default item

function showPerson() {
  // calling the reviews and connecting it to the global variable currentItem
  const item = reviews[currentItem];
  // calling all parts of the array and tying them to the item varaible
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// setting up event listeners for prev and next buttons to switch between each review
// event listener to look for a click and adding a function to iterate through all reviews when buttons are clicked by adding 1 to currentItem and calling showPerson function and passing through currentItem
nextBtn.addEventListener("click", function () {
  currentItem++;
  // adding if statement saying if currentItem is greater than reviews in array - 1 because of 0 index and will reflect actual last number in array
  if (currentItem > reviews.length - 1) {
    // currentItem will go back to 0 index and start over
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  // since we are going in the opposite direction currentItem needs to decrease by 1
  currentItem--;
  // saying if currentItem is less than 0 then currentItem will = the reviews.length - 1 which is the reverse of nextbtn 
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  // generate random review by assigning currentItem to random module and calling showPerson function
  currentItem = Math.floor(Math.random() * reviews.length);
  
  showPerson();
});
