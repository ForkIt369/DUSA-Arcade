# Technical Integration Guide - DUSA Arcade

## Quick Start Integration

### 1. Basic Iframe Embedding
```html
<!-- Embed full arcade -->
<iframe 
  src="https://dusa-arcade.vercel.app" 
  width="100%" 
  height="600"
  frameborder="0"
  allow="autoplay">
</iframe>

<!-- Embed specific game -->
<iframe 
  src="https://dusa-arcade.vercel.app/games/dusa-snake/" 
  width="800" 
  height="600"
  frameborder="0"
  allow="autoplay">
</iframe>
```

### 2. Platform Integration Points

#### User Authentication Bridge
```javascript
// Add to each game's index.html before game initialization
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://your-platform.com') return;
  
  if (event.data.type === 'USER_AUTH') {
    window.DUSAUser = event.data.user;
    // Update game UI with user info
    updateUserDisplay(window.DUSAUser);
  }
});

// Send game events back to platform
function sendGameEvent(eventType, data) {
  window.parent.postMessage({
    type: eventType,
    game: 'dusa-snake',
    data: data
  }, 'https://your-platform.com');
}
```

#### BITS Collection Integration
```javascript
// Current implementation (modify in each game)
function collectBit() {
  gameState.bits++;
  bitsElement.textContent = gameState.bits;
  
  // ADD: Platform integration
  sendGameEvent('BITS_COLLECTED', {
    amount: 1,
    total: gameState.bits,
    timestamp: Date.now()
  });
}

// On game over
function gameOver() {
  // ... existing code ...
  
  // ADD: Send final score to platform
  sendGameEvent('GAME_OVER', {
    finalScore: gameState.bits,
    duration: gameState.elapsedTime,
    highScore: gameState.highScore
  });
}
```

### 3. API Endpoints Needed

```javascript
// Suggested API structure for platform
const DUSA_API = {
  // Score submission
  submitScore: async (gameId, score, metadata) => {
    return await fetch('/api/games/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
      body: JSON.stringify({
        gameId,
        score,
        metadata,
        timestamp: Date.now()
      })
    });
  },

  // BITS transactions
  collectBITS: async (gameId, amount) => {
    return await fetch('/api/games/bits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userToken}`
      },
      body: JSON.stringify({
        gameId,
        amount,
        action: 'collect'
      })
    });
  },

  // Leaderboards
  getLeaderboard: async (gameId, limit = 10) => {
    return await fetch(`/api/games/${gameId}/leaderboard?limit=${limit}`);
  }
};
```

### 4. Security Considerations

#### Server-Side Validation
```javascript
// Platform backend should validate:
class GameScoreValidator {
  validateSnakeScore(score, duration) {
    // Max possible BITS in 100 seconds
    const maxPossibleScore = 50;
    if (score > maxPossibleScore) return false;
    
    // Game lasts exactly 100 seconds
    if (duration > 100) return false;
    
    // Minimum time between collections
    const minCollectionTime = 1; // 1 second
    const maxCollections = duration / minCollectionTime;
    if (score > maxCollections) return false;
    
    return true;
  }
}
```

#### Anti-Cheat Measures
```javascript
// Add to games for basic protection
const GameSecurity = {
  // Obfuscate score
  encodeScore: (score) => {
    return btoa(JSON.stringify({
      s: score,
      t: Date.now(),
      h: generateHash(score + Date.now())
    }));
  },
  
  // Track suspicious behavior
  detectAnomalies: () => {
    // Check for impossible scores
    // Monitor rapid score increases
    // Validate timing between actions
  }
};
```

### 5. Database Schema Suggestions

```sql
-- User game data
CREATE TABLE user_game_stats (
  user_id VARCHAR(255),
  game_id VARCHAR(50),
  high_score INT DEFAULT 0,
  total_bits_earned INT DEFAULT 0,
  games_played INT DEFAULT 0,
  total_play_time INT DEFAULT 0,
  last_played TIMESTAMP,
  achievements JSON,
  PRIMARY KEY (user_id, game_id)
);

-- Game sessions
CREATE TABLE game_sessions (
  session_id UUID PRIMARY KEY,
  user_id VARCHAR(255),
  game_id VARCHAR(50),
  score INT,
  bits_earned INT,
  duration INT,
  metadata JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Leaderboards (materialized view for performance)
CREATE MATERIALIZED VIEW game_leaderboards AS
SELECT 
  game_id,
  user_id,
  MAX(score) as high_score,
  SUM(bits_earned) as total_bits,
  COUNT(*) as games_played,
  RANK() OVER (PARTITION BY game_id ORDER BY MAX(score) DESC) as rank
FROM game_sessions
GROUP BY game_id, user_id;
```

### 6. WebSocket Integration (Future Multiplayer)

```javascript
// For DUSA Pong multiplayer
class MultiplayerConnection {
  constructor(gameId) {
    this.ws = new WebSocket('wss://your-platform.com/games/multiplayer');
    this.gameId = gameId;
    this.roomId = null;
    
    this.ws.onopen = () => {
      this.send('JOIN_GAME', { gameId });
    };
    
    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.handleMessage(data);
    };
  }
  
  send(type, data) {
    this.ws.send(JSON.stringify({ type, data }));
  }
  
  handleMessage(message) {
    switch(message.type) {
      case 'ROOM_JOINED':
        this.roomId = message.roomId;
        break;
      case 'OPPONENT_MOVE':
        updateOpponentPaddle(message.data.y);
        break;
      case 'BALL_SYNC':
        syncBallPosition(message.data);
        break;
    }
  }
}
```

### 7. Progressive Web App Wrapper

```json
// manifest.json for PWA
{
  "name": "DUSA Arcade",
  "short_name": "DUSA Games",
  "description": "Blockchain arcade games with BITS rewards",
  "start_url": "/",
  "display": "fullscreen",
  "orientation": "landscape",
  "theme_color": "#0D1117",
  "background_color": "#0D1117",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 8. Analytics Integration

```javascript
// Add to each game
class GameAnalytics {
  static track(event, properties = {}) {
    // Google Analytics 4
    if (window.gtag) {
      gtag('event', event, {
        game_name: getCurrentGame(),
        ...properties
      });
    }
    
    // Custom analytics endpoint
    fetch('/api/analytics/track', {
      method: 'POST',
      body: JSON.stringify({
        event,
        properties,
        timestamp: Date.now()
      })
    });
  }
}

// Usage in games
GameAnalytics.track('game_started', { 
  game: 'dusa-snake' 
});

GameAnalytics.track('bits_collected', { 
  amount: 1,
  total: gameState.bits 
});

GameAnalytics.track('game_completed', {
  score: gameState.bits,
  duration: gameState.elapsedTime,
  survived: gameState.survivedGame
});
```

### 9. Performance Monitoring

```javascript
// Add performance tracking
const Performance = {
  marks: {},
  
  start(label) {
    this.marks[label] = performance.now();
  },
  
  end(label) {
    if (!this.marks[label]) return;
    const duration = performance.now() - this.marks[label];
    
    // Send to monitoring service
    this.report(label, duration);
    delete this.marks[label];
  },
  
  report(label, duration) {
    // Report to platform
    sendGameEvent('PERFORMANCE_METRIC', {
      metric: label,
      duration: duration,
      fps: this.getCurrentFPS()
    });
  }
};
```

### 10. Error Handling & Recovery

```javascript
// Global error handler for games
window.addEventListener('error', (event) => {
  console.error('Game Error:', event.error);
  
  // Report to platform
  sendGameEvent('GAME_ERROR', {
    message: event.error.message,
    stack: event.error.stack,
    game: getCurrentGame()
  });
  
  // Attempt recovery
  if (gameState && gameState.isRunning) {
    showErrorMessage('Oops! Something went wrong. Resuming game...');
    // Save current state
    saveGameState();
  }
});

// Save/restore game state
function saveGameState() {
  localStorage.setItem('gameState_' + getCurrentGame(), 
    JSON.stringify(gameState)
  );
}

function restoreGameState() {
  const saved = localStorage.getItem('gameState_' + getCurrentGame());
  if (saved) {
    gameState = JSON.parse(saved);
    resumeGame();
  }
}
```

## Testing Checklist

- [ ] Games load correctly in iframe
- [ ] PostMessage communication works
- [ ] Scores are submitted correctly
- [ ] BITS collection is tracked
- [ ] Audio works with autoplay policies
- [ ] Touch controls function on mobile
- [ ] Performance is acceptable (60fps)
- [ ] Error recovery works
- [ ] Analytics events fire correctly
- [ ] Security measures prevent tampering

## Contact
For technical questions about integration, refer to the game source code. All integration points are marked with comments for easy identification.