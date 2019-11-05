import './stockCard.scss';

const makeASnack = (snack) => {
  const domString = `
  <div class="col-3 card snack-card">
  <div class="card-body">
    <h5 class="card-title">${snack.name}</h5>
    <p class="card-text">${snack.price}</p>
    <p class="card-text">${snack.position.position}</p>
  </div>
</div>
`;
  return domString;
};

export default { makeASnack };
