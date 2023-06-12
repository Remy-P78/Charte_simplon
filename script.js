let student = ['Rémy', 'Mélina', 'Thomas', 'Samir', 'Bayram', 'Alexandre', 'Lydie', 'Garry', 'Fabrice', 'Maxime', 'Nisrine', 'Quentin', 'Samra', 'Jérôme', 'Nicolas', 'Loïc le jeune', "Loïc l'ancien", 'Guillaume'];

let tirage = document.getElementById('tirage');

tirage.addEventListener('click', ()=>{
        let picked = Math.floor(Math.random()*student.length);
        tirage.innerHTML=student[picked];
        setTimeout(()=>{
                tirage.innerHTML="Random apprenant";}, 3000);
});
