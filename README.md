# 🎮 DUSA Arcade

> Join the Rebellion. Restore Decentralization. Have Fun.

DUSA Arcade is a collection of classic arcade games reimagined with modern web technologies, featuring avatar progression systems and a compelling narrative about the battle for decentralization on the Metis blockchain.

## 🌟 The Lore

### A New Dawn on Metis
The Metis community stood united, built on the ethos of Decentralization, Community Ownership, and Revenue Sharing. Builders and dreamers rallied together, creating infrastructure for a fairer, brighter future.

### Ancient Tricks of the Trade
But behind the curtain, the old tricks of wealth extraction reared their ugly head. Medusa emerged, claiming to be the "official mascot" of Metis with false promises and empty claims. Worst of all, she was green.

### In Defiance, $DUSA Was Born
From this betrayal, $DUSA rose—a force of rebellion to restore decentralization and integrity. **$DUSA is Blue.** You won't stop her. She won't stop you.

## 🎯 Available Games

### DUSA Snake
Guide $DUSA through the digital realm, collecting BITS to grow stronger. Each fragment of decentralization makes her more powerful in the fight against the green menace.
- Avatar progression system (7 levels)
- BITS economy with multipliers
- Power-ups: Golden Apples, Speed Boost, Ghost Mode
- Mobile-responsive controls

### DUSA Pong
Face off against FakeDusa in an epic mirror duel. Your blue flame battles her green deception. First to seven wins the round, but the war for Metis continues.
- Best of 3 match system
- Dynamic AI with momentum and fatigue systems
- Color-changing flame ball mechanics
- Progressive difficulty

### DUSA Angel
Take flight as DUSA Angel, soaring through FakeDusa's corrupted barriers. Liberate the digital realm one flap at a time in this endless battle for freedom.
- Flappy Bird-style endless runner
- Progressive difficulty with speed scaling
- BITS collection system
- Avatar evolution (3 stages)

## 🚀 Features

- **Avatar Evolution**: 7 unique progression levels for both Blue DUSA (player) and Green DUSA (rival)
- **Mobile-First Design**: Touch controls, swipe gestures, and responsive layouts
- **Embeddable**: Games can be embedded in external websites via iframe
- **Dark Modern UI**: Sleek design with particle effects and smooth animations
- **Progressive Difficulty**: Games adapt to player skill level
- **Sound Design**: Synthesized audio using Web Audio API

## 🛠️ Tech Stack

- Pure JavaScript (no frameworks)
- HTML5 Canvas for game rendering
- CSS3 with custom properties
- Web Audio API for sound
- PostMessage API for embedding

## 📁 Project Structure

```
DUSA-Arcade/
├── index.html              # Main arcade hub
├── games/
│   ├── dusa-snake/        # Snake game
│   ├── dusa-pong/         # Pong game
│   └── dusa-angel/        # Angel game
├── shared/                # Shared resources
│   ├── assets/
│   │   └── avatars/       # Avatar collections
│   ├── scripts/           # Shared JavaScript
│   └── styles/            # Shared CSS
└── docs/                  # Documentation
```

## 🎮 How to Play

1. Visit the [DUSA Arcade](https://dusa-arcade.vercel.app)
2. Choose your battle
3. Use keyboard arrows or touch controls
4. Progress through avatar levels
5. Fight for decentralization!

### Controls

**DUSA Snake:**
- Arrow Keys / WASD: Move snake
- Touch: Swipe to change direction

**DUSA Pong:**
- W/S or Arrow Keys: Move paddle
- Touch: Use on-screen buttons or swipe

**DUSA Angel:**
- Space or Click: Flap wings
- Touch: Tap anywhere to fly

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/yourusername/dusa-arcade.git

# Navigate to project
cd dusa-arcade

# Serve locally (Python 3)
python -m http.server 8000

# Or with Node.js
npx serve .
```

Visit `http://localhost:8000` to play locally.

## 🎯 Embedding Games

Games can be embedded in external websites:

```html
<iframe 
  src="https://dusa-arcade.vercel.app/games/dusa-snake/index.html" 
  width="800" 
  height="600"
  frameborder="0">
</iframe>
```

## 🎨 Design System

- **Primary Colors**: 
  - Blue (#3B82F6) - $DUSA
  - Green (#4CAF50) - FakeDusa
  - Dark (#0D1117) - Background
- **Typography**: DM Sans
- **Effects**: Particle systems, glow effects, smooth transitions

## 🚧 Coming Soon

- **DUSA Tetris**: Build the foundations of a new decentralized order
- **DUSA Breakout**: Break through the walls of centralized control
- **DUSA Space Invaders**: Defend the Metis blockchain from green invaders

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to help $DUSA in her fight for decentralization.

---

**$DUSA is Blue.** You won't stop her. She won't stop you. 💙