const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls'); //this is the parent
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function pageTransition () {
    //button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }
    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            //hide other sections
            sections.forEach((sections)=>{
                sections.classList.remove('active')
            })
            
            const element = document.getElementById(id);
            element.classList.add('active');s
            //whatever id comes from the dataset is going to be 
            //inside the element variable = saving the id. 
        }
    })
}

pageTransition()
//this is just to show i have made a change
//for new lines of data we see a green liune in rhe gutter, for changes lines of
//previous code it is a yellow line and for deleted code its a red arrow.