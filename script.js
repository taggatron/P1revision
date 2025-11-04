// Foundation-tier flashcards (taken from provided image)
const foundationFlashcards = [
    {
        id: 1,
        question: "What is meant by the following energy stores: Kinetic, Thermal, chemical",
        answer: "Kinetic: energy of motion. Thermal: internal energy related to temperature (particles' random motion). Chemical: energy stored in chemical bonds that can be released in reactions."
    },
    {
        id: 2,
        question: "Explain what is meant by the conservation of energy.",
        answer: "Energy cannot be created or destroyed; it can only be transferred between stores or converted from one form to another. The total energy stays the same."
    },
    {
        id: 3,
        question: "Describe the change in energy stores that occur when a car comes to a stop while braking.",
        answer: "The car's kinetic energy is mainly converted into thermal energy in the brakes (some is also dissipated as sound). The brakes and nearby air warm up."
    },
    {
        id: 4,
        question: "A metal cube has a mass of 12 kg and a volume of 3 m³. What is the density of the metal?",
        answer: "Density = mass ÷ volume = 12 kg ÷ 3 m³ = 4 kg/m³."
    },
    {
        id: 5,
        question: "Describe how the density of the cube would change if it were heated. Use ideas about particles in your answer.",
        answer: "Heating increases the kinetic energy of particles so they move further apart — the volume increases while mass stays the same, so density (mass/volume) decreases."
    },
    {
        id: 6,
        question: "Explain how you could find the density of a chess piece.",
        answer: "Measure its mass with a balance. Find its volume by immersion: measure displaced water in a graduated cylinder. Then density = mass ÷ volume."
    },
    {
        id: 7,
        question: "Draw a particle model of a solid, liquid and gas. Explain how the energy and arrangement of particles change when heated.",
        answer: "Solid: particles closely packed in fixed positions; low energy. Liquid: close but able to move/flow; more energy. Gas: far apart and move fast; highest energy. Heating increases particle kinetic energy, increases movement and average separation; can cause melting or boiling when enough energy is added."
    },
    {
        id: 8,
        question: "Why is a state change a physical change, and not a chemical change?",
        answer: "A state change only alters the arrangement and energy of particles (e.g., solid → liquid) but does not change the chemical identity or the substances' particles — bonds are not rearranged chemically, so it's physical and often reversible."
    },
    {
        id: 9,
        question: "Define specific heat capacity.",
        answer: "Specific heat capacity is the energy required to raise the temperature of 1 kg of a substance by 1 °C (or 1 K). Units: J/kg·K."
    },
    {
        id: 10,
        question: "It requires 1200 kJ of energy to heat 4 kg of copper by 40°C. What is the specific heat capacity of copper?",
        answer: "Use c = E ÷ (m ΔT). Convert 1200 kJ = 1,200,000 J. c = 1,200,000 ÷ (4 × 40) = 1,200,000 ÷ 160 = 7,500 J/kg·K."
    },
    {
        id: 11,
        question: "Describe how you could investigate to find the specific heat capacity of a material.",
        answer: "Measure mass of sample, heat with a heater of known power for a measured time (or measure energy input), record temperature change with a thermometer, and calculate c = E ÷ (m ΔT). Insulate sample, stir if liquid, and repeat for accuracy."
    },
    {
        id: 12,
        question: "Describe what is happening during the various stages of the graph below",
        answer: "Typically: (1) temperature of solid increases as it is heated; (2) plateau at melting point where temperature stays constant while energy causes change of state (melting); (3) temperature of liquid increases; (4) plateau at boiling point where energy causes vaporisation; (5) temperature of gas increases."
    },
    {
        id: 13,
        question: "The latent heat of vapourization for a material is 800 J/kg. How much energy is required to evaporate 1 Kg of it?",
        answer: "Energy required = mass × latent heat (E = m L). For 1 kg: E = 1 × 800 = 800 J. For mass m, E = 800 × m (J)."
    },
    {
        id: 14,
        question: "Explain why an aerosol canister can not be heated.",
        answer: "Heating increases the pressure of the gas inside and may cause the can to rupture or explode. Also flammable propellants can ignite — it's dangerous."
    },
    {
        id: 15,
        question: "Explain how energy is transferred through conduction.",
        answer: "Conduction is transfer of energy through direct contact: vibrating particles pass kinetic energy to neighbouring particles, and in metals free electrons carry energy quickly through the material."
    },
    {
        id: 16,
        question: "Explain how energy is transferred through convection.",
        answer: "Convection occurs in fluids (liquids/gases) when warmer, less dense regions rise and cooler, denser regions sink, creating convection currents that transfer energy."
    }
];

// Initialize the flashcard app (foundation-only)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');

    // Create flashcards from a given array
    function createFlashcards(cardsArray) {
        container.innerHTML = '';

        cardsArray.forEach(card => {
            const flashcardElement = document.createElement('div');
            flashcardElement.className = 'flashcard foundation';
            flashcardElement.setAttribute('data-id', card.id);

            flashcardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="question-number">Question ${card.id}</div>
                        ${card.id === 12 ? '<img src="latentheatgraph.png" alt="Graph showing temperature vs time" class="card-front-image">' : ''}
                        <div class="question-text">${card.question}</div>
                        <div class="click-hint">Click to reveal answer</div>
                    </div>
                    <div class="card-back">
                        <div class="answer-label">Answer ${card.id}</div>
                        <div class="answer-text">${card.answer}</div>
                        <div class="click-hint">Click to show question</div>
                    </div>
                </div>
            `;

            // Add click handler
            flashcardElement.addEventListener('click', function() {
                this.classList.toggle('flipped');
            });

            container.appendChild(flashcardElement);
        });
    }

    // Reset all cards
    function resetAllCards() {
        const allCards = document.querySelectorAll('.flashcard');
        allCards.forEach(card => {
            card.classList.remove('flipped');
        });
    }

    // Render foundation flashcards only
    createFlashcards(foundationFlashcards);

    // Reset button functionality
    resetButton.addEventListener('click', resetAllCards);
});