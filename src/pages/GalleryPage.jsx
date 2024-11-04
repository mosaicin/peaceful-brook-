import React from "react";
import "./Gallery.css"; // Убедитесь, что CSS правильно подключен

function ChessGallery() {
  // Функция для обработки клика по кнопке
  const viewGameDetails = (gameNumber) => {
    alert(`Просмотр деталей игры №${gameNumber}`);
    // Здесь вы можете добавить логику для перехода на страницу с деталями игры
  };

  return (
    <div className="chess-gallery">
      <h1>Галерея шахмат</h1>
      <div className="gallery-content">
        <div className="gallery-item">
          <img src="path-to-chessboard1.jpg" alt="Chess Game 1" />
          <p>Анализ игры 1</p>
          <button onClick={() => viewGameDetails(1)}>Просмотр игры</button>
        </div>
        <div className="gallery-item">
          <img src="path-to-chessboard2.jpg" alt="Chess Game 2" />
          <p>Анализ игры 2</p>
          <button onClick={() => viewGameDetails(2)}>Просмотр игры</button>
        </div>
        <div className="gallery-item">
          <img src="path-to-chessboard3.jpg" alt="Chess Game 3" />
          <p>Анализ игры 3</p>
          <button onClick={() => viewGameDetails(3)}>Просмотр игры</button>
        </div>
        {/* Добавьте больше игровых элементов по мере необходимости */}
      </div>
    </div>
  );
}

export default ChessGallery;
