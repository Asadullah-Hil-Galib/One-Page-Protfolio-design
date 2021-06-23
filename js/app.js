/* -------- MAIN FOR MAIN SECTION RSPONSIVE DESIGNE -------- */
var rightSideBar = document.querySelector('.right_side')
var leftSidebarSection = document.querySelector('.left_side')
var rightSideMenu = document.querySelector('.right_side_menu')
var mainContent = document.querySelector('.main_content')
var mainContentHeader = document.querySelector('.main_content_header')
var mainContentRightHeader =document.querySelector('.main_content_right_header')

    rightSideBar.style.minWidth = '90px';
    rightSideMenu.style.display = 'none';
    mainContent.style.paddingRight = '90px';
    mainContent.style.paddingLeft = '270px';
    mainContent.style.marginLeft = '0px';

    // leftSidebarSection.style.opacity = '0';
    // leftSidebarSection.style.visibility = 'hidden';
    mainContentHeader.style.transition = '.8s';
    leftSidebarSection.style.transition = '.8s';
    mainContentHeader.style.transform = 'translateX(0px)';
    rightSideBar.style.transition = '0.4s'


function right_side_toggle() {
    if (rightSideBar.style.minWidth == '90px' ) {
        rightSideBar.style.minWidth = '230px'
        rightSideMenu.style.display = 'block'
        mainContent.style.paddingRight = '230px'
        // mainContent.style.paddingLeft = '130px'
        mainContent.style.marginLeft = '-130px'
        // mainContentHeader.style.width = '64%'
    }

    else {
        rightSideBar.style.minWidth = '90px';
        rightSideMenu.style.display = 'none';
        mainContent.style.paddingRight = '90px';
        mainContent.style.paddingLeft = '270px';
        // mainContent.style.marginLeft = '-130px';
        mainContent.style.marginLeft = '0px';
        rightSideBar.style.display == 'none'
    }
}



function left_sidebar_toggler() {

   if( leftSidebarSection.style.visibility == 'hidden'  ) {
        leftSidebarSection.style.opacity = '1';
        leftSidebarSection.style.visibility = 'visible' ;
        mainContentHeader.style.transform = 'translateX(270px)';
   }

    else {
       leftSidebarSection.style.opacity = '0'
       leftSidebarSection.style.visibility = 'hidden' 
       mainContentHeader.style.transform = 'translateX(0px)'
    }
}

rightSideBar.style.display == 'none'
mainContentRightHeader.style.right = '20px'
mainContentRightHeader .style.transition = '.5s'


function right_sidbar_toggler() {
    if (rightSideBar.style.display == 'none') {
        rightSideBar.style.display = 'block'
        mainContentRightHeader.style.right = '110px'
    } 
    else {
        rightSideBar.style.display = 'none'
       mainContentRightHeader.style.right = '20px'
    }
}


/* ------PROTFOLIO SECTION DESIGNE-------*/

const filterContainer = document.querySelector('.protfolio_filter'),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length;
      protfolioItems = document.querySelectorAll('.protfolio_item'),
      totalProtfolioItem = protfolioItems.length;


      for(let i = 0; i < totalFilterBtn; i++){

          filterBtns[i].addEventListener('click', function() {
              filterContainer.querySelector('.protfolio_active').classList.remove('protfolio_active')
              this.classList.add('protfolio_active');


            //   ITEM SELECTOR IN PROTFOLIO WITH JAVAASCRIPT
            const filterValue = this.getAttribute('data-filter');
            for (let j = 0; j < totalProtfolioItem; j++) {

                if(filterValue === protfolioItems[j].getAttribute('data-category')) {
                    protfolioItems[j].classList.remove('hide')
                    protfolioItems[j].classList.add('show')
                }
                else {
                    protfolioItems[j].classList.remove('show')
                    protfolioItems[j].classList.add('hide')
                }


                if(filterValue === 'all_categories') {
                    protfolioItems[j].classList.remove('hide')
                    protfolioItems[j].classList.add('show')
                }
            }
          })
      }

// PROTFOLIO LIGHT BOX SECTION JS COSTOMIZE
const lightbox = document.querySelector('.lightbox'),
      lightboxImg = lightbox.querySelector('.lightbox_images'),
      lightboxClose = lightbox.querySelector('.lightbox_close'),
      lightboxText = lightbox.querySelector('.caption_text'),
      lightboxCounter = lightbox.querySelector('.caption_counter');
      let itemIndex = 0;


  for (let k = 0; k < totalProtfolioItem; k++) {
      protfolioItems[k].addEventListener('click', function() {
        itemIndex = k;
        changeItem();
        toggleLightbox();
      })
  }


  function nextItem() {
      if(itemIndex == totalProtfolioItem - 1) {
          itemIndex = 0;
      }
      else {
          itemIndex++;
      }
    //   console.log(itemIndex)
    changeItem();
  }


  function prevItem() {
    if(itemIndex == 0) {
        itemIndex = totalProtfolioItem - 1;
    }
    else {
        itemIndex--;
    }
    // console.log(itemIndex)
    changeItem();
}
 
function toggleLightbox() {
    lightbox.classList.toggle('open');
}


function changeItem() {
    imgSrc = protfolioItems[itemIndex].querySelector('.protfolio_img img').getAttribute('src');
    lightboxImg.src = imgSrc;
    // console.log(imgSrc)
    lightboxText.innerHTML = protfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + ' of ' + totalProtfolioItem;
}


// LIGHTBOX CLOSE
lightbox.addEventListener('click', function(event) {
     if(event.target === lightboxClose || event.target === lightbox) {
         toggleLightbox();
     }
})

// Aside Navbar
const nav = document.querySelector('nav'),
            navList = nav.querySelectorAll('li'),
            totalNaveList = navList.length;

            for (let i = 0; i < totalNaveList; i++) {
                const a = navList[i].querySelector('a')
                // console.log(a)
                a.addEventListener('click', function() {
                    for(let j = 0; j < totalNaveList; j++) {
                        navList[j].querySelector('a').classList.remove('active')
                    }
                    this.classList.add('active')
                })
            }

function showSection (element) {
    console.log(element)
}


// TESTIMONIAL SECTION CUSTOM JS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



// COLOR CHANGE
