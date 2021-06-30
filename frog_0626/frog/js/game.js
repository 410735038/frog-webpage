var arr = [], ansArr = [1,2,3,4,5];
var Quest = [], ans = [];
var lastelement = '', randomElement = '';
const arrTitle = ['黑眼蟾蜍', '盤古蟾蜍', '小雨蛙', '貢德氏赤蛙', '斯文豪氏赤蛙', '澤蛙', '拉都西氏赤蛙', '艾氏樹蛙', '莫氏樹蛙', '褐樹蛙', '太田樹蛙'];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}
const pickToQuest = (array) => {
    var i = 0;
    while(Quest.length!=5){
        var x = Math.floor(Math.random() * array.length);
        randomElement = array[x];
        if(isexist(Quest, randomElement)){
            continue;
        }
        // console.log(randomElement);
        lastelement = randomElement;
        Quest[i] = randomElement;
        arr[i]=x;
        // console.log(x);
        i++;
    }
    // console.log(Quest);
    console.log(arr);
}
const isexist = (array, element) => {
    for(let i = 0; i < array.length; i++){
        if(element == array[i]){
            return true;
        }
    }
    return false;
}
const randomQuest = (array, Quest) => {
    for(let i = 0; i < 5; i++){
        ans[i] = arrTitle[arr[i]];
    }
    console.log(ans);
    shuffle(Quest);
    console.log(Quest);
    for(let i = 0; i < 5; i++){
        var t = array[i]+1;
        var w = i+1;
        var s = "Quest" + w;    
        var u = "QT" + w;
        document.getElementById(s).src = "Frog_IB/img/frog_" + t + ".jpg";
        // console.log(t);
        document.getElementById('Ans'+w).innerHTML = Quest[i];
        document.getElementById(u).innerHTML = ans[i];
    }
}

const renew = () => {
    Quest = []; arr =  [];
    pickToQuest(arrTitle);
    randomQuest(arr, Quest);
}

const cancel = () => {
    var z = document.querySelector('.cntFull');
    var y = document.querySelector('.top_img'); 
    z.style.display = 'none';
    y.style.display = 'block'; 

    for(let i = 0; i < 5; i++){
        var n = i+1;
        var m = document.querySelector('#QB' + n);
        var x = document.querySelector('#Quest'+ n);
        x.style.height = "90%"; x.style.width = "90%";
        m.appendChild(x);
    }
    cnt = 0;
    correct = 0;
}

pickToQuest(arrTitle);
randomQuest(arr, Quest);

const check = () => {
    var ans = [];
    for(let i = 0; i < 5; i++){
        ans[i] = arrTitle[arr[i]];
    }
    console.log(ans);
}

// var zz = document.getElementById('game_right').offsetHeight;
// console.log(zz);
// document.getElementById('drawer-list').style.height = zz;

