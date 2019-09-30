window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");


    //resizing ;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;



    console.log(ctx);

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = 5;
    // ctx.strokeRect(50, 50, 200, 200);
    // ctx.beginPath();
    // ctx.moveTo(100, 100);
    // ctx.lineTo(100, 150);
    // ctx.stroke();

    let painting = false;

    function startPosition(e) {
        painting = true;
        draw(e)
    }

    function finishPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) {
            return;
        }
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = 'red';
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishPosition);
    canvas.addEventListener('mousemove', draw);


});
