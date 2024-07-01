 
// Generate job list dynamically  
const jobList = [
    { title: "Engenheiro de Software", company: "Google", location: "Nova York" },
    { title: "Cientista de Dados", company: "Amazon", location: "Seattle" },
    { title: "Desenvolvedor Full Stack", company: "Microsoft", location: "Redmond" },
    // Adicione mais empregos à lista conforme necessário
]; 
  
const jobListHTML = jobList.map((job) => {
    return `<li>
        <h3>${job.title}</h3>
        <p>${job.company} - ${job.location}</p>
    </li>`;
}).join('');
  
document.getElementById('job-list').innerHTML = jobListHTML;  
  
const companyList = [
    { name: "Google", description: "Gigante da tecnologia" },
    { name: "Amazon", description: "Líder em comércio eletrônico" },
    { name: "Microsoft", description: "Pioneira em software" },
    // Adicione mais empresas à lista conforme necessário
]; 
  
const companyListHTML = companyList.map((company) => {  
    return `<li>  
        <h3>${company.name}</h3>  
        <p>${company.description}</p>  
    </li>`;  
}).join('');  
  
document.getElementById('company-list').innerHTML = companyListHTML;  
