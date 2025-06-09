# DUSA Arcade 🎮

A collection of modern retro-style arcade games built with web technologies, featuring the DUSA design system and avatar progression.

## 🎯 Vision

DUSA Arcade reimagines classic arcade games with modern design principles, avatar-based progression systems, and the unique BITS economy. Each game in the collection follows our established design language while offering unique gameplay experiences.

## 🎮 Games

### 1. DUSA Snake
The flagship game of DUSA Arcade - a modern take on the classic Nokia Snake game featuring:
- **Avatar Progression**: Unlock new avatars at BITS milestones (8, 16, 32, 64)
- **BITS Economy**: Collect BITS to increase score multipliers
- **Power-ups**: Golden apples, speed boosts, and ghost mode
- **Responsive Design**: Playable on desktop and mobile devices

[Play DUSA Snake →](games/dusa-snake/index.html)

### 2. DUSA Pong
A mystical battle between mirror and snake - reimagining the classic Pong:
- **Mirror vs Snake**: Unique paddle dynamics with visual effects
- **Flame Ball**: Color-changing ball that shows who hit it last
- **Score Strategy**: Lose points when you miss, adding risk/reward
- **Progressive Difficulty**: Gets harder at 8, 16, 32, 64 point milestones

[Play DUSA Pong →](games/dusa-pong/index.html)

### More Games Coming Soon...
- DUSA Tetris
- DUSA Breakout
- DUSA Space Invaders
- DUSA Pac-Man

## 🎨 Design Principles

### Dark Modern Visual Identity
- **Primary Background**: #0D1117 (deep dark)
- **Secondary Background**: #161B22 (cards/elevated surfaces)
- **Primary Accent**: #1E3A8A (blue for main actions)
- **Secondary Accent**: #3B82F6 (light blue for highlights)
- **Success/Celebration**: #FFD700 (gold)
- **Typography**: DM Sans font family

### Core Design Values
1. **Clarity and Calmness** - Reduce cognitive load, immediate understanding
2. **Purposefulness** - Every element supports user goals
3. **Balance and Harmony** - Visual components harmoniously balanced
4. **Generous White Space** - Let interfaces breathe
5. **Subtle Interactions** - Natural, calm animations

## 🏗️ Architecture

```
DUSA-Arcade/
├── games/                  # Individual game folders
│   └── dusa-snake/        # First game in the series
│       ├── index.html     # Game file
│       └── assets/        # Game-specific assets
├── shared/                # Shared resources
│   ├── styles/           # Common CSS/design tokens
│   └── scripts/          # Shared JavaScript utilities
├── docs/                  # Documentation
└── README.md             # This file
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/ForkIt369/DUSA-Arcade.git
cd DUSA-Arcade
```

2. Open any game in your browser:
```bash
open games/dusa-snake/index.html
```

3. Or serve locally:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

## 🔌 Embedding Games

DUSA Arcade games are designed to be modular and embeddable. Each game can be embedded into external websites:

```html
<iframe 
  src="https://your-domain.com/games/dusa-snake/index.html" 
  width="900" 
  height="600"
  frameborder="0">
</iframe>
```

Games support PostMessage API for score updates and state communication. See [embed example](docs/embed-example.html) for advanced integration.

## 🔧 Development

### Adding a New Game
1. Create a new folder in `games/`
2. Follow the established design system
3. Implement avatar integration
4. Add BITS progression system
5. Ensure mobile responsiveness

### Design System Guidelines
- Use the established color palette
- Implement smooth 60fps animations
- Add particle effects for celebrations
- Include avatar reactions and emotions
- Follow the BITS milestone progression

## 📱 Features

### Common Features Across All Games
- **Avatar System**: Blue-themed anime avatars that evolve with progress
- **BITS Economy**: Universal progression system
- **Power-ups**: Game-specific enhancements
- **Responsive Controls**: Keyboard, touch, and mobile button support
- **Sound Effects**: Synthesized audio using Web Audio API
- **Particle Effects**: Celebration and feedback animations
- **High Score Tracking**: Local storage persistence

## 🎯 Future Roadmap

- [ ] Online leaderboards
- [ ] Avatar customization shop
- [ ] Cross-game BITS economy
- [ ] Achievement system
- [ ] Multiplayer modes
- [ ] PWA support for offline play

## 🤝 Contributing

We welcome contributions! Please follow our design principles and ensure any new games or features align with the DUSA Arcade aesthetic and gameplay philosophy.

## 📄 License

This project is open source and available under the MIT License.

---

Built with 💙 by the DUSA team