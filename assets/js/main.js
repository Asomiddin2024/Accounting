addEventListener('DOMContentLoaded',() =>{
    let buttons=document.querySelectorAll('.services__taps--button button');
    let buttonResult=document.querySelectorAll('.services__taps--result');
    buttonResult[0].style.display='flex';
    buttons[0].classList.add('active');
    buttons.forEach((button) =>{
        button.addEventListener('click',(e) =>{
            e.preventDefault();
            buttons.forEach((btn) =>{btn.classList.remove('active')});
            button.classList.add('active');
            buttonResult.forEach((result) =>{
                if(result.getAttribute('button-index')==button.getAttribute('tap-index')){
                    result.style.display='flex';
                }else{
                    result.style.display='none';
                }
            })
        })
    })
    
    let buttonOnOff=document.querySelector('.services__button a');
    buttonResult.forEach((result) =>{
        let buttonValue=result.querySelectorAll('.borderr');
        buttonValue.forEach((card,index) =>{
            if(index<6){
                card.style.display='block'
            }else{
                card.style.display='none';
            }
        })
        buttonOnOff.addEventListener('click', (e) =>{
            e.preventDefault()
            if(result.style.display=='flex'){
                let buttonValue1=result.querySelectorAll('.borderr');
                buttonValue1.forEach((card,index) =>{
                    card.style.display='block'
                })
            }
        })
    })

    $(document).ready(function(){
        $('.popup-youtube').magnificPopup({
          type:"iframe",
        })
    })

    var swiper = new Swiper(".achievements__slider .swiper", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 24,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-right",
          prevEl: ".swiper-left",
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
            },
            576:{
                slidesPerView: 3,
                spaceBetween: 20,
                slidesPerGroup: 1,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
            }
        },
    });
    $('.open-img').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        image: {
            verticalFit: true,
            titleSrc: 'title'
        }
    });
    let modalButton=document.querySelector('#modal-active');
    let modal=document.querySelector('.modal-container');
    let wrapper=document.querySelector('.wrapper')
    modalButton.addEventListener('click' ,(e) =>{
        e.preventDefault();
        modal.classList.add('active');
        wrapper.style.height='100vh'
    })
    document.querySelector('.modal__close').addEventListener('click',(e)=>{
        e.preventDefault();
        modal.classList.remove('active');
        wrapper.style.height='100%'
    })

    let swiperItem=document.querySelector('.videos_commentarys__start')
    let wrapperItem=document.createElement('div')
    wrapperItem.classList.add('swiper-wrapper')
    let swiperSlides=swiperItem.querySelectorAll('.slide');
    let swiperPagination=document.createElement('div')
    swiperPagination.classList.add('swiper-pagination')
    if(window.innerWidth<=576){
        swiperItem.classList.add('swiper');
        swiperItem.classList.remove('row')
        swiperItem.appendChild(wrapperItem)
        swiperItem.appendChild(swiperPagination)
        swiperSlides.forEach((slide) =>{
            slide.classList.add('swiper-slide');
            slide.classList.remove('col-4')
            wrapperItem.appendChild(slide)
        })
    }
    var swiperVedio = new Swiper(".videos_commentarys__start.swiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });

    let swiperBank = document.querySelector('.banks__start');
    let wrapperBank = document.createElement('div');
    wrapperBank.classList.add('swiper-wrapper');

    let bankSlides = swiperBank.querySelectorAll('a');

    let bankPagination = document.createElement('div');
    bankPagination.classList.add('swiper-pagination');

    if (window.innerWidth <= 576) {
        swiperBank.classList.add('swiper');

        swiperBank.appendChild(wrapperBank);
        swiperBank.appendChild(bankPagination);

        bankSlides.forEach((slide) => {
            slide.classList.add('swiper-slide');
            wrapperBank.appendChild(slide);
        });

    }

    var swiperBankStaet = new Swiper(".banks__start.swiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });

    let newsSwiper = document.querySelector('.news__start');
    let wrapperNews = document.createElement('div');
    wrapperNews.classList.add('swiper-wrapper');

    let newsSlides = newsSwiper.querySelectorAll('.slide');

    let newsPagination = document.createElement('div');
    newsPagination.classList.add('swiper-pagination');

    if (window.innerWidth <= 576) {
        newsSwiper.classList.add('swiper');
        newsSwiper.classList.remove('row');

        newsSwiper.appendChild(wrapperNews);
        newsSwiper.appendChild(newsPagination);

        newsSlides.forEach((slide) => {
            slide.classList.add('swiper-slide');
            slide.classList.remove('col-4')
            wrapperNews.appendChild(slide);
        });
    }
    var swiperNews = new Swiper(".news__start.swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        // loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
    });
    let menu = document.querySelector('.addition .menu')
    let menuResult = document.querySelector('.menu__container')
    menu.addEventListener('click',() =>{
        if(menu.classList.contains('active')){
            menu.classList.remove('active')
            menuResult.style.display='none'
            wrapper.style.height='100%'
        }else{
            menu.classList.add('active')
            menuResult.style.display='block'
            wrapper.style.height='100vh'
        }
    })

    $(document).ready(function() {
        $('select').niceSelect();
    });

    document.querySelectorAll('.open-img').forEach((open) =>{open.addEventListener('click'),(e) =>{e.preventDefault}})
    
})