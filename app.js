const mainContainer=document.querySelector(".main-container")

const usedEndpoint="https://assignment-api-eta.vercel.app/api/assignments"
async function fetchAss(){
    try {
        const response=await fetch(usedEndpoint)
        const data=await response.json()
       
        const assignments=data.data;
         console.log(assignments)
        renderAssignments(assignments)
    } catch (error) {
    console.log(error)    
    }
}
fetchAss()


function renderAssignments(assignments){
    assignments.slice(4,7).forEach((assignment)=>{
        // const mainHtml=``
        const assignmentHtml=`  <div class="form">

        <h4>${assignment.title}</h4>
        <p>${assignment.discription}</p>
        <a href="https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth">youtube</a>
        <a href="https://desishub-docs.vercel.app/programming-tutorials/nextjs/next-auth">google</a>
        <p>${assignment.topic}</p>
        <p>created:${assignment.createdAt}</p>
        <p>updated:${assignment.updatedAt}</p>
    </div>
    </div>`;

    mainContainer.insertAdjacentHTML("beforeend",assignmentHtml)
    }

    )
}

renderAssignments(assignments)








