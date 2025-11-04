# Biology B1 Revision Flashcards

An interactive web application for studying Biology B1 revision topics through digital flashcards.

## Features

- **16 Biology Questions**: Comprehensive coverage of B1 topics including:
  - Cell biology (eukaryotic/prokaryotic cells)
  - Microscopy and magnification calculations
  - Enzyme function and optimum conditions
  - Digestive enzymes
  - Respiration (aerobic and anaerobic)
  - Photosynthesis and limiting factors
  - Percentage calculations

- **Interactive Flashcards**: 
  - Click any card to flip between question and answer
  - Smooth 3D flip animations
  - Color-coded design (blue front, gradient blue back)
  - Hover effects for better user experience

- **Responsive Design**: 
  - Works on desktop, tablet, and mobile devices
  - Grid layout automatically adjusts to screen size
  - Staggered loading animations

- **Reset Functionality**: 
  - "Reset All Cards" button to flip all cards back to questions
  - Perfect for starting a new study session

## How to Use

### Method 1: Local Web Server (Recommended)
1. Open Terminal/Command Prompt
2. Navigate to the project folder:
   ```bash
   cd "/Users/danieltagg/Desktop/Desktop - Daniel's MacBook Pro/B1revision"
   ```
3. Start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser and go to: `http://localhost:8000`

### Method 2: Direct File Opening
1. Double-click the `index.html` file
2. It should open in your default web browser

## Study Tips

1. **First Pass**: Read through all questions first to identify knowledge gaps
2. **Active Testing**: Click cards to test yourself before revealing answers
3. **Spaced Repetition**: Focus more time on questions you find difficult
4. **Reset and Retry**: Use the reset button to test yourself multiple times
5. **Mobile Study**: The app works great on phones for studying on the go

## File Structure

```
B1revision/
├── index.html      # Main HTML structure
├── style.css       # All styling and animations
├── script.js       # JavaScript functionality and flashcard data
└── README.md       # This documentation file
```

## Question Topics Covered

1. **Cell Biology**: Eukaryotic vs Prokaryotic cells
2. **Microscopy**: Magnification calculations and slide preparation
3. **Enzymes**: Lock and key mechanism, optimum conditions, factors affecting enzyme rate
4. **Digestive System**: Four main digestive enzymes and their substrates
5. **Respiration**: Aerobic respiration equation, mitochondria function, anaerobic respiration products
6. **Photosynthesis**: Location, limiting factors, investigation methods
7. **Mathematics**: Percentage calculations

## Technical Details

- **No Dependencies**: Pure HTML, CSS, and JavaScript - no external libraries required
- **Modern CSS**: Uses CSS Grid, Flexbox, and 3D transforms
- **ES6 JavaScript**: Modern JavaScript features for clean, readable code
- **Responsive**: Mobile-first design with breakpoints at 768px and 480px

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern web browser with CSS3 and ES6 support

---

Created for Biology B1 Revision - Good luck with your studies! 🧬🔬