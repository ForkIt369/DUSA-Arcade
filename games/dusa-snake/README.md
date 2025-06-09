# DUSA Snake 🐍

A modern reimagining of the classic Nokia Snake game, featuring avatar progression, BITS economy, and power-ups.

## 🎮 How to Play

### Controls
- **Arrow Keys / WASD**: Control the snake's direction
- **Touch/Swipe**: Mobile gesture controls
- **Mobile Buttons**: On-screen directional pad

### Objective
- Guide your avatar-headed snake to collect green snake emojis (🐍)
- Each food gives you 1 BIT
- Avoid walls and your own tail
- Collect power-ups for special abilities

## 🎯 Features

### Avatar Progression
Your avatar evolves as you collect BITS:
- **0 BITS**: Starting avatar
- **8 BITS**: Second avatar (2x multiplier)
- **16 BITS**: Third avatar (4x multiplier)
- **32 BITS**: Fourth avatar (8x multiplier)
- **64 BITS**: Fifth avatar (16x multiplier)
- **128 BITS**: Sixth avatar
- **256 BITS**: Ultimate avatar

### BITS & Multipliers
- Collect BITS by eating food
- Hit milestones to increase your score multiplier
- Score = 1 × current multiplier per food eaten

### Power-Ups
- **⭐ Golden Apple**: 5 BITS instantly
- **⚡ Speed Boost**: Temporary speed increase
- **👻 Ghost Mode**: Pass through walls and yourself

### Visual Features
- Avatar as snake head
- Emotion reactions (😋🤩✨💙🎯)
- Particle effects on collection
- Avatar trails when eating
- Celebration animations

## 🎨 Design Elements

### Color Scheme
- Primary: Blue (#1E3A8A, #3B82F6)
- Background: Dark (#0D1117, #161B22)
- Celebration: Gold (#FFD700)
- Food: Green (🐍)

### Animations
- 60fps smooth gameplay
- Floating avatar display
- Particle explosions
- Glow effects
- Screen shake on game over

## 📊 Scoring System

- **Base Score**: 1 point per food
- **Multipliers**: ×2, ×4, ×8, ×16 at BITS milestones
- **Speed Increase**: Every 10 BITS
- **High Score**: Saved locally

## 🎵 Sound Effects

- Synthesized audio using Web Audio API
- Pitch variations based on BITS collected
- Milestone celebration sounds
- Power-up activation sounds
- Can be toggled on/off

## 🏆 Tips & Strategies

1. **Plan Your Route**: Think ahead to avoid trapping yourself
2. **Use Power-Ups Wisely**: Ghost mode can save you from mistakes
3. **Build Streaks**: Focus on reaching BITS milestones for multipliers
4. **Control Speed**: The game speeds up - stay calm and focused
5. **Learn Patterns**: Develop consistent movement patterns

## 🐛 Known Features

- Avatar changes persist through game
- High scores saved between sessions
- Mobile controls optimized for touch
- Particle effects limited for performance

## 🔧 Technical Details

- Pure HTML5/CSS3/JavaScript
- No external dependencies
- Canvas-based rendering
- Local storage for persistence
- Mobile responsive design

---

Part of the DUSA Arcade collection