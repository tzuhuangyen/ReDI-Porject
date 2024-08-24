//Mini-Projects to Reinforce Learning
//Interactive Quiz Application:

const questionContainer = document.getElementById('question-container');
const feedback = document.getElementById('feedback');
const feedbackMessage = document.getElementById('feedback-message');

const correctAnswer = 'Paris'; // Example answer for demonstration

document.querySelectorAll('.option').forEach((button) => {
  button.addEventListener('click', function () {
    const userAnswer = this.dataset.answer;
    if (userAnswer === correctAnswer) {
      feedbackMessage.textContent = 'Correct!';
    } else {
      feedbackMessage.textContent = 'Incorrect. Try again!';
    }
    feedback.classList.remove('hidden');
  });
});
