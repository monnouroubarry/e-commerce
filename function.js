
export function dombutton(idbutton){
    const btn = document.getElementById(idbutton);
    btn.addEventListener('mouseover', () =>{
        btn.style.backgroundColor = "#0000ff";
        btn.style.color = "#ffffff";
        btn.style.padding = "10px 17px";
    });
    btn.addEventListener('mouseout', () =>{
        btn.style.backgroundColor = "#00bfff";
        btn.style.color ="#ffffff";
        btn.style.padding = "10px 15px";
    });
};
export function ouvrirpage(idbutton, nompage) {
    const btn = document.getElementById(idbutton);
    btn.addEventListener('click', () => {
        window.location.href = nompage;
    })
}