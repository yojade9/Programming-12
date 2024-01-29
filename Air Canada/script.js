const reviews = [
    {
        id: 1,
        name: "John Wick",
        job: "Luggage Handler",
        img: "https://avatarfiles.alphacoders.com/370/370979.jpg",
        text: "Working as a luggage handler at Air Canada has been an incredibly rewarding experience. The teamwork and camaraderie among the baggage handling team make each day enjoyable. The company's commitment to employee well-being and professional growth, along with competitive benefits, fosters a positive work environment. Being part of the team responsible for ensuring passengers' belongings reach their destinations safely adds a sense of responsibility and pride to the job."
    },
    {
        id: 2,
        name: "Bulma",
        job: "Air Canada Flight Attendant",
        img: "https://i.pinimg.com/736x/db/df/33/dbdf33780738360ffece6fee09f8cdd2.jpg",
        text: "A Fulfilling Career at Air Canada : Working at Air Canada has been a fulfilling journey filled with opportunities for personal and professional growth. The company's commitment to employee well-being, strong sense of community, and emphasis on sustainability make it a standout workplace. If you're looking to be part of a global leader that values its employees and makes a positive impact in the aviation industry, Air Canada is the place to be."
    },
    {
        id: 3,
        name: "Goku",
        job: "Ground Staff",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa6b0d40-2aa9-4ee3-99bc-b590ac90c5c6/dg9cwai-ee350263-58e6-46a4-bada-b8fe03721fcf.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZhNmIwZDQwLTJhYTktNGVlMy05OWJjLWI1OTBhYzkwYzVjNlwvZGc5Y3dhaS1lZTM1MDI2My01OGU2LTQ2YTQtYmFkYS1iOGZlMDM3MjFmY2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PHfoazdysTNixmRM_jdHupJpjwUfRh3qb9XiwcaOx9I",
        text: "Joining the ground staff at Air Canada has been a fantastic decision. The company prioritizes a culture of inclusivity and continuous learning, providing ample opportunities for career development. The fast-paced nature of the aviation industry keeps the job dynamic and exciting, while the supportive management and friendly colleagues create a tight-knit community. Air Canada's dedication to excellence and passenger satisfaction make it an ideal workplace for those seeking a fulfilling and challenging career in aviation."
    },
    {
        id: 4,
        name: "Vegeta",
        job: "Air Canada Chef",
        img: "https://lh3.googleusercontent.com/proxy/iSoXBrQwAC7ih_qYDB6kQmrpZwAbpP4K2_yZ4y83lnkY-6kRHiB4kFe0NpWWZ9nWpJak3hLZGK6aj28E_WyppDbXRVmxUL-kUCBUhgxaqS5SY_FF3IPmjziFwn2INg",
        text: "Joining the Air Canada Family : Joining Air Canada has been a fantastic decision for me. The company's commitment to a healthy work-life balance, global opportunities, and a supportive community make it an exceptional workplace. If you're looking for a career where you can grow, thrive, and contribute to a company that values its employees, Air Canada is the perfect destination for your professional journey." 
    },
    {
        id: 5,
        name: "John Cena",
        job: "Air Canada Ground Staff",
        img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa6b0d40-2aa9-4ee3-99bc-b590ac90c5c6/dftsdjp-75657bcb-2310-4152-8833-e41848b539dd.jpg/v1/fill/w_512,h_512,q_75,strp/john_cena_pfp_by_d2thag23_dftsdjp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvZmE2YjBkNDAtMmFhOS00ZWUzLTk5YmMtYjU5MGFjOTBjNWM2XC9kZnRzZGpwLTc1NjU3YmNiLTIzMTAtNDE1Mi04ODMzLWU0MTg0OGI1MzlkZC5qcGciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.rB9mSP2MUrCa20Avx3ysUMQp3lE6aUPlNPC0mbqfvzI",
        text: "A Company that Cares : Air Canada is not just a job; it's a platform for endless opportunities. The company's dedication to continuous learning and development ensures that employees are equipped with the skills needed to succeed. With a global presence and a diverse team, Air Canada provides an environment where you can thrive professionally and personally. If you're ready to elevate your career in a dynamic and supportive setting, Air Canada is the perfect choice."
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
  
  const traditional = document.getElementById('traditional');
  traditional.addEventListener("click", function () {
    document.querySelector('main').style.backgroundColor = 'red';
    document.getElementById('text').style.color = 'white';
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = 'white';
    nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    nav.style.backdropFilter = 'blur(10px)';
    
  
    const navLinks = document.querySelectorAll('.links li button');
    navLinks.forEach(function (link) {
      link.style.color = 'black';
    });
  });
  
  
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const colorButton = document.getElementById('color');
  
    // Arrays of colors for main background, nav background, and link text
    const mainColors = ['#F29C94', '#c9ada7', '#a3c9a8', '#BFB0A3', '#E68465', '#E84A3F', '#E65C6C']; 
    const navColors = ['#A63C3C', '#BFB0A3', '#F29C94', '#5CDCE6', '#E3C8E6', '#A2A7E8', '#E6AD96']; 
    const linkColors = ['#F29C94', '#590C13', '#F27272', '#3FEBE4', '#C4EEEF'];
    const textColor = ['#E4EBE6', '#3FEBAE', '#000', '#3FEBAE'];
  
    colorButton.addEventListener('click', function () {
      // Generates random indices for each array
      const mainIndex = Math.floor(Math.random() * mainColors.length);
      const navIndex = Math.floor(Math.random() * navColors.length);
      const linkIndex = Math.floor(Math.random() * linkColors.length);
      const textIndex = Math.floor(Math.random() * textColor.length);
  
      document.querySelector('main').style.backgroundColor = mainColors[mainIndex];
      document.getElementById('text').style.color = textColor[textIndex];
      const nav = document.querySelector('nav');
      nav.style.backgroundColor = navColors[navIndex];
      nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
      nav.style.backdropFilter = 'blur(10px)';
  
      const navLinks = document.querySelectorAll('.links li button');
      navLinks.forEach(function (link) {
        link.style.color = linkColors[linkIndex];
      });
    });
  });
  
  
  // Code for counter
  
  document.addEventListener('DOMContentLoaded', function() {
    var counter = 0;
    var counterDisplay = document.querySelector('.counter h1');
  
    // Function to update the display
    function updateCounter() {
      counterDisplay.textContent = counter;
      if (counter == 0){
        counterDisplay.style.color = 'black'
      }
      else if (counter > 0){
        counterDisplay.style.color = 'white';
      }
      else{
        counterDisplay.style.color = 'red';
      }
    }
  
    var likeBtn = document.getElementById('like');
    var dislikeBtn = document.getElementById('dislike');
    var resetBtn = document.getElementById('reset');
  
    // increases counter by 2 as per requirement
    likeBtn.addEventListener('click', function() {
      counter += 2;
      updateCounter();
    });
  
    // decreases counter by 1 as per requirement
    dislikeBtn.addEventListener('click', function() {
      counter--;
      updateCounter();
    });
  
    // resets the counter if reset is clicked
    resetBtn.addEventListener('click', function() {
      counter = 0;
      updateCounter();
    });
  });
  
  
  // Code for the boarding pass generator
  
  // All possible boarding passes
  const randomBoardingPasses = [
    {
      airline: 'Air Canada',
      flight: 'AC543',
      departure: 'Toronto',
      destination: 'Paris',
      gate: '2C',
      message: "Contact us on 'aircanadafreeflight@gmail.com' to finalize your one free experience flight !"
    },
    {
      airline: 'Air Canada',
      flight: 'AC456',
      departure: 'Vancouver',
      destination: 'London',
      gate: '3B',
      message: "Contact us on 'aircanadafreeflight@gmail.com' to finalize your one free experience flight !"
    },
    {
      airline: 'Air Canada',
      flight: 'AC256',
      departure: 'Seattle',
      destination: 'Vancouver',
      gate: '9C',
      message: 'Contact us on aircanadafreeflight@gmail.com to finalize your one free experience flight !'
    },
    {
      airline: 'Air Canada',
      flight: 'AC415',
      departure: 'Germany',
      destination: 'Dubai',
      gate: '2A',
      message: 'Contact us on aircanadafreeflight@gmail.com to finalize your one free experience flight !'
    },
    {
      airline: 'Air Canada',
      flight: 'AC6498',
      departure: 'Dubai',
      destination: 'India',
      gate: '1A',
      message: 'Contact us on aircanadafreeflight@gmail.com to finalize your one free experience flight !'
    },
    {
      airline: 'Air Canada',
      flight: 'AC406',
      departure: 'Phoenix',
      destination: 'Chicago',
      gate: '3D',
      message: 'Contact us on aircanadafreeflight@gmail.com to finalize your one free experience flight !'
    },
  ];
  
  // Function to get a random boarding pass
  function getRandomBoardingPass() {
    const randomIndex = Math.floor(Math.random() * randomBoardingPasses.length);
    return randomBoardingPasses[randomIndex];
  }
  
  // Function to display a random boarding pass
  function displayRandomBoardingPass() {
    const randomPass = getRandomBoardingPass();
    document.getElementById('airlineName').textContent = randomPass.airline;
    document.getElementById('flightNumber').textContent = `Flight: ${randomPass.flight}`;
    document.getElementById('departure').textContent = `Departue: ${randomPass.departure}`;
    document.getElementById('destination').textContent = `Destination: ${randomPass.destination}`;
    document.getElementById('gate').textContent = `Gate: ${randomPass.gate}`;
    document.getElementById('message').textContent = ` ${randomPass.message}`;
  }
  
  document.getElementById('animation').addEventListener('click', function() {
    const boardingPass = document.querySelector('.boarding-pass');
  
    // Toggle the boarding pass visibility and position
    if (boardingPass.style.opacity === '0') {
      displayRandomBoardingPass(); // Shows a random boarding pass
      boardingPass.style.top = '50px';
      boardingPass.style.opacity = '1';
    } else {
      boardingPass.style.top = '-300px'; // Hides the boarding pass
      boardingPass.style.opacity = '0';
    }
  });
  function hideBoardingPass() {
    const boardingPass = document.querySelector('.boarding-pass');
    boardingPass.style.top = '-300px'; 
    boardingPass.style.opacity = '0';
  }
  
  // closes boarding pass if you click on the 'x' symbol
  document.getElementById('closeButton').addEventListener('click', hideBoardingPass);