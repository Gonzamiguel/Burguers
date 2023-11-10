document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('.reservation_form');
    const nameOutput = document.getElementById('output_name');
    const emailOutput = document.getElementById('output_email');
    const dateOutput = document.getElementById('output_date');
    const timeOutput = document.getElementById('output_time');
    const peopleOutput = document.getElementById('output_people');


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const date = form.elements.date.value;
        const time = form.elements.time.value;
        const people = form.elements.people.value;

        nameOutput.textContent = name;
        emailOutput.textContent = email;
        dateOutput.textContent = date;
        timeOutput.textContent = time;
        peopleOutput.textContent = people;
    });
});