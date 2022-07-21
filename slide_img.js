const image01src = 'url("img/bg-01.png")';
const image02src = 'url("img/bg-02.png")';
const image03src = 'url("img/bg-03.png")';
const image04src = 'url("img/bg-04.png")';
const image05src = 'url("img/bg-05.png")';
const image06src = 'url("img/bg-06.png")';

const p_c1 = document.getElementById('p_c1');
const p_c2 = document.getElementById('p_c2');
const p_c3 = document.getElementById('p_c3');

const o_c1 = document.getElementById('o_c1');
const o_c2 = document.getElementById('o_c2');
const o_c3 = document.getElementById('o_c3');

const g_c1 = document.getElementById('g_c1');
const g_c2 = document.getElementById('g_c2');
const g_c3 = document.getElementById('g_c3');

const i_c1 = document.getElementById('i_c1');
const i_c2 = document.getElementById('i_c2');
const i_c3 = document.getElementById('i_c3');

const a_c1 = document.getElementById('a_c1');
const a_c2 = document.getElementById('a_c2');
const a_c3 = document.getElementById('a_c3');

const c_c1 = document.getElementById('c_c1');
const c_c2 = document.getElementById('c_c2');
const c_c3 = document.getElementById('c_c3');

o_c1.style.visibility = "hidden";
o_c2.style.visibility = "hidden";
o_c3.style.visibility = "hidden";
g_c1.style.visibility = "hidden";
g_c2.style.visibility = "hidden";
g_c3.style.visibility = "hidden";
i_c1.style.visibility = "hidden";
i_c2.style.visibility = "hidden";
i_c3.style.visibility = "hidden";
a_c1.style.visibility = "hidden";
a_c2.style.visibility = "hidden";
a_c3.style.visibility = "hidden";
c_c1.style.visibility = "hidden";
c_c2.style.visibility = "hidden";
c_c3.style.visibility = "hidden";


function nextImage(){
    const div = document.getElementById('top-left');
    const nowBg = div.style.backgroundImage;
    console.log(nowBg);

    const p_c1 = document.getElementById('p_c1');
    const p_c2 = document.getElementById('p_c2');
    const p_c3 = document.getElementById('p_c3');

    const o_c1 = document.getElementById('o_c1');
    const o_c2 = document.getElementById('o_c2');
    const o_c3 = document.getElementById('o_c3');

    const g_c1 = document.getElementById('g_c1');
    const g_c2 = document.getElementById('g_c2');
    const g_c3 = document.getElementById('g_c3');

    const i_c1 = document.getElementById('i_c1');
    const i_c2 = document.getElementById('i_c2');
    const i_c3 = document.getElementById('i_c3');

    const a_c1 = document.getElementById('a_c1');
    const a_c2 = document.getElementById('a_c2');
    const a_c3 = document.getElementById('a_c3');

    const c_c1 = document.getElementById('c_c1');
    const c_c2 = document.getElementById('c_c2');
    const c_c3 = document.getElementById('c_c3');

    if(timerId != null){
        if(nowBg == image01src){
            div.style.backgroundImage = image02src;
            p_c1.style.visibility = "hidden";
            p_c2.style.visibility = "hidden";
            p_c3.style.visibility = "hidden";
            o_c1.style.visibility = "visible";
            o_c2.style.visibility = "visible";
            o_c3.style.visibility = "visible";
        }else if(nowBg == image02src){
            div.style.backgroundImage = image03src;
            o_c1.style.visibility = "hidden";
            o_c2.style.visibility = "hidden";
            o_c3.style.visibility = "hidden";
            g_c1.style.visibility = "visible";
            g_c2.style.visibility = "visible";
            g_c3.style.visibility = "visible";
    
        }else if(nowBg == image03src){
            div.style.backgroundImage = image04src;
            g_c1.style.visibility = "hidden";
            g_c2.style.visibility = "hidden";
            g_c3.style.visibility = "hidden";
            i_c1.style.visibility = "visible";
            i_c2.style.visibility = "visible";
            i_c3.style.visibility = "visible";
        }else if(nowBg == image04src){
            div.style.backgroundImage = image05src;
            i_c1.style.visibility = "hidden";
            i_c2.style.visibility = "hidden";
            i_c3.style.visibility = "hidden";
            a_c1.style.visibility = "visible";
            a_c2.style.visibility = "visible";
            a_c3.style.visibility = "visible";
        }else if(nowBg == image05src){
            div.style.backgroundImage = image06src;
            a_c1.style.visibility = "hidden";
            a_c2.style.visibility = "hidden";
            a_c3.style.visibility = "hidden";
            c_c1.style.visibility = "visible";
            c_c2.style.visibility = "visible";
            c_c3.style.visibility = "visible";
        }else{
            div.style.backgroundImage = image01src;
            c_c1.style.visibility = "hidden";
            c_c2.style.visibility = "hidden";
            c_c3.style.visibility = "hidden";
            p_c1.style.visibility = "visible";
            p_c2.style.visibility = "visible";
            p_c3.style.visibility = "visible";
        }
    }
}

const p_title = document.getElementById('p_title');
const o_title = document.getElementById('o_title');
const g_title = document.getElementById('g_title');
const i_title = document.getElementById('i_title');
const a_title = document.getElementById('a_title');
const c_title = document.getElementById('c_title');

p_title.addEventListener('mouseover', function(){
    div.style.backgroundImage = image01src;
    p_c1.style.visibility = "visible";
    p_c2.style.visibility = "visible";
    p_c3.style.visibility = "visible";
    o_c1.style.visibility = "hidden";
    o_c2.style.visibility = "hidden";
    o_c3.style.visibility = "hidden";
    g_c1.style.visibility = "hidden";
    g_c2.style.visibility = "hidden";
    g_c3.style.visibility = "hidden";
    i_c1.style.visibility = "hidden";
    i_c2.style.visibility = "hidden";
    i_c3.style.visibility = "hidden";
    a_c1.style.visibility = "hidden";
    a_c2.style.visibility = "hidden";
    a_c3.style.visibility = "hidden";
    c_c1.style.visibility = "hidden";
    c_c2.style.visibility = "hidden";
    c_c3.style.visibility = "hidden";

    clearInterval(timerId);
    timerId = null;
});

o_title.addEventListener('mouseover', function(){
    div.style.backgroundImage = image02src;
    p_c1.style.visibility = "hidden";
    p_c2.style.visibility = "hidden";
    p_c3.style.visibility = "hidden";
    o_c1.style.visibility = "visible";
    o_c2.style.visibility = "visible";
    o_c3.style.visibility = "visible";
    g_c1.style.visibility = "hidden";
    g_c2.style.visibility = "hidden";
    g_c3.style.visibility = "hidden";
    i_c1.style.visibility = "hidden";
    i_c2.style.visibility = "hidden";
    i_c3.style.visibility = "hidden";
    a_c1.style.visibility = "hidden";
    a_c2.style.visibility = "hidden";
    a_c3.style.visibility = "hidden";
    c_c1.style.visibility = "hidden";
    c_c2.style.visibility = "hidden";
    c_c3.style.visibility = "hidden";

    clearInterval(timerId);
    timerId = null;
});

g_title.addEventListener('mouseover', function(){
    div.style.backgroundImage = image03src;
    p_c1.style.visibility = "hidden";
    p_c2.style.visibility = "hidden";
    p_c3.style.visibility = "hidden";
    o_c1.style.visibility = "hidden";
    o_c2.style.visibility = "hidden";
    o_c3.style.visibility = "hidden";
    g_c1.style.visibility = "visible";
    g_c2.style.visibility = "visible";
    g_c3.style.visibility = "visible";
    i_c1.style.visibility = "hidden";
    i_c2.style.visibility = "hidden";
    i_c3.style.visibility = "hidden";
    a_c1.style.visibility = "hidden";
    a_c2.style.visibility = "hidden";
    a_c3.style.visibility = "hidden";
    c_c1.style.visibility = "hidden";
    c_c2.style.visibility = "hidden";
    c_c3.style.visibility = "hidden";

    clearInterval(timerId);
    timerId = null;
});

i_title.addEventListener('mouseover', function(){
    div.style.backgroundImage = image04src;
    p_c1.style.visibility = "hidden";
    p_c2.style.visibility = "hidden";
    p_c3.style.visibility = "hidden";
    o_c1.style.visibility = "hidden";
    o_c2.style.visibility = "hidden";
    o_c3.style.visibility = "hidden";
    g_c1.style.visibility = "hidden";
    g_c2.style.visibility = "hidden";
    g_c3.style.visibility = "hidden";
    i_c1.style.visibility = "visible";
    i_c2.style.visibility = "visible";
    i_c3.style.visibility = "visible";
    a_c1.style.visibility = "hidden";
    a_c2.style.visibility = "hidden";
    a_c3.style.visibility = "hidden";
    c_c1.style.visibility = "hidden";
    c_c2.style.visibility = "hidden";
    c_c3.style.visibility = "hidden";

    clearInterval(timerId);
    timerId = null;
});

a_title.addEventListener('mouseover', function(){
    div.style.backgroundImage = image05src;
    p_c1.style.visibility = "hidden";
    p_c2.style.visibility = "hidden";
    p_c3.style.visibility = "hidden";
    o_c1.style.visibility = "hidden";
    o_c2.style.visibility = "hidden";
    o_c3.style.visibility = "hidden";
    g_c1.style.visibility = "hidden";
    g_c2.style.visibility = "hidden";
    g_c3.style.visibility = "hidden";
    i_c1.style.visibility = "hidden";
    i_c2.style.visibility = "hidden";
    i_c3.style.visibility = "hidden";
    a_c1.style.visibility = "visible";
    a_c2.style.visibility = "visible";
    a_c3.style.visibility = "visible";
    c_c1.style.visibility = "hidden";
    c_c2.style.visibility = "hidden";
    c_c3.style.visibility = "hidden";

    clearInterval(timerId);
    timerId = null;
});

c_title.addEventListener('mouseover', function(){
    div.style.backgroundImage = image06src;
    p_c1.style.visibility = "hidden";
    p_c2.style.visibility = "hidden";
    p_c3.style.visibility = "hidden";
    o_c1.style.visibility = "hidden";
    o_c2.style.visibility = "hidden";
    o_c3.style.visibility = "hidden";
    g_c1.style.visibility = "hidden";
    g_c2.style.visibility = "hidden";
    g_c3.style.visibility = "hidden";
    i_c1.style.visibility = "hidden";
    i_c2.style.visibility = "hidden";
    i_c3.style.visibility = "hidden";
    a_c1.style.visibility = "hidden";
    a_c2.style.visibility = "hidden";
    a_c3.style.visibility = "hidden";
    c_c1.style.visibility = "visible";
    c_c2.style.visibility = "visible";
    c_c3.style.visibility = "visible";

    clearInterval(timerId);
    timerId = null;
});


p_title.addEventListener('mouseout', function(){
    timerId = setInterval(nextImage, 5000);
});

o_title.addEventListener('mouseout', function(){
    timerId = setInterval(nextImage, 5000);
});

g_title.addEventListener('mouseout', function(){
    timerId = setInterval(nextImage, 5000);
});

i_title.addEventListener('mouseout', function(){
    timerId = setInterval(nextImage, 5000);
});

a_title.addEventListener('mouseout', function(){
    timerId = setInterval(nextImage, 5000);
});

c_title.addEventListener('mouseout', function(){
    timerId = setInterval(nextImage, 5000);
});

document.getElementById('top-left').style.backgroundImage = image01src;

const div = document.getElementById('top-left');

let timerId = setInterval(nextImage, 4000);