
export function dombutton(idbutton){
    const btn = document.getElementById(idbutton);
    btn.addEventListener('mouseover', () =>{
        btn.style.color = "#ffffff";
        btn.style.border = "2px solid #00bfff";
        btn.style.borderRadius = "8px";
        btn.style.padding = "10px 17px";
    });
    btn.addEventListener('mouseout', () =>{
        btn.style.backgroundColor = "transparente";
        btn.style.color ="#ffffff";
        btn.style.border = "none";
        btn.style.padding = "10px 15px";
    });
};
export function ouvrirpage(idbutton, nompage) {
    const btn = document.getElementById(idbutton);
    btn.addEventListener('click', () => {
        window.location.href = nompage;
    })
}