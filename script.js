const tarotCards = {
    1: { image: "images/mago.jpg", description: "El Mago: Representa habilidad, destreza y poder de manifestación.\n\nConsejo: Confía en tus habilidades y toma acción para alcanzar tus metas. Tienes el poder para crear lo que deseas en tu vida." },
    2: { image: "images/sacerdotisa.jpg", description: "La Papisa (La Sacerdotisa): Simboliza sabiduría, intuición y conocimiento secreto.\n\nConsejo: Escucha tu intuición y busca respuestas dentro de ti. No te apresures, la paciencia es clave." },
    3: { image: "images/emperatriz.jpg", description: "La Emperatriz: Representa creatividad, fertilidad y abundancia.\n\nConsejo: Aprovecha tu creatividad y nutre tus proyectos. Confía en el proceso de crecimiento y desarrollo." },
    4: { image: "images/emperador.jpg", description: "El Emperador: Simboliza estructura, autoridad y control.\n\nConsejo: Establece límites claros y mantén el control en tus asuntos. La disciplina y el orden te llevarán al éxito." },
    5: { image: "images/hierofante.jpg", description: "El Sumo Sacerdote (El Papa): Representa la tradición, la espiritualidad y el conocimiento formal.\n\nConsejo: Sigue las reglas y busca la guía de mentores o autoridades. La sabiduría tradicional puede ser muy útil." },
    6: { image: "images/enamorados.jpg", description: "Los Enamorados: Simboliza el amor, la unión y las decisiones.\n\nConsejo: Toma decisiones desde el corazón y busca el equilibrio en tus relaciones. La armonía es esencial." },
    7: { image: "images/carro.jpg", description: "El Carro: Representa la victoria, la fuerza de voluntad y el avance.\n\nConsejo: Mantén tu enfoque y determinación para superar los obstáculos. La perseverancia te llevará lejos." },
    8: { image: "images/justicia.jpg", description: "La Justicia: Simboliza la verdad, el equilibrio y la justicia.\n\nConsejo: Busca la verdad y actúa con equidad. Asegúrate de mantener un equilibrio en todas tus acciones." },
    9: { image: "images/ermitano.jpg", description: "El Ermitaño: Representa la introspección, la sabiduría y la soledad.\n\nConsejo: Tómate un tiempo para reflexionar y buscar respuestas dentro de ti. La soledad puede ser una oportunidad para el crecimiento personal." },
    10: { image: "images/rueda_fortuna.jpg", description: "La Rueda de la Fortuna: Simboliza el cambio, el destino y el ciclo de la vida.\n\nConsejo: Acepta los cambios y confía en que el destino te llevará a donde necesitas estar. La vida está llena de altibajos, fluye con ellos." },
    11: { image: "images/fuerza.jpg", description: "La Fuerza: Representa el coraje, la compasión y la fortaleza interna.\n\nConsejo: Confía en tu fuerza interior y enfrenta los desafíos con coraje y compasión. La verdadera fuerza viene del corazón." },
    12: { image: "images/colgado.jpg", description: "El Colgado: Simboliza el sacrificio, la pausa y la perspectiva.\n\nConsejo: Acepta la necesidad de hacer sacrificios y cambia tu perspectiva para ver las cosas de una manera nueva. La paciencia es clave." },
    13: { image: "images/muerte.jpg", description: "La Muerte: Representa la transformación, el cambio y el renacimiento.\n\nConsejo: Acepta los finales como una oportunidad para nuevos comienzos. La transformación es necesaria para el crecimiento." },
    14: { image: "images/templanza.jpg", description: "La Templanza: Simboliza la moderación, el equilibrio y la armonía.\n\nConsejo: Busca el equilibrio en todas las áreas de tu vida y practica la moderación. La paciencia y la calma son esenciales." },
    15: { image: "images/diablo.jpg", description: "El Diablo: Representa la tentación, el materialismo y las ataduras.\n\nConsejo: Sé consciente de las tentaciones y ataduras que te limitan. Trabaja para liberarte de ellas y encontrar tu verdadera libertad." },
    16: { image: "images/torre.jpg", description: "La Torre: Simboliza la destrucción, la revelación y el cambio abrupto.\n\nConsejo: Acepta los cambios inesperados como una oportunidad para reconstruir y crecer. La verdad puede ser dolorosa, pero necesaria." },
    17: { image: "images/estrella.jpg", description: "La Estrella: Representa la esperanza, la inspiración y la espiritualidad.\n\nConsejo: Mantén la esperanza y sigue tus sueños. La inspiración y la guía espiritual te llevarán a la luz." },
    18: { image: "images/luna.jpg", description: "La Luna: Simboliza la ilusión, el subconsciente y los sueños.\n\nConsejo: Confía en tu intuición y presta atención a tus sueños. No todo es lo que parece, busca la verdad más profunda." },
    19: { image: "images/sol.jpg", description: "El Sol: Representa la alegría, el éxito y la vitalidad.\n\nConsejo: Disfruta de la vida y celebra tus logros. La positividad y la energía te llevarán al éxito." },
    20: { image: "images/juicio.jpg", description: "El Juicio: Simboliza la reflexión, la redención y el despertar.\n\nConsejo: Reflexiona sobre tus acciones y busca la redención. El despertar espiritual y el autoexamen te llevarán a la renovación." },
    21: { image: "images/mundo.jpg", description: "El Mundo: Representa la realización, el éxito y la integración.\n\nConsejo: Celebra tus logros y disfruta del sentido de plenitud y realización. La integración de todas las partes de tu vida es clave." },
    22: { image: "images/loco.jpg", description: "El Loco: Simboliza la aventura, la libertad y el nuevo comienzo.\n\nConsejo: Abraza la aventura y la incertidumbre. Confía en el viaje y sigue adelante con valentía y curiosidad." }
};

function calculateTarot(event) {
    event.preventDefault();
    const birthdate = document.getElementById('birthdate').value;
    if (!birthdate) return;

    const [year, month, day] = birthdate.split('-').map(Number);

    // Sumando dígito por dígito
    const sumDigits = (number) => number.toString().split('').reduce((acc, num) => acc + Number(num), 0);

    let total = sumDigits(day) + sumDigits(month) + sumDigits(year);

    if (total > 22) {
        total = sumDigits(total);
    }

    const card = tarotCards[total];
    const description = card ? card.description : 'No se encontró la carta.';
    const imageUrl = card ? card.image : '';

    document.getElementById('tarotImage').src = imageUrl;
    document.getElementById('tarotDescription').textContent = description;
    document.getElementById('calculationProcess').textContent = `Proceso de cálculo: ${day} (${sumDigits(day)}) + ${month} (${sumDigits(month)}) + ${year} (${sumDigits(year)}) = ${total}`;
}

document.getElementById('tarotForm').addEventListener('submit', calculateTarot);
document.getElementById('birthdate').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        calculateTarot(event);
    }
});

