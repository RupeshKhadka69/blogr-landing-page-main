const links = document.querySelectorAll('nav li > a');
const dropdowns = document.querySelectorAll('.dropdown');
links.forEach(link => {
    link.addEventListener('click', (event) => {
        // hide all dropdowns except the one being clicked
        const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      if (dropdown !== link.nextElementSibling) {
        dropdown.style.display = 'none';
    }
 
});

const img = link.lastChild;
    
// toggle the dropdown for the clicked link
const dropdown = link.nextElementSibling;
    if (dropdown) {
      event.preventDefault();
      if(dropdown.style.display != 'none'){
          dropdown.style.display = 'none'
        }
        else {
            dropdown.style.display =  'block'

      }
    //   dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
  });
});

  
  
  
  
  