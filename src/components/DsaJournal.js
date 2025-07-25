import React, { useState, useEffect, useRef } from 'react';

const github_icon = "https://img.icons8.com/m_outlined/512/github.png";

const dsaCategories = [
  { id: "number", category: "Numbers", link: "https://github.com/PammiKumari1234/DSA/tree/main/Numbers" },
  { id: "arrays", category: "Arrays", link: "https://github.com/PammiKumari1234/DSA/tree/main/arrays" },
  { id: "patterns", category: "Patterns", link: "https://github.com/PammiKumari1234/DSA/tree/main/patterns" },
  { id: "strings", category: "Strings", link: "https://github.com/PammiKumari1234/DSA/tree/main/strings" },
  { id: "sorting", category: "Searching/Sorting", link: "https://github.com/PammiKumari1234/DSA/tree/main/searching-sorting" },
  { id: "linked-list", category: "Linked List", link: "https://github.com/PammiKumari1234/DSA/tree/main/linked-list" },
  { id: "stacks-queues", category: "Stacks/Queues", link: "" }
];

const DsaJournal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  const trackRef = useRef(null);

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth;
      if (width < 768) setCardsPerView(1);
      else if (width < 1024) setCardsPerView(2);
      else setCardsPerView(4);
    };
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const nextSlide = () => {
    if (currentIndex + cardsPerView < dsaCategories.length) {
      setCurrentIndex(currentIndex + cardsPerView);
    }
  };

  const prevSlide = () => {
    if (currentIndex - cardsPerView >= 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    }
  };

  return (
    <section className="carousel-section">
      <h1>DSA Journal</h1>
      <p className="DSA-sub">🚀 Leveling Up with DSA</p>
      <p className="DSA-sub-sub">
        This space reflects my hands-on exploration of data structures and problem-solving techniques, organized by topic and tracked through GitHub.
      </p>

      <div className="carousel-wrapper">
        <button
  onClick={prevSlide}
  className={`nav-button left ${currentIndex === 0 ? '' : 'visible'}`}
>
  {'<'}
</button>
        <div className="carousel-container" ref={trackRef}>
          {dsaCategories.slice(currentIndex, currentIndex + cardsPerView).map((category) => (
            <div key={category.id} className="carousel-card">
              <img src={github_icon} alt="GitHub" className="git-img" />
              <h3>{category.category}</h3>
              {category.link ? (
                <a href={category.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              ) : (
                <p>Coming Soon</p>
              )}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="nav-button right">{'>'}</button>
      </div>
    </section>
  );
};

export default DsaJournal;
