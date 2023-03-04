const data=[{
    imgg:`s1.jpeg`},
    {imgg:`s2.jpeg`},
    {imgg:`s3.jpeg`},
    {imgg:`s4.jpeg`},
    {imgg:`s4.jpeg`},
    {imgg:`s5.jpeg`},
    {imgg:`s6.jpg`},
    {imgg:`s7.jpg`}]


const BtnL=document.querySelector('#btl')
const BtnR=document.querySelector('#btr')
const photo=document.querySelector('#img')

//function
const dhoni=()=>{
    let index=Math.floor(Math.random()*(data.length))
    photo.src=data[index].imgg
}
BtnR.addEventListener('click',dhoni)
BtnL.addEventListener('click',dhoni)