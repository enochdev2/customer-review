const reviews = [
    { 
        name:"Jude Johnson",
        img: 'im1.jpeg',
        job: 'web developer',
        email: 'enoc@gmail.com',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis nulla corrupti ab illum architecto cupiditate id enim commodi assumenda. '
        
        
    },
     {
       name:"Matthew Precious",
       img: 'im2.jpeg',
       job : 'Digital Marketer',
       email : 'enoc@gmail.com',
       desc : 'process of cultivating and tilling the ground, not only ​is production made possible, but can lead greatness of life like other great people who ',
       
      },
      {
        name : 'Nully Becky',
        img: 'im3.jpeg',
        job : 'Accountant',
        email: 'enoc@gmail.com',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore debitis nulla corrupti ab illum architecto cupiditate id enim commodi assumenda. '
        
    },
   {
        name: "Nathan Isabella",
        img: 'im4.jpeg',
        job : 'Sales Manager',
        email: 'enoc@gmail.com',
        desc: 'dolor sit amet consectetur adipisicing elit. Praesentium autem hic voluptatem odio? Fugiat exercitationem in vel, eaque dolor quibusdam. ',

    }
];




const images = document.querySelector('.image');
const jobs = document.querySelector('.job-title');
const names = document.querySelector('.name');
const disc = document.querySelector('.desc');
const wrapper =  document.querySelector('.wrapper');

const nxtbtn = document.querySelector('.Nextbutton');
const randbtn = document.querySelector('.Randombutton');
const prebtn = document.querySelector('.prevbutton');

let id = 0;

window.addEventListener('DOMContentLoaded', () => {
display(id);
});

const display = (person) => {
   //const { name, img, job, desc } =  reviews[id];
  
  
   const review = reviews[id];
   names.innerHTML = review.name;
    images.src = review.img;
   jobs.innerHTML = review.job;
  disc.innerHTML = review.desc;
}
prebtn.addEventListener('click', () => {
    id--;
    if(id < 0) {
        id = 3;
     }
    display(id)
  })

  nxtbtn.addEventListener('click', () => {
    id++;
    if(id > reviews.length - 1) {
       id = 0;
    }
    display(id)
  })

  randbtn.addEventListener('click', () => {
   id = Math.floor(Math.random()*reviews.length);
    display(id);
  })