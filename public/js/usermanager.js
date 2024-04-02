function edit(id) {
    const element = document.getElementById(id);
    const active = element.getAttribute('data-active');
    // set value to modal elements
    document.getElementById('_id').value = id;
    document.getElementById('edit-username').value = element.getAttribute('data-username');
    document.getElementById('edit-usertype').value = element.getAttribute('data-usertype');
    document.getElementById('edit-active').value = active;
    document.getElementById('edit-active').checked = (active == "true") ? true : false;
    const modal = new bootstrap.Modal(document.getElementById('editUser'));
    modal.show();
}

function setValueEditActive() {
    const element = document.getElementById('edit-active');
    if(element.checked == true) {
        element.value = "true";
    }
    else {
        element.value = "false";
    }
}