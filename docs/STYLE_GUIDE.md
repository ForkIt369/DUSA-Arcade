# DUSA Arcade Style Guide 🎨

This document defines the visual and interaction design standards for all DUSA Arcade games.

## Color Palette

### Primary Colors
```css
--dusa-dark-bg: #0D1117;        /* Deep dark background */
--dusa-card-bg: #161B22;        /* Elevated surfaces */
--dusa-primary: #1E3A8A;        /* Primary blue */
--dusa-primary-light: #3B82F6;  /* Light blue accent */
--dusa-primary-glow: #60A5FA;   /* Blue glow effects */
```

### Secondary Colors
```css
--dusa-gold: #FFD700;           /* Success, celebrations, special items */
--dusa-success: #4CAF50;        /* Positive feedback */
--dusa-danger: #FF6347;         /* Warnings, game over */
--dusa-ghost: #E6E6FA;          /* Special effects */
--dusa-text: #FFFFFF;           /* Primary text */
--dusa-text-muted: #8B92A3;     /* Secondary text */
```

## Typography

### Font Family
```css
font-family: 'DM Sans', sans-serif;
```

### Font Weights
- Regular: 400 (body text)
- Medium: 500 (UI elements)
- Semibold: 600 (headings)

### Font Sizes
- Heading 1: 2.5rem
- Heading 2: 2rem
- Body: 1rem
- Small: 0.9rem
- Tiny: 0.8rem

## Layout Principles

### Spacing
- Base unit: 8px
- Common spacings: 8px, 16px, 24px, 32px, 48px
- Generous padding in containers (2rem)

### Border Radius
- Cards: 12px
- Buttons: 8px
- Chips/Tags: 6px
- Avatars: 50% (circular)

### Shadows
```css
/* Standard elevation */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

/* Glow effects */
box-shadow: 0 0 20px rgba(30, 58, 138, 0.3);  /* Blue glow */
box-shadow: 0 0 40px rgba(255, 215, 0, 0.8);  /* Gold glow */
```

## Animation Standards

### Transitions
- Duration: 0.3s (standard), 0.5s (emphasis)
- Easing: ease, ease-in-out
- Properties: all, transform, opacity, box-shadow

### Common Animations
```css
/* Floating effect */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

/* Pulse effect */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* Celebration */
@keyframes celebrate {
    0%, 100% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.2) rotate(-10deg); }
    75% { transform: scale(1.2) rotate(10deg); }
}
```

## Game-Specific Elements

### Canvas Games
- Grid size: 20px standard
- Canvas size: 400x400px default
- Border: 2px solid primary color
- Background: Dark background color

### UI Components

#### Buttons
```css
.button {
    background-color: var(--dusa-primary);
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
}

.button:hover {
    background-color: var(--dusa-primary-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 58, 138, 0.4);
}
```

#### Score Display
```css
.score {
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--dusa-primary-light);
}
```

#### Avatar Display
```css
.avatar-display {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 3px solid var(--dusa-primary);
    box-shadow: 0 0 20px rgba(30, 58, 138, 0.5);
    animation: float 3s ease-in-out infinite;
}
```

## Avatar System

### Avatar Progression
- Milestone-based unlocking (BITS: 0, 8, 16, 32, 64, 128, 256)
- Celebration animations on unlock
- Emotion reactions to game events

### Avatar Integration
- Avatar as player character (when applicable)
- Avatar trails for visual feedback
- Power-up overlays on avatar
- Emotion indicators (emojis)

## BITS Economy

### Visual Representation
- BITS counter prominently displayed
- Multiplier indicators with glow effects
- Milestone celebrations with particles

### Feedback
- Sound effects for collection
- Visual burst effects
- Score multiplier animations

## Sound Design

### Audio Principles
- Synthesized sounds using Web Audio API
- Pitch variations based on game state
- Celebration sequences for achievements
- Optional sound (respect user preference)

### Common Sound Patterns
- Collection: 440Hz + pitch variation
- Power-up: 880Hz square wave
- Achievement: Ascending arpeggio
- Game Over: 220Hz sawtooth

## Particle Effects

### Usage Guidelines
- Maximum 100 particles active
- Celebration bursts: 20-30 particles
- Collection feedback: 10-15 particles
- Color-coded by context (blue, gold, etc.)

### Performance
- Limit particle lifetime
- Clean up off-screen particles
- Use requestAnimationFrame

## Mobile Responsiveness

### Breakpoints
- Desktop: > 768px
- Mobile: ≤ 768px

### Mobile Adaptations
- Show touch controls
- Increase button sizes
- Adjust layouts for portrait
- Maintain 60fps performance

## Accessibility

### Requirements
- WCAG AA minimum compliance
- Keyboard navigation support
- High contrast ratios
- Clear focus indicators
- Screen reader friendly

### Best Practices
- Semantic HTML structure
- ARIA labels where needed
- Consistent interaction patterns
- Clear visual feedback

## Performance Standards

### Target Metrics
- Load time: < 3 seconds
- Animation: 60fps
- Input latency: < 16ms
- Memory usage: < 100MB

### Optimization
- Minimize DOM manipulation
- Use CSS transforms
- Batch operations
- Clean up resources

## Implementation Checklist

For each new game, ensure:

- [ ] Uses DUSA color palette
- [ ] Implements DM Sans typography
- [ ] Includes avatar system
- [ ] Has BITS progression
- [ ] Follows animation standards
- [ ] Includes particle effects
- [ ] Has sound effects (optional)
- [ ] Mobile responsive
- [ ] 60fps performance
- [ ] Accessibility compliant

---

Last Updated: 2024
Version: 1.0