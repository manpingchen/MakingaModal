modal = document.querySelector('.modal');
modalTitle = document.querySelector('.modal-title');
modalContent = document.querySelector('.modal-content');

function openModal(modal_title, modal_content) {
    if(this.modalCounter === undefined){
        modalCounter = 0;
    }
    modalTitle.innerHTML = modal_title + "<button type='button' onclick='closeModal()'>X</button> ";
    modalContent.innerHTML = modal_content; 
    modal.style.display = 'block';

    if( modal.display == 'block'){
        closeModal();
    } else {
        this.modalCounter ++;
        modal.style.display = 'block';
        document.querySelector('.modal-count').innerHTML = this.modalCounter;
    }
}

function closeModal() {
    modal.style.display = 'none';
    modalTitle.innerHTML = '';
    modalContent.innerHTML = ''; 
}