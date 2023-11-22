updateCartQuantity();
document.querySelectorAll('.increase').forEach((button) => {
  button.addEventListener('click', () => {
    const paperID = button.dataset.counterId;
    let data;
    data = document.getElementById(paperID).value;
    data = Number(data) + 1;
    document.getElementById(paperID).value = data;
  });
});
document.querySelectorAll('.decrease').forEach((button) => {
  button.addEventListener('click', () => {
    const paperID = button.dataset.counterId;
    let data;
    data = document.getElementById(paperID).value;
    data = Number(data) - 1;
    document.getElementById(paperID).value = data;
  });
});
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const paperId = button.dataset.paperId;
    let matchingItem;
    cart.forEach((item) => {
      if (paperId === item.paperId) {
        matchingItem = item;
      }
    });
    counterId = paperId + '-counter';
    data = document.getElementById(counterId).value;
    if (matchingItem) {
      if(Number(data)>0) {
      matchingItem.quantity += Number(data);}
    } else {
      if(Number(data)>0){
      cart.push({
        paperId: paperId,
        quantity: Number(data),
      })};
    }
    saveToStorage();
    updateCartQuantity();
    document.getElementById(counterId).value = 0;
  });
});
function updateCartQuantity() {
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += 1;
    });
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  }
