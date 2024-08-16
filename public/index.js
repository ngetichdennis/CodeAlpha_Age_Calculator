function calculateAge() {
    // Access elements by class and retrieve their first instance
    const todayElement = document.getElementsByClassName('current_date')[0];
    const dobElement = document.getElementsByClassName('dob')[0];
    const resultElement = document.getElementsByClassName('age_output')[0];

    // Use querySelector to target the input inside the div
    const today = todayElement.querySelector('input').value;
    const dob = dobElement.querySelector('input').value;

    if (!dob) {
        resultElement.innerText = 'Please select a date of birth';
        return;
    }

    const dobDate = new Date(dob);
    const todayDate = new Date(today);
    let age = todayDate.getFullYear() - dobDate.getFullYear();
    const monthDiff = todayDate.getMonth() - dobDate.getMonth();
    const dayDiff = todayDate.getDate() - dobDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    resultElement.innerText = `You are ${age} years old.`;
}
