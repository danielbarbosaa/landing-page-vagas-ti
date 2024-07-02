 
// Gerando lista de empregos 
const jobList = [
    { title: "Engenheiro de Software", company: "Google", location: "Nova York" },
    { title: "Cientista de Dados", company: "Amazon", location: "Seattle" },
    { title: "Desenvolvedor Full Stack", company: "Microsoft", location: "Redmond" },
    // Adicione mais empregos...
]; 
  
const jobListHTML = jobList.map((job) => {
    return `<li>
        <h3>${job.title}</h3>
        <p>${job.company} - ${job.location}</p>
    </li>`;
}).join('');
  
document.getElementById('job-list').innerHTML = jobListHTML;  

// Gerando lista de empresas
const companyList = [
    { name: "Google", description: "Gigante da tecnologia" },
    { name: "Amazon", description: "Líder em comércio eletrônico" },
    { name: "Microsoft", description: "Pioneira em software" },
    // Adicione mais empresas...
]; 
  
const companyListHTML = companyList.map((company) => {  
    return `<li>  
        <h3>${company.name}</h3>  
        <p>${company.description}</p>  
    </li>`;  
}).join('');  
  
document.getElementById('company-list').innerHTML = companyListHTML;  

const applyBtn = document.getElementById('apply-btn');
const applicationForm = document.getElementById('application-form');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

applyBtn.addEventListener('click', () => {
    applicationForm.style.display = 'block';
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(applicationForm);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/submit-application', true);
    xhr.onload = function() {
        if(xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            if (response.stage === 'cv_review') {
                statusMessage.textContent = 'Your CV is being reviewed';
            } else if (response.stage === 'cv_selected') {
                statusMessage.textContent = 'Your CV has been selected';
            } else if (response.stage === 'ecruiter_checking') {
                statusMessage.textContent = 'A recruiter is checking your application';
            }
        }
    };
    xhr.send(formData);
});
