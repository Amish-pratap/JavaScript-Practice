const btn = document.querySelector('button');
btn.addEventListener('mouseover',function(){
  console.log('moused over me');
  const width = Math.floor(Math.random()*window.innerWidth);
  const height = Math.floor(Math.random()*window.innerHeight);
  btn.style.left=`${width}px`;
  btn.style.top=`${height}px`;
})

btn.addEventListener('click',()=>{
  btn.innerText = 'you got me!';
  document.body.style.backgroundColor = 'blue';
})