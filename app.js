let count=1
let counter = document.getElementById('count_product')
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const bars = document.getElementById('md_nav_bar');
const md_nav =document.getElementById('md_nav_x')
const md_x =document.getElementById('md_x');
const shadow =document.getElementById('shadow')
const choos_ildiz =document.getElementById('ildiz')
const choos_sections = document.getElementById("choos_sections")
choos_ildiz.addEventListener('click', () => {
  choos_sections.classList.add("d-none")
} )
 counter.value = count;

 incrementBtn.addEventListener('click', () => {
  count++;
  counter.value = count;
});

decrementBtn.addEventListener('click', () => {
  if (count != 1) {
    count--;
  }
  counter.value = count;
});


bars.addEventListener('click', () => {
  shadow.classList.remove('d-none')
  shadow.classList.add('d-block')
  md_nav.classList.add('d-block')
  md_nav.classList.remove('d-none')


})

md_x.addEventListener('click', () => {
  md_nav.classList.remove('none_nav')
  md_nav.classList.add('d-none')
  shadow.classList.add('d-none')
})

shadow.addEventListener('click', () => {
  shadow.classList.add('d-none')
  shadow.classList.remove('d-block')
  md_nav.classList.add('d-none')


})