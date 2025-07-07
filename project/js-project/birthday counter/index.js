  let countdownInterval;

        function startCountdown() {
            clearInterval(countdownInterval);
            
            let birthdayInput = document.getElementById('birthday').value;
            
            if (!birthdayInput) {
                alert('Please enter your birthday');
                return;
            }
            
            let [year, month, day] = birthdayInput.split('-');
            updateCountdown(parseInt(month), parseInt(day));
            
            countdownInterval = setInterval(() => {
                updateCountdown(parseInt(month), parseInt(day));
            }, 1000);
        }

        function updateCountdown(birthMonth, birthDay) {
            let now = new Date();
            let currentYear = now.getFullYear();
            
            let nextBirthday = new Date(currentYear, birthMonth - 1, birthDay);
            
            if (now > nextBirthday) {
                nextBirthday = new Date(currentYear + 1, birthMonth - 1, birthDay);
            }
            
            let diff = nextBirthday - now;
            
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = Math.floor(hours).toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }