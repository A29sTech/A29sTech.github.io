const showContact = ()=>{
    let tm = document.getElementById('about');
    tm.style.display = "block";
    tm.className = tm.className + " slideInUp"
}

document.onscroll = () => {
    showContact();
    document.onscroll = null;
};
document.onclick = ()=>{
    showContact();
    document.onclick = null;
};
document.onwheel = ()=>{
    showContact();
    document.onmouseover = null;
};
