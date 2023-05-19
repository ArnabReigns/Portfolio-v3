export default () => document.addEventListener('mousemove', e => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchore = document.getElementById('anchore')
    const rect = anchore.getBoundingClientRect();
    const anchoreX = rect.left + rect.width/2; 
    const anchoreY = rect.top + rect.height/2;
    

    const angleDeg = angle(mouseX,mouseY,anchoreX,anchoreY);
    // console.log(angleDeg)

    const eyes = document.querySelectorAll('.eye-box');
    eyes.forEach( eye => {
        eye.style.transform = `rotate(${-20+ angleDeg}deg)`
    })

});


function angle(cx,cy,ex,ey) {

    const dy = ey-cy;
    const dx = ex- cx;

    const rad = Math.atan2(dy,dx); // range(-PI,PI)
    const deg = rad * 180/ Math.PI;
    return deg;
}


