// DUSA Arcade Embed Wrapper
// Allows games to be embedded in external sites with proper sizing and communication

(function() {
    'use strict';
    
    // Check if running in iframe
    const isEmbedded = window.self !== window.top;
    
    // DUSA Embed API
    window.DUSAEmbed = {
        // Send score updates to parent
        updateScore: function(score) {
            if (isEmbedded) {
                window.parent.postMessage({
                    type: 'dusa-score-update',
                    game: window.DUSA_GAME_ID || 'unknown',
                    score: score
                }, '*');
            }
        },
        
        // Send game state updates
        updateState: function(state) {
            if (isEmbedded) {
                window.parent.postMessage({
                    type: 'dusa-state-update',
                    game: window.DUSA_GAME_ID || 'unknown',
                    state: state
                }, '*');
            }
        },
        
        // Handle resize for responsive embedding
        notifyResize: function() {
            if (isEmbedded) {
                const height = document.body.scrollHeight;
                window.parent.postMessage({
                    type: 'dusa-resize',
                    game: window.DUSA_GAME_ID || 'unknown',
                    height: height
                }, '*');
            }
        },
        
        // Listen for commands from parent
        listen: function(callback) {
            window.addEventListener('message', function(event) {
                if (event.data && event.data.type && event.data.type.startsWith('dusa-command-')) {
                    callback(event.data);
                }
            });
        }
    };
    
    // Auto-resize on load and window resize
    if (isEmbedded) {
        window.addEventListener('load', DUSAEmbed.notifyResize);
        window.addEventListener('resize', DUSAEmbed.notifyResize);
        
        // Add embed mode class for styling
        document.body.classList.add('dusa-embedded');
    }
})();