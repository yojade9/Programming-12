// all of the possible reviews
const reviews = [
    {
        id: 1,
        name: "Michael Jordan",
        job: "Motivational Speaker",
        img: "https://i.pinimg.com/564x/7d/ea/46/7dea4632db7501bc50b9aa9532d5fa47.jpg",
        text: "An athletics store that goes above and beyond! This store offers a comprehensive range of top-notch gear for every fitness enthusiast. From high-performance shoes to durable workout apparel, their selection caters to all levels and sports, coupled with knowledgeable staff who provide excellent guidance and recommendations. A one-stop destination for quality and expertise in the world of athletics!"
    },
    {
        id: 2,
        name: "Donnie Yen",
        job: "Fitness Trainer",
        img: "https://i.pinimg.com/originals/b8/bf/0f/b8bf0f6e5aa41ba3ed868575ed79d440.jpg",
        text: "An athletics store that sets the bar high! Their collection of gear combines functionality with style, ensuring customers find the perfect balance between performance and aesthetics. The store's commitment to stocking diverse brands and equipment for various sports showcases their dedication to meeting every athlete's needs. With a welcoming atmosphere and a team passionate about fitness, it's a haven for those seeking quality and personalized service in the world of athletics."
    },
    {
        id: 3,
        name: "Stephen Curry",
        job: "Pro Golfer",
        img: "https://people.com/thmb/GU6Ug_jMvC-hE5y9c5wiaB3M4xk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(666x0:668x2)/steph-curry-american-century-championship-071723-1-da97372ab479422b87bca7ec41e20d5b.jpg",
        text: "A one-stop haven for athletes of all levels! From top-notch gear to specialized equipment, this store covers it all. The range of products, from footwear to performance wear, caters to various sports enthusiasts. With knowledgeable staff who offer personalized advice and a wide selection of quality brands, this store ensures you're geared up for success on the field, track, or court."
    },
    {
        id: 4,
        name: "Ja Morant",
        job: "Pro Basketball Player",
        img: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbealestreetbears.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1430472073.jpeg",
        text: "An athletics paradise! This store is a treasure trove for fitness aficionados. The diverse array of gear available—be it for team sports, individual workouts, or outdoor adventures—is impressive. What sets this place apart is its commitment to quality and customer satisfaction. The staff's expertise and friendly assistance make shopping here a delightful experience for anyone pursuing an active lifestyle." 
    },
    {
        id: 5,
        name: "Michael Phelps",
        job: "5x Olympic Swimmer",
        img: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "For athletes seeking top-tier equipment and apparel, this store is a game-changer. The collection boasts the latest advancements in athletic gear, catering to both professionals and amateurs. What's remarkable is the attention to detail in selecting products that enhance performance and comfort. The store's dedication to offering reliable, durable items ensures that customers can focus on their game without worrying about their gear."
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const slideshowBtn = document.querySelector(".slideshow")

let currentItem = 0;
let ss = false;

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// Function that displays client details/reviews
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// Function to start Slideshow
function startSlideshow() {
    slideshowInterval = setInterval(() => {
      currentItem++;
      if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      ss = true;
      showPerson();
    }, 5000); // each review is shown for 5 seconds since 5000ms = 5s
}
//Function to stop slideshow
function stopSlideshow() {
    clearInterval(slideshowInterval);
}

nextBtn.addEventListener("click", function () {
    if (ss == true){ // If slideshow is on, we will stop it so user can take control
        stopSlideshow();
    }
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0; // if we reach last review, we will start over again from the start
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    if (ss == true){
        stopSlideshow();
    }
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener("click", function () {
    if (ss == true){
        stopSlideshow();
    }
    currentItem = Math.floor(Math.random() * reviews.length); // random module to get a random reviews
    showPerson();
});

slideshowBtn.addEventListener("click", function () {
    startSlideshow();
});

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode'); // Allows for the dark mode transition to take place once button is clicked. This function takes help from CSS

  // display the text on the button depending on what mode is enabled by user
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
  } else {
    themeToggle.textContent = 'Dark Mode';
  }
});


// Code that allows users to add their own reviews
const addReviewBtn = document.querySelector('.add-review-btn');

addReviewBtn.addEventListener('click', function() {
    const userName = prompt('Please Enter Your Full Name :');
    const userJob = prompt('Please Enter Your Job/Role :');
    const userText = prompt('What is your review on our company ? :');
    
    if (userText !== null && userText.trim() !== '') {
        const newUserReview = {
            id: reviews.length + 1,
            name: userName,
            job: userJob,
            img: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            text: userText
        };

        reviews.push(newUserReview); // Allows the user to add their review to lit of reviews. sadly, once the web server is closed, the review is alos gone as it is only saved for time being
        // A much stronger depth of javascript is needed to store the data. A use of a json file will be helpful in this 
        currentItem = reviews.length - 1; // Update currentItem to the index of the newly added review
        showPerson(); // Display the newly added review
    } else {
        alert('Something went wrong... Would you like to try again ?');
    }
});