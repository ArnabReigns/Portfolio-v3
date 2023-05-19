export default () =>{


    const letmag = document.querySelectorAll('.letmag');
    
    letmag.forEach(elem=>{

        if(elem.children[0]?.tagName.toLowerCase() == 'span') return;

        var textArr = elem.innerHTML.split('<br>');
        elem.innerText = "";
        
        for(let i in textArr){
    
            for(let j in textArr[i]){
                
                var el = document.createElement('span');
                el.classList.add("let");
                el.innerText = textArr[i][j];
                elem.appendChild(el);
                
            }
            elem.appendChild(document.createElement('br'));
        }
    });
    
}