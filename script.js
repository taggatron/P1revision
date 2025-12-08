// Mock Paper 1 (Year 10) flashcards — content taken from the provided first image preview
const mockPaper1 = [
    { id: 1, question: "Explain the difference between a physical change and a chemical change.", answer: "Physical change alters state or appearance without changing the substance; chemical change produces new substances with different properties." },
    { id: 2, question: "State the mass and charge of: Protons, Neutrons, Electrons.", answer: "Proton: mass ~1, charge +1. Neutron: mass ~1, charge 0. Electron: mass ~~0, charge -1 (relative units)." },
    { id: 3, question: "Draw out a fully labelled Bohr model of an atom of carbon.", answer: "Carbon has 6 protons and typically 6 neutrons in nucleus; 6 electrons with 2 in first shell, 4 in second shell." },
    { id: 4, question: "Complete the balanced symbol equation: N2 + ..... O2 ..... NO2", answer: "Balanced: N2 + 2 O2 -> 2 NO2 (if forming NO2 with 1 N per molecule) — check oxidation states for context." },
    { id: 5, question: "What is the relative formula mass for Potassium hydroxide, KOH?", answer: "Mr = K(39) + O(16) + H(1) = 56 (approximately)." },
    { id: 6, question: "Explain why magnesium is in group 2 and period 3 of the periodic table.", answer: "Group 2 means it has 2 electrons in outer shell; period 3 means it has 3 electron shells (energy levels)." },
    { id: 7, question: "Aluminium forms an Al3+ ion and chlorine forms a Cl- ion. Explain why it has the formula AlCl3.", answer: "Al3+ needs three Cl- to balance charge: Al3+ + 3Cl- -> AlCl3; total charge neutral." },
    { id: 8, question: "Chlorine atoms react together to form covalent bonds. Explain formation of this bond.", answer: "Two chlorine atoms each share one electron to achieve a full outer shell, forming a Cl-Cl single covalent bond." },
    { id: 9, question: "Complete the diagram to show the bonding in Cl2 (two overlapping circles).", answer: "Each Cl contributes one electron to the shared pair in the overlap — shows covalent bond with shared electron pair." },
    { id: 10, question: "Diamond, graphite and fullerenes are all allotropes of carbon. What is meant by this?", answer: "Allotropes are different structural forms of the same element with different properties due to different bonding arrangements." },
    { id: 11, question: "Fullerenes and graphite can be used as lubricants. Explain why.", answer: "Graphite layers slide over each other because of weak forces between layers; fullerenes have spherical shapes that can roll, providing lubrication." },
    { id: 12, question: "Sodium hydroxide and hydrochloric acid react together to make sodium chloride. Explain: why this is a neutralisation reaction; indicator used; crystallisation to separate salt.", answer: "Neutralisation: acid + base -> salt + water. Use universal indicator to show pH ~7. Crystallisation can separate soluble salt by evaporating water to leave crystals." },
    { id: 13, question: "Which ions make solutions alkali?", answer: "Solutions are alkali when they contain OH- (hydroxide) ions in excess." },
    { id: 14, question: "Do metals or non-metals form at the cathode?", answer: "Reduction occurs at the cathode; metal ions are often reduced to form metals at the cathode." },
    { id: 15, question: "Define activation energy.", answer: "Activation energy is the minimum energy required for reactant particles to react when they collide." },
    { id: 16, question: "Describe the test for oxygen gas.", answer: "A glowing splint relights (glows brighter or reignites) in oxygen — simple positive test." }
];

// Mock Paper 2 (Year 11) flashcards — content taken from second image preview (biology + physics + physics radioactivity)
const mockPaper2 = [
    { id: 1, question: "Which word describes the entire genetic material of an organism?", answer: "Genome — the complete set of genetic material in an organism." },
    { id: 2, question: "How many chromosomes are present in the cells produced via meiosis?", answer: "Half the number of the parent cell (haploid). For humans, meiosis produces cells with 23 chromosomes." },
    { id: 3, question: "Describe the difference between dominant and recessive alleles.", answer: "Dominant allele expresses phenotype when present; recessive allele only shows phenotype when two copies present (homozygous)." },
    { id: 4, question: "A black fur rabbit with genotype Bb is crossed with a white fur rabbit (bb). Complete a genetic diagram for offspring.", answer: "Punnett square: B b across top and b b down side -> offspring: Bb, Bb, bb, bb -> 50% black (Bb), 50% white (bb).", image: "punnett_bb_bb.svg" },
    { id: 5, question: "Define phenotype.", answer: "Phenotype is the observable characteristics of an organism resulting from genotype and environment." },
    { id: 6, question: "Describe the difference between natural selection (evolution) and selective breeding.", answer: "Natural selection: environmental pressures cause differential survival and reproduction, leading to evolution over time. Selective breeding: humans choose parents with desirable traits to breed, changing species traits artificially." },
    { id: 7, question: "Fully describe the process of evolution through natural selection.", answer: "Variation exists in a population; some variations give advantages; those individuals survive and reproduce more, passing on genes; over generations allele frequencies change leading to adaptation." },
    { id: 8, question: "State a concern with genetic screening.", answer: "Ethical/privacy issues, potential discrimination, psychological impact, and decisions about embryos or pregnancy termination." },
    { id: 9, question: "Describe how selective breeding could be used to breed a pug from a wolf.", answer: "Selective breeding over many generations: choose individuals with desired traits (smaller size, flattened face, docility) and breed them until traits become common — involves many generations and careful selection." },
    { id: 10, question: "Suggest why some people object to selectively breeding dogs.", answer: "Welfare concerns (health problems), loss of genetic diversity, ethical objections to manipulating animals for aesthetics." },
    { id: 11, question: "Define irradiation.", answer: "Irradiation is exposing food or materials to ionising radiation (e.g., gamma rays) to kill microbes or pests." },
    { id: 12, question: "Define contamination.", answer: "Contamination is when unwanted radioactive material is deposited on or in an object or person; it can spread and cause exposure until removed." },
    { id: 13, question: "Describe what type of radioactive decay is happening: 14/6 C -> 14/7 N + 0/-1 e", answer: "This is beta minus (β-) decay: a neutron converts to a proton and emits an electron (beta particle)." },
    { id: 14, question: "A student is trying to find out what type of radiation is being emitted from element X. Describe an investigation they could carry out.", answer: "Use detectors: Geiger-Müller tube counts β and γ; place paper to stop α, thin metal to reduce β, and dense lead to reduce γ; compare readings and shielding to identify radiation type." },
    { id: 15, question: "How many protons, neutrons and electrons does lithium have? (Li shown with atomic number 3, mass number 7)", answer: "Protons = 3 (atomic number). Electrons = 3 (neutral atom). Neutrons = mass − protons = 7 − 3 = 4." },
    { id: 16, question: "Use the graph below to find the element half life. (counts vs time)", answer: "Half-life is time taken for activity to fall to half its initial value: read initial count then find time where count ≈ half; e.g., if initial ~80,000 then half ~40,000 — read corresponding time from x-axis." }
];

// Initialize the flashcard app (foundation-only)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');
    const toggle = document.getElementById('paper-toggle');
    const label1 = document.getElementById('paper-label-1');
    const label2 = document.getElementById('paper-label-2');

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
                        <div class="question-text">${card.question}</div>
                        <div class="click-hint">Click to reveal answer</div>
                    </div>
                    <div class="card-back">
                        <div class="answer-label">Answer ${card.id}</div>
                        ${card.image ? `<img src="${card.image}" alt="Answer diagram" class="card-back-image">` : `<div class="answer-text">${card.answer}</div>`}
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

    // Update label styles based on toggle
    function updateLabels() {
        if (toggle.checked) {
            label1.style.opacity = '0.7';
            label2.style.opacity = '1';
        } else {
            label1.style.opacity = '1';
            label2.style.opacity = '0.7';
        }
    }

    // Render current selection
    function renderCurrent() {
        if (toggle.checked) {
            createFlashcards(mockPaper2);
        } else {
            createFlashcards(mockPaper1);
        }
    }

    // Initial render
    updateLabels();
    renderCurrent();

    // Toggle behavior
    toggle.addEventListener('change', function() {
        updateLabels();
        renderCurrent();
    });

    // Reset button functionality
    resetButton.addEventListener('click', resetAllCards);
});