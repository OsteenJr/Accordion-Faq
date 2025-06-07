 document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');
            
            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const faqItem = this.parentElement;
                    const faqAnswer = faqItem.querySelector('.faq-answer');
                    const isActive = this.classList.contains('active');
                    
                    // Close all other FAQ items
                    faqQuestions.forEach(otherQuestion => {
                        if (otherQuestion !== this) {
                            otherQuestion.classList.remove('active');
                            otherQuestion.parentElement.querySelector('.faq-answer').classList.remove('active');
                        }
                    });
                    
                    // Toggle current FAQ item
                    if (isActive) {
                        this.classList.remove('active');
                        faqAnswer.classList.remove('active');
                    } else {
                        this.classList.add('active');
                        faqAnswer.classList.add('active');
                    }
                });
            });
        });