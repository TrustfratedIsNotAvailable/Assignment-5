document.body.style.backgroundColor = "lightblue";
document.getElementById("btn-toggle").addEventListener('click',function(){
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    document.body.style.backgroundColor = getRandomColor();
})