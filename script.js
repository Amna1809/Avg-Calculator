 function calculateAverage() {
            const grades = [];
            grades.push(parseFloat(document.getElementById('subject1').value));
            grades.push(parseFloat(document.getElementById('subject2').value));
            grades.push(parseFloat(document.getElementById('subject3').value));
            grades.push(parseFloat(document.getElementById('subject4').value));

            let sum = 0;
            for (let i = 0; i < grades.length; i++) {
                sum += grades[i];
            }

            const average = sum / grades.length;
            const passingGrade = 40;
            const name = "Amna Nazir"; // Replace with your name
            const id = "18"; // Replace with your ID

            let resultMessage = `Name: ${name}<br>ID: ${id}<br>Average Grade: ${average.toFixed(2)}<br>`;
            if (average >= passingGrade) {
                resultMessage += "Status: Pass";
            } else {
                resultMessage += "Status: Fail";
            }

            document.getElementById('result').innerHTML = resultMessage;
        }
