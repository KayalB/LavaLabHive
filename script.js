document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML == "Connect"){
            button.style.backgroundColor = '#DFFDE0';
            button.style.color = '#40713F';
            button.style.borderColor = '#DFFDE0';

            button.innerHTML = "Connected";
            // button.innerHTML.transition = '.7s ease';
            button.style.transition = '.7s ease';
        }else{
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.style.borderColor = '#C8C8C8';
            button.innerHTML = "Connect";
            // button.innerHTML.transition = '.5s ease';
            button.style.transition = '.7s ease';
        }
    });
});

const bbtn = document.querySelector('.back');
bbtn.addEventListener('click', () => {
    document.querySelectorAll('.button').forEach(button => {
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.style.borderColor = '#C8C8C8';
        button.innerHTML = "Connect";
        // button.innerHTML.transition = '.5s ease';
        button.style.transition = '.7s ease';
    });
});

const fbtn = document.querySelector('.finish');
fbtn.addEventListener('click', () => {
    let all_clicked = true;
    document.querySelectorAll('.button').forEach(button => {
        if (button.innerHTML != "Connected"){
            all_clicked = false;
            button.style.backgroundColor = '#F5A1A0';
            button.style.borderColor = 'black';
            button.style.color = "#B51D1D";
            button.innerHTML = "Click me!";
            button.style.transition = '.3s ease';

            setTimeout(() => {
                button.style.backgroundColor = 'white';
                button.style.borderColor = '#C8C8C8';
                button.style.transition = '.5s ease';
            }, 500); // Delay matches the transition duration in milliseconds (0.7 seconds)
            setTimeout(() => {
                button.innerHTML = "Connect";
                button.style.color = 'black';
            }, 700); // Delay matches the transition duration in milliseconds (0.7 seconds)
        }        
    });
    if (all_clicked){
        
    }
});




