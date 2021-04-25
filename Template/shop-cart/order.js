const tabs = document.querySelectorAll('.tab-item');
const panels = document.querySelectorAll('.tab-pane');
const line = document.querySelector('.line');

//Set initial line width by the first elements' values of tabs
line.style.width = tabs[0].offsetWidth + "px";
line.style.left = tabs[0].offsetLeft + "px";


tabs.forEach ( (tab, index) => {
    tab.addEventListener('click', () =>{        
       
        //Remove active css class at any element in tabs
        tabs.forEach ( (tab) => {            
            if (tab.classList.contains('active')){
                tab.classList.remove('active');                
            }
        })

        //Remove active css class at any element in panels
        panels.forEach ( (panel) => {
            if (panel.classList.contains('active')){
                panel.classList.remove('active')
            }
        })

        //Add active css classes in the clicked tab and panel
        tab.classList.add('active');
        panels[index].classList.add('active');
        line.style.width = tab.offsetWidth + 'px';
        line.style.left = tab.offsetLeft + 'px';
        
    })
})

