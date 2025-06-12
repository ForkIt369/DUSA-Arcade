# DUSA Arcade - Quick Reference Guide

## 🚀 Deployment
- **Live URL**: https://dusa-arcade.vercel.app
- **GitHub**: https://github.com/ForkIt369/DUSA-Arcade
- **Deploy**: Push to main branch → Auto-deploys to Vercel

## 🎮 Game URLs
1. **Snake**: https://dusa-arcade.vercel.app/games/dusa-snake/
2. **Angel**: https://dusa-arcade.vercel.app/games/dusa-angel/
3. **Pong**: https://dusa-arcade.vercel.app/games/dusa-pong/

## 📊 Game Specifications

### DUSA Snake
- **Duration**: 100 seconds exactly
- **Speed**: 0.7x → 1.0x (over 50s)
- **Power-up**: Mirror only (8s duration)
- **Max theoretical BITS**: ~50
- **Controls**: Arrow keys/WASD/Touch

### DUSA Angel
- **Duration**: ~3.5 minutes (music length)
- **Mechanics**: Tap/click to fly
- **Collectibles**: Golden rings = BITS
- **Power-up**: Mirror (invincibility)
- **Difficulty**: Progressive speed increase

### DUSA Pong
- **Win condition**: First to 5 points
- **Power-ups**: 3 types (Size, Speed, Multi-ball)
- **AI**: Smart positioning
- **Ball speed**: Progressive increase

## 🔧 Key Integration Points

### 1. Embed Games
```html
<iframe src="https://dusa-arcade.vercel.app/games/dusa-snake/" 
        width="800" height="600" frameborder="0" allow="autoplay">
</iframe>
```

### 2. Listen for Game Events
```javascript
window.addEventListener('message', (event) => {
  if (event.data.type === 'GAME_OVER') {
    console.log('Score:', event.data.score);
  }
});
```

### 3. Send User Data
```javascript
iframe.contentWindow.postMessage({
  type: 'USER_AUTH',
  user: { id: '123', wallet: '0x...' }
}, 'https://dusa-arcade.vercel.app');
```

## 📁 File Structure
```
games/
├── dusa-snake/
│   ├── index.html (57KB)
│   └── RTH SnakeSong.mp3 (592KB)
├── dusa-angel/
│   ├── index.html (79KB)
│   └── orinoco_flow-2.mp3 (1.5MB)
└── dusa-pong/
    ├── index.html (52KB)
    └── Blue Monday Pong.mp3 (size varies)
```

## 🎨 Avatars
- 7 progression levels per game
- PNG format, ~100x100px
- Located in: `/games/[game]/assets/avatars/`

## 💾 Local Storage Keys
- `dusaSnakeHighScore` - Snake high score
- `dusaAngelHighScore` - Angel high score
- `dusaPongHighScore` - Pong high score
- `soundEnabled` - Sound preference

## 🐛 Common Issues

1. **Music not playing**: Browsers block autoplay - starts on first interaction
2. **Game not starting**: Clear cache (Ctrl+Shift+R)
3. **Touch not working**: Ensure iframe allows touch events
4. **Performance issues**: Check particle count limits

## 📈 Performance Targets
- 60 FPS gameplay
- < 3s load time
- < 100MB memory usage
- Works on 2GB RAM devices

## 🔗 Quick Commands
```bash
# Deploy to production
vercel --prod

# Check deployment
vercel ls

# View logs
vercel logs

# Local testing
python3 -m http.server 8080
```

## ⚡ Integration Checklist
- [ ] Embed games in iframes
- [ ] Set up message listeners
- [ ] Add user authentication
- [ ] Connect BITS wallet
- [ ] Implement leaderboards
- [ ] Add analytics tracking
- [ ] Test on mobile devices
- [ ] Verify sound works
- [ ] Check performance
- [ ] Security review

---
*Ready for platform integration! All games are self-contained and work standalone.*