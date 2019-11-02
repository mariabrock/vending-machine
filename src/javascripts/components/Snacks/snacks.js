import './snacks.scss';

const makeASnack = (position) => {
  let domString = '';
  if (position.snack.name) {
    domString += '<div class="card col-4">';
    domString += `<img src="${position.snack.imageUrl}" class="card-img-top" alt="image of ${position.snack.name}">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${name}</h5>`;
    domString += '</div>';
    domString += '</div>';
  } else {

  }
  domString += '<div class="card" style="width: 18rem;">';
  domString += `<img src="${img}" class="card-img-top" alt="image of ${img.name}">`;
  domString += '<div class="card-body">';
  domString += `<h5 class="card-title">${name}</h5>`;
  domString += '</div>';
  domString += '</div>';
};
