
/** load the page with a random quote and buttons
 * on button click change to another random quote
 * change the color of the button and background in 1 min
 */
let quote = document.querySelector('.main');
let author = document.querySelector('.author');
let btn = document.querySelector('.btn');
let bg = document.querySelector('.box');
let social = document.querySelectorAll('.socials');

 const quotes= [
   {
     name: 'The Way To Get Started Is To Quit Talking And Begin Doing',
     author: '- Walt Disney'
   },
   {
    name: 'If you can think it ,you can do it',
    author: '- Unknown'
  },
  {
    name: 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”',
    author: '- Winston Churchill'
  },
  {
    name: 'Don’t Let Yesterday Take Up Too Much Of Today.',
    author: '- Will Rogers'
  },
  {
    name: 'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.',
    author: '- Rob Siltanen'
  }
 ]

 const color = ['#BFB300', '#253B59', '#9C1B31', '#F36F63','#248EA6'];
 let i = 0;

 

 function init() {
   //change innertext
   quote.innerText = quotes[i].name;
   author.innerText = quotes[i].author;
   
   //change color
   social.forEach(el => el.style.backgroundColor = color[i]);
   btn.style.backgroundColor = color[i];
   bg.style.backgroundColor = color[i];
   i++;
   if( i >= quotes.length && i >= color.length) {
     i = 0;
   }
 }
 init();

 

 btn.addEventListener('click', init);



