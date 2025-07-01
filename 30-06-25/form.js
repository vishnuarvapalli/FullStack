document.title="studentForm";
const form = document.getElementById('studentForm');
    function createInputField(type, id, name, placeholder, required = false) {
      const label = document.createElement('label');
      label.setAttribute('for', id);
      label.textContent = placeholder;

      const input = document.createElement('input');
      input.type = type;
      input.id = id;
      input.name = name;
      input.placeholder = placeholder;
      if(required) input.required = true;

      form.appendChild(label);
      form.appendChild(input);
    }

    const title = document.createElement('h2');
    title.textContent = "Student Registration Form";
    title.style.textAlign = 'center';
    form.appendChild(title);

    createInputField('text', 'fullName', 'fullName', 'Full Name', true);

    createInputField('email', 'email', 'email', 'Email Address', true);

    createInputField('number', 'age', 'age', 'Age', true);
    document.getElementById('age').min = 1;
    document.getElementById('age').max = 120;

    const genderLabel = document.createElement('label');
    genderLabel.textContent = 'Gender';
    form.appendChild(genderLabel);

    const genders = ['Male', 'Female', 'Other'];
    const genderDiv = document.createElement('div');
    genderDiv.classList.add('gender-group');

    genders.forEach(gender => {
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.id = gender.toLowerCase();
      radio.name = 'gender';
      radio.value = gender;
      radio.required = true;

      const radioLabel = document.createElement('label');
      radioLabel.setAttribute('for', gender.toLowerCase());
      radioLabel.textContent = gender;
      radioLabel.style.display = 'inline';
      radioLabel.style.marginRight = '15px';

      genderDiv.appendChild(radio);
      genderDiv.appendChild(radioLabel);
    });

    form.appendChild(genderDiv);

    const courseLabel = document.createElement('label');
    courseLabel.setAttribute('for', 'course');
    courseLabel.textContent = 'Select Course';
    form.appendChild(courseLabel);

    const select = document.createElement('select');
    select.name = 'course';
    select.id = 'course';
    select.required = true;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select your course';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    const courses = ['CSE','MECH','ECE', 'EEE','DS'];
    courses.forEach(course => {
      const option = document.createElement('option');
      option.value = course.toLowerCase().replace(' ', '_');
      option.textContent = course;
      select.appendChild(option);
    });

    form.appendChild(select);
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent ='SUBMIT';
    form.appendChild(submitBtn);