import React from 'react';
import moduleName from '../assets/img/2.png';

function CourseCard({ onClickAccept, data }) {
  //   const { id, name, isRecommended, optionContent, cost } = element;
  console.log(data);
  console.log(data.id);
  return (
    <div class="courses__card">
      <div class={`card-option card-option_${data.name.toLowerCase()}`}>
        <p class="card-option__title">
          {`Opzione #${data.id}`}
          <br /> {`"${data.name}"`}
        </p>
        {data.isRecommended && <div class="card-option__tag">Consiglio</div>}
      </div>
      <div class="card-content" style={{ backgroundImage: `url(${data.img})` }}>
        <div class="card-content__text">{data.optionContent()}</div>
        <div class="cost-block">
          <div class="cost-block__value">{data.cost} €</div>
          <button class="button button__bordered" onclick={onClickAccept}>
            Acquista modulo
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
