const getcolor = () =>{
    const rem=Math.floor(Math.random()*16777215);
    const hexcode="#"+rem.toString(16);
    console.log(rem,hexcode);
document.body.style.background=hexcode;
document.getElementById('code').innerHTML=hexcode;
document.getElementById('btn').style.background=hexcode;
}
document.getElementById('btn').addEventListener("click",getcolor);
getcolor();