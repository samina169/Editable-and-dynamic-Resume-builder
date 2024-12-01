const resumeForm = document.getElementById("resumeForm") as HTMLFormElement | null;
const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement | null;
const editButton = document.getElementById("editResume") as HTMLButtonElement | null;

function generateResume(data:{
    name: string;
    email: string;
    education: string;
    skills: string;
    experience: string;
    description: string
})  {
    return`
    <h2> Generate Resume</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Education:</strong> ${data.education}</p>
     <p><strong>Skills:</strong> ${data.skills}</p>
    <p><strong>Experience:</strong> ${data.experience}</p>
    <p><strong>Descripition:</strong> ${data.description}</p>
    
    `;
}
    if (resumeForm && resumeOutput && editButton) {
     resumeForm.addEventListener('submit', (event) =>{
        event.preventDefault();
        

    const name=(document.getElementById('name') as HTMLInputElement).value;
    const email=(document.getElementById('email') as HTMLInputElement).value;
    const education=(document.getElementById('education') as HTMLInputElement).value;
    const experience=(document.getElementById('experience') as HTMLInputElement).value;
    const skills=(document.getElementById('skills') as HTMLInputElement).value;
    const description=(document.getElementById('description') as HTMLInputElement).value;
     
    resumeOutput.innerHTML = generateResume({ name, email, education, experience, skills, description});
    editButton.style.display = "block"
   
   });
        editButton.addEventListener('click',() =>{
            const name = resumeOutput.querySelector('p:nth-child(2) strong + text')?.textContent || '';
            const email = resumeOutput.querySelector('p:nth-child(3) strong + text')?.textContent || '';
            const education = resumeOutput.querySelector('p:nth-child(4) strong + text')?.textContent || '';
            const skills = resumeOutput.querySelector('p:nth-child(5) strong + text')?.textContent || '';
            const experience = resumeOutput.querySelector('p:nth-child(6) strong + text')?.textContent || '';
            const description = resumeOutput.querySelector('p:nth-child(7) strong + text')?.textContent || '';

            (document.getElementById('name') as HTMLInputElement).value =name;
            (document.getElementById('email') as HTMLInputElement).value =email;
            (document.getElementById('education') as HTMLInputElement).value =education;
            (document.getElementById('experience') as HTMLInputElement).value =experience;
            (document.getElementById('skills') as HTMLInputElement).value =skills;
            (document.getElementById('description') as HTMLInputElement).value =description;

            window.scrollTo({ top:0, behavior: "smooth"});
        });
    }
     

else{
    console.error("From or output div not found in the document");
}
