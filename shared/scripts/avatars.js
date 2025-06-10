// DUSA Arcade Avatar System
// Centralized avatar configuration for all games

(function() {
    'use strict';
    
    // Avatar paths relative to game folder (assumes games are in games/[game-name]/)
    const AVATAR_BASE_PATH = '../../shared/assets/avatars/';
    
    // Blue DUSA avatars for player/hero
    const BLUE_DUSA_AVATARS = [
        'R9Ic6wUZ01AFhvd6eHz3y_e0985cf7119141f3ac602fc1bb3fd792.png',
        '61d1ce9f0018404786df67d4077b10ef.png',
        'f4620d83a9c64c96ae42c837e05aee88.png',
        '9283026c9a63406f8cc578dfdc754ed9.png',
        'f42f5cf602d946069dab6d9413f8f064.png',
        '48adb8190d52445fbce2830bf9ceb316.png',
        '03ac9e3e9d094cf596d178ec94098b90.png'
    ];
    
    // Green DUSA avatars for rival/AI
    const GREEN_DUSA_AVATARS = [
        'green-dusa-1.png',
        'green-dusa-2.png',
        'green-dusa-3.png',
        'green-dusa-4.png',
        'green-dusa-5.png',
        'green-dusa-6.png',
        'green-dusa-7.png'
    ];
    
    // DUSA Avatar API
    window.DUSAAvatars = {
        // Get player avatars with full paths
        getPlayerAvatars: function() {
            return BLUE_DUSA_AVATARS.map(avatar => AVATAR_BASE_PATH + 'blue-dusa/' + avatar);
        },
        
        // Get rival avatars with full paths
        getRivalAvatars: function() {
            return GREEN_DUSA_AVATARS.map(avatar => AVATAR_BASE_PATH + 'green-dusa/' + avatar);
        },
        
        // Get avatar based on score/progression
        getAvatarIndex: function(score, interval = 8) {
            return Math.min(Math.floor(score / interval), 6);
        },
        
        // Preload all avatars
        preloadAvatars: function(callback) {
            const allAvatars = [...this.getPlayerAvatars(), ...this.getRivalAvatars()];
            let loaded = 0;
            
            allAvatars.forEach(src => {
                const img = new Image();
                img.onload = () => {
                    loaded++;
                    if (loaded === allAvatars.length && callback) {
                        callback();
                    }
                };
                img.src = src;
            });
        },
        
        // Celebrate avatar change
        celebrateAvatarChange: function(element, isPlayer = true) {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'celebrate 0.5s ease';
            }, 10);
            
            // Different celebration sounds for player vs rival
            if (window.playSound) {
                if (isPlayer) {
                    window.playSound(1320, 0.3);
                } else {
                    window.playSound(880, 0.3);
                }
            }
        },
        
        // Avatar metadata
        metadata: {
            milestones: [0, 8, 16, 32, 64, 128, 256],
            descriptions: {
                blue: [
                    "Novice Water Warrior",
                    "Apprentice Tide Caller",
                    "Journeyman Wave Rider",
                    "Master Splash Guard",
                    "Elite Ocean Knight",
                    "Legendary Sea Champion",
                    "Ultimate Aqua Deity"
                ],
                green: [
                    "Snake Initiate",
                    "Venom Apprentice",
                    "Scale Warrior",
                    "Serpent Master",
                    "Cobra Elite",
                    "Python Legend",
                    "Dragon Ascendant"
                ]
            }
        }
    };
})();