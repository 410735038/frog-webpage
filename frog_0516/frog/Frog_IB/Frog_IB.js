// nothing now
const flipCard = () => {
    const flipbtn = document.querySelectorAll('.flip');
    const card = document.querySelectorAll('.card');
    const back_back = document.querySelectorAll('.back_back');

    flipbtn.forEach((link, index) => {
        flipbtn[index].addEventListener('mouseover', () => {
            card[index].style.transform = "rotateY(180deg)";

        });
    });

    back_back.forEach((link, index) => {
        back_back[index].addEventListener('mouseover', () => {
            card[index].style.transform = "rotateY(0deg)";
        })
    } )
}

// const cardMore = () => {
//     const read_more = document.querySelectorAll('.card_more');
//     const card = document.querySelectorAll('.card');
//     const IB_More = document.querySelectorAll('.IB_More');

//     read_more.forEach((link, index) => {
//         read_more[index].addEventListener('click', () => {
//             // read_more[index].innerHTML = "close";
//             console.log(index);
//             IB_More[index].classList.toggle('IB_More_M');
//         });
//     });
// }

flipCard();
// cardMore();