const channel = document.querySelectorAll('.channel__text'),
reco = document.querySelectorAll('.recommand__item .item__title'),
popular = document.querySelectorAll('.popular .item__text');

channel.forEach((i) => {i.classList.add('text-ellipsis')});
reco.forEach((i) => {i.classList.add('text-ellipsis')});
popular.forEach((i) => {i.classList.add('text-ellipsis')});
