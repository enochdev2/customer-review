const images = document.querySelector('.image');
const job = document.querySelector('.job-title');
const names = document.querySelector('.name');
const disc = document.querySelector('.desc');
const wrapper =  document.querySelector('.wrapper');

const nxtbtn = document.querySelector('.Nextbutton');
const randbtn = document.querySelector('.Randombutton');
const prebtn = document.querySelector('.prevbutton');
 let i = 0; 
let profile = []
search()

async function search() {
   const  responds = await fetch('https://randomuser.me/api/?results=5')
   const { results } = await responds.json();
    console.log(results);
    
    results.forEach(user=> {
     // const li = document.createElement('li');
      //console.log(user.location.country)
     //profile.push(user)
     i++
     loadd(user)

    // console.log(profile)
    });
     
}

prebtn.addEventListener('click', () => {
  i--
  loadd(user)
  if(i < 0) {
     i = user.lenght-1
  }
})

loadd(user){
  image
function s.src = user.picture.medium;
  job.innerHTML = user.email;
   names.textContent =  user.name.first + ' ' + user.name.last;
  disc.innerHTML = user.gender;
}

const people = [
  {
   id: 1,
  image: 'https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
  name: 'Andrew Peter',
  title: 'office manager',
  quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora earum vel. Voluptates dolor officiis quo sed repellendus dolorum velit placeat facilis debitis illo provident, magni eum beatae in accusamus!'
  },
   {
    image: 'https://st.depositphotos.com/1770836/1372/i/600/depositphotos_13720689-stock-photo-young-businesswoman.jpg',
    name: 'James Daniel',
    title: 'sales manager',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora earum vel. Voluptates dolor officiis quo sed repellendus dolorum velit placeat facilis debitis illo provident, magni eum beatae in accusamus!'
    
  },
   {
    image: 'https://dwz6kul9y5yls.cloudfront.net/wp-content/uploads/2021/09/sundar_adobespark.jpg',
    name: 'Samson Steven',
    title: 'Managing Director',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora earum vel. Voluptates dolor officiis quo sed repellendus dolorum velit placeat facilis debitis illo provident, magni eum beatae in accusamus!'
    
  },
   {
    image: 'https://www.choosingtherapy.com/wp-content/uploads/2021/11/Dr-Tanveer-Ahmed.jpg',
    name: 'Andrew Brandt',
    title: 'Accontant',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora earum vel. Voluptates dolor officiis quo sed repellendus dolorum velit placeat facilis debitis illo provident, magni eum beatae in accusamus!'
    
  },
   {
    image: 'https://st.depositphotos.com/1770836/1372/i/600/depositphotos_13720689-stock-photo-young-businesswoman.jpg',
    name: 'Andrew Peter',
    title: 'office manager',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tempora earum vel. Voluptates dolor officiis quo sed repellendus dolorum velit placeat facilis debitis illo provident, magni eum beatae in accusamus!'
     
  }
];


