export const createCard = ({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) => {
  return `<li class='images-item'>
  <div class='card-wrapper'>
  
        <a class='card-link' href=${largeImageURL}>
          <img src=${webformatURL}>
          </a>
        </div>
        <div class='card-content'>
          <ul class='stats-list'>
            <li class='stats-item'><div><span>Likes</span><span>${likes}</span></div></li>
            <li class='stats-item'><div><span>Views</span><span>${views}</span></div></li>
            <li class='stats-item'><div><span>Comments</span><span>${comments}</span></div></li>
            <li class='stats-item'><div><span>Downloads</span><span>${downloads}</span></div></li>
          </ul>
        </div>
      
  </li>`
};

export const appendCards = (ulElem, cards) => {
  ulElem.insertAdjacentHTML('afterbegin', cards);
}

// export default {createCard, appendCards};
