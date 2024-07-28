import createProject from './createProject.js';
import displayProj from './displayProj.js';

export default function newProjBtnFunc(allProjsArr, allTodoArr) {
    const newProjBtn = document.querySelector('#newProj')
    const projForm = document.querySelector('#projForm');
    const projDialog = document.querySelector('#projDialog');
    const projBtn = document.querySelector('#projBtn');
    const addProjBtn = document.querySelector('#addProj');
    newProjBtn.addEventListener('click', () => {
        projDialog.showModal();
    })
    projBtn.addEventListener('click', () => {
        projDialog.close();
        projForm.reset();
    })
    addProjBtn.addEventListener('click', () => {
        event.preventDefault();
        createProject(document.getElementById('title').value, allProjsArr);
        displayProj(allProjsArr, allTodoArr);
        projDialog.close();
        projForm.reset();
    })
}