// SIDEBAR

const menuItems = document.querySelectorAll('.menu-item');


//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');

const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// THEME
const theme  = document.querySelector('#theme');

// THEME MODAL
const themeModal = document.querySelector('.customize-theme');

//THEME MODAL CROSS BUTTON
const cross = document.querySelector('.cross-icon');

// FONT SIZE
const fontSize = document.querySelectorAll('.choose-size span');

// ROOT 
var root = document.querySelector(':root');



// Remove active class from all menu item

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        }else{
            document.querySelector('.notifications-popup').style.display = 'block';

            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// ==========MESSAGES================

// Searches Chats

const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();

        console.log("hlo");

        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }else{
            user.style.display = 'none';
        }
    })
}
// Search chat
messageSearch.addEventListener('keyup',searchMessage);

// Highlight messages card when messages menu item is clicked


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--col-primary)';

    messagesNotification.querySelector('.notification-count').style.display = 'none';

    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    },2000);
})

// THEME DISPLAY CUSTOMIZATION

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

theme.addEventListener('click', openThemeModal);

const crossThemeModal = () => {
    themeModal.style.display = 'none';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
themeModal.addEventListener('click', closeThemeModal);
cross.addEventListener('click', crossThemeModal);

// ===========================FONTS===========================


// remove active class from spans or font six=ze selector

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size => {
    

   size.addEventListener('click', () => {

    let fontSize;
    removeSizeSelector();
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '5.4rem');

    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('--sticky-top-left', '5.4rem');
        root.style.setProperty('--sticky-top-right', '-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('--sticky-top-left', '-2rem');
        root.style.setProperty('--sticky-top-right', '-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('--sticky-top-left', '-5rem');
        root.style.setProperty('--sticky-top-right', '-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('--sticky-top-left', '-12rem');
        root.style.setProperty('--sticky-top-right', '-35rem');
    }

    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
   })

})