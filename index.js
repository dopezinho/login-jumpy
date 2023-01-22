function message() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var cpf = document.getElementById('cpf');
    var password = document.getElementById('password');

    const sucesso = document.getElementById('sucesso');
    const nfoi = document.getElementById('nfoi')

    if(name.value === '' || email.value === '' || phone.value === '' || cpf.value === '' || password.value === '') {
        nfoi.style.display = 'block';
    }
    else {
        setTimeout(() => {
            name.value = '';
            email.value = '';
            phone.value = '';
            cpf.value = '';
            password.value = '';
        }, 2000);
        sucesso.style.display = 'block';
    }

    setTimeout(() => {
        nfoi.style.display = 'none';
        sucesso.style.display = 'none';
    }, 4000);
}