function reviewspoiler() {
    var x = document.getElementById('review');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
function reviewspoiler2() {
    var x = document.getElementById('review2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// function positivereview() {
//     var b = document.getElementById('positive-review');
//     if (b.style.height === '347px') {
//         b.style.height = '654px';
//     } else {
//         b.style.height = '347px';
//     }
//     var c = document.getElementById('positive-review');
//     if (c.style.background === 'url(img/not_autorized/positive-review.png) no-repeat') {
//         c.style.background = 'url(img/not_autorized/negative-review-ext.png)) no-repeat';
//     } else {
//         c.style.background = 'url(img/not_autorized/positive-review.png) no-repeat';
//     }
// }

// function positivereview() {
//     var c = document.getElementById('positive-review');
//     if (c.style.background === "url(img/not_autorized/positive-review.png)") {
//         c.style.background = "url(img/not_autorized/negative-review-ext.png)";
//     } else {
//         c.style.background = "url(img/not_autorized/positive-review.png)";
//     }
// }
// height: 347px;
// height: 654px;

function dnsFunction() {
    document.getElementById('otherReview').style.background = "url('img/not_autorized/dns-review.png') no-repeat";
    document.getElementById('otherReview').style.height = '2822px';
}

function yandexFunction() {
    document.getElementById('otherReview').style.background = "url('img/not_autorized/yandex-review.png') no-repeat";
    document.getElementById('otherReview').style.height = '2823px';
}