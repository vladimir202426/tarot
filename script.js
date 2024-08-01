document.getElementById('tarotForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    if (birthdate) {
        const tarotNumber = calculateTarotNumber(birthdate);
        displayTarotResult(tarotNumber);
    }
});

function calculateTarotNumber(birthdate) {
    const date = new Date(birthdate);
    const day = date.getDate().toString();
    const month = (date.getMonth() + 1).toString(); // Los meses son de 0-11
    const year = date.getFullYear().toString();

    // Sumar los dígitos de día, mes y año individualmente
    let sum = [...day, ...month, ...year].reduce((acc, num) => acc + parseInt(num), 0);
    
    // Reducir la suma hasta que sea menor o igual a 22
    while (sum > 22) {
        sum = sum.toString().split('').reduce((acc, num) => acc + parseInt(num), 0);
    }
    
    return sum;
}

function displayTarotResult(tarotNumber) {
    const tarotDescriptions = {
        1: "El Mago: Representa habilidad, destreza y poder de manifestación.\n\nConsejo: Confía en tus habilidades y toma acción para alcanzar tus metas. Tienes el poder para crear lo que deseas en tu vida.",
        2: "La Papisa (La Sacerdotisa): Simboliza sabiduría, intuición y conocimiento secreto.\n\nConsejo: Escucha tu intuición y busca respuestas dentro de ti. No te apresures, la paciencia es clave.",
        3: "La Emperatriz: Representa creatividad, fertilidad y abundancia.\n\nConsejo: Aprovecha tu creatividad y nutre tus proyectos. Confía en el proceso de crecimiento y desarrollo.",
        4: "El Emperador: Simboliza estructura, autoridad y control.\n\nConsejo: Establece límites claros y mantén el control en tus asuntos. La disciplina y el orden te llevarán al éxito.",
        5: "El Sumo Sacerdote (El Papa): Representa la tradición, la espiritualidad y el conocimiento formal.\n\nConsejo: Sigue las reglas y busca la guía de mentores o autoridades. La sabiduría tradicional puede ser muy útil.",
        6: "Los Enamorados: Simboliza el amor, la unión y las decisiones.\n\nConsejo: Toma decisiones desde el corazón y busca el equilibrio en tus relaciones. La armonía es esencial.",
        7: "El Carro: Representa la victoria, la fuerza de voluntad y el avance.\n\nConsejo: Mantén tu enfoque y determinación para superar los obstáculos. La perseverancia te llevará lejos.",
        8: "La Justicia: Simboliza la verdad, el equilibrio y la justicia.\n\nConsejo: Busca la verdad y actúa con equidad. Asegúrate de mantener un equilibrio en todas tus acciones.",
        9: "El Ermitaño: Representa la introspección, la sabiduría y la soledad.\n\nConsejo: Tómate un tiempo para reflexionar y buscar respuestas dentro de ti. La soledad puede ser una oportunidad para el crecimiento personal.",
        10: "La Rueda de la Fortuna: Simboliza el cambio, el destino y el ciclo de la vida.\n\nConsejo: Acepta los cambios y confía en que el destino te llevará a donde necesitas estar. La vida está llena de altibajos, fluye con ellos.",
        11: "La Fuerza: Representa el coraje, la compasión y la fortaleza interna.\n\nConsejo: Confía en tu fuerza interior y enfrenta los desafíos con coraje y compasión. La verdadera fuerza viene del corazón.",
        12: "El Colgado: Simboliza el sacrificio, la pausa y la perspectiva.\n\nConsejo: Acepta la necesidad de hacer sacrificios y cambia tu perspectiva para ver las cosas de una manera nueva. La paciencia es clave.",
        13: "La Muerte: Representa la transformación, el cambio y el renacimiento.\n\nConsejo: Acepta los finales como una oportunidad para nuevos comienzos. La transformación es necesaria para el crecimiento.",
        14: "La Templanza: Simboliza la moderación, el equilibrio y la armonía.\n\nConsejo: Busca el equilibrio en todas las áreas de tu vida y practica la moderación. La paciencia y la calma son esenciales.",
        15: "El Diablo: Representa la tentación, el materialismo y las ataduras.\n\nConsejo: Sé consciente de las tentaciones y ataduras que te limitan. Trabaja para liberarte de ellas y encontrar tu verdadera libertad.",
        16: "La Torre: Simboliza la destrucción, la revelación y el cambio abrupto.\n\nConsejo: Acepta los cambios inesperados como una oportunidad para reconstruir y crecer. La verdad puede ser dolorosa, pero necesaria.",
        17: "La Estrella: Representa la esperanza, la inspiración y la espiritualidad.\n\nConsejo: Mantén la esperanza y sigue tus sueños. La inspiración y la guía espiritual te llevarán a la luz.",
        18: "La Luna: Simboliza la ilusión, el subconsciente y los sueños.\n\nConsejo: Confía en tu intuición y presta atención a tus sueños. No todo es lo que parece, busca la verdad más profunda.",
        19: "El Sol: Representa la alegría, el éxito y la vitalidad.\n\nConsejo: Disfruta de la vida y celebra tus logros. La positividad y la energía te llevarán al éxito.",
        20: "El Juicio: Simboliza la reflexión, la redención y el despertar.\n\nConsejo: Reflexiona sobre tus acciones y busca la redención. El despertar espiritual y el autoexamen te llevarán a la renovación.",
        21: "El Mundo: Representa la realización, el éxito y la integración.\n\nConsejo: Celebra tus logros y disfruta del sentido de plenitud y realización. La integración de todas las partes de tu vida es clave.",
        22: "El Loco: Simboliza la aventura, la libertad y el nuevo comienzo.\n\nConsejo: Abraza la aventura y la incertidumbre. Confía en el viaje y sigue adelante con valentía y curiosidad."
    };

    const tarotImages = {
        1: "images/mago.jpg",
        2: "images/sacerdotisa.jpg",
        3: "images/emperatriz.jpg",
        4: "images/emperador.jpg",
        5: "images/hierofante.jpg",
        6: "images/enamorados.jpg",
        7: "images/carro.jpg",
        8: "images/justicia.jpg",
        9: "images/ermitano.jpg",
        10: "images/rueda_fortuna.jpg",
        11: "images/fuerza.jpg",
        12: "images/colgado.jpg",
        13: "images/muerte.jpg",
        14: "images/templanza.jpg",
        15: "images/diablo.jpg",
        16: "images/torre.jpg",
        17: "images/estrella.jpg",
        18: "images/luna.jpg",
        19: "images/sol.jpg",
        20: "images/juicio.jpg",
        21: "images/mundo.jpg",
        22: "images/loco.jpg"
    };

    document.getElementById('result').style.display = 'block';
    document.getElementById('tarotImage').src = tarotImages[tarotNumber];
    document.getElementById('tarotDescription').textContent = tarotDescriptions[tarotNumber];
}
