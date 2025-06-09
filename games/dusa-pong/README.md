# DUSA Pong 🏓

A mystical take on the classic Pong game featuring mirror paddles, flame balls, and avatar progression.

## 🎮 How to Play

### Controls
- **W/S or Arrow Keys**: Move your mirror paddle up and down
- **Touch Controls**: Mobile buttons for up/down movement

### Objective
- Defend your side with your mirror paddle
- The flame ball changes color based on who hit it last:
  - **Blue Flame**: You hit it last
  - **Green Flame**: Snake AI hit it last
- Score points when the ball passes your opponent
- **Lose a point** when you miss (if you have any points)

## 🎯 Features

### Avatar Progression
Your avatar changes as you score:
- Every 8 points unlocks a new avatar
- Visual celebration on avatar change
- Up to 7 unique avatars to unlock

### Difficulty System
The game gets harder at combined score milestones:
- **8 Points**: Difficulty 2 - Ball speeds up
- **16 Points**: Difficulty 3 - AI gets smarter
- **32 Points**: Difficulty 4 - Intense gameplay
- **64 Points**: Difficulty 5 - Maximum challenge

### Unique Mechanics
- **Mirror Paddle**: Reflective surface with shine effect
- **Flame Ball**: Leaves a burning trail as it moves
- **Color-Changing**: Ball color indicates last hit
- **Score Loss**: Missing the ball costs you a point
- **Snake AI**: Opponent with snake-themed paddle

## 🎨 Visual Effects

### Paddle Design
- **Player**: Mirror paddle with reflective gradient
- **AI**: Snake-patterned green paddle

### Ball Effects
- Flame trail that follows the ball
- Dynamic color based on last hit
- Particle explosions on paddle hits
- Glow effects matching ball color

### Feedback
- Screen glow on difficulty increase
- Avatar celebration animations
- Paddle glow on successful hits
- Particle effects for scoring

## 🎵 Sound Design

- Different tones for player vs AI hits
- Score celebration sounds
- Difficulty increase notifications
- Wall bounce effects
- Optional sound toggle

## 🏆 Strategy Tips

1. **Control the Center**: Keep your paddle centered when possible
2. **Add Spin**: Hit with paddle edges for unpredictable angles
3. **Watch the Color**: Anticipate ball direction by its color
4. **Manage Risk**: Balance scoring with not losing points
5. **Learn AI Patterns**: The AI has slight imperfections to exploit

## 🔧 Embedding

DUSA Pong can be embedded in external websites:

```html
<iframe 
  src="https://your-domain.com/games/dusa-pong/index.html" 
  width="900" 
  height="600"
  frameborder="0">
</iframe>
```

The game will automatically:
- Adapt to embed dimensions
- Send score updates to parent window
- Hide unnecessary UI elements

## 📊 Scoring System

- **+1 Point**: When opponent misses
- **-1 Point**: When you miss (minimum 0)
- **Avatar Unlock**: Every 8 points
- **Difficulty Increase**: At 8, 16, 32, 64 total points

## 🎯 Game Modes

Currently features:
- **Single Player vs AI**: Progressive difficulty
- **Mirror vs Snake**: Unique paddle dynamics

Future possibilities:
- Local multiplayer
- Online battles
- Tournament mode

---

Part of the DUSA Arcade collection