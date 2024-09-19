// Q&A Accordions functionality
const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach((title) => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const isOpen = content.style.display === 'block';
    document
      .querySelectorAll('.accordion-content')
      .forEach((c) => (c.style.display = 'none'));
    content.style.display = isOpen ? 'none' : 'block';
  });
});
