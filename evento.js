const campoCPF = document.querySelector('#cpf')
campoCPF.addEventListener('focusin',(event) => {
  campoCPF.value = valorDoCPF.replace(/[.-]/g, "")
})

campoCPF.addEventListener('focusout', () => {
  valorDoCPF = event.target.value;
  campoCPF.value= valorDoCPF.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")
})
