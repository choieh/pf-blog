today();
btnLike();
urlCopy();
showComment();
commentCount();

//날짜
function today() {
    let date = new Date();
    let inp = document.querySelectorAll('time');
    
    for(let i=0; i<inp.length; i++) {
        let today = date.toLocaleString();
        inp[i].innerHTML = today;
        inp[i].setAttribute('datetime',today);
    }
}

// social
function btnLike() {
    let btnLike = document.querySelector('#btn-like');
    let num = document.querySelector('#btn-like .social__item-num');
    let idx = 0;

    btnLike.addEventListener('click', function () {
        idx += 1;
        num.innerHTML = idx;
    });
}

//url 복사
function urlCopy() {
    let url = window.location.href;
    let btnCopy = document.querySelector('#btn-copy');

    btnCopy.addEventListener('click', function () { 
        navigator.clipboard.writeText(url).then(res => {alert('주소가 복사 되었습니다.')});
    });
}

//댓글 보이기
function showComment() {
    let btn = document.querySelector('#btn-comment');
    let comment = document.querySelector('.comment');

    btn.addEventListener('click', function () {
        comment.classList.toggle('on');
    });
}

//댓글 갯수
function commentCount() {
    let list = document.querySelector('.comment__list');
    let inp = document.querySelectorAll('.comment-count');
    let count = list.childElementCount;

    for(let i=0; i<inp.length; i++) {
        inp[i].innerHTML = count;
    }
}