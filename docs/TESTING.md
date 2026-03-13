# New Year Timer — Testing Strategy

## Goals
Ensure countdown, transitions, and celebration flow work correctly.

## Manual Tests
- Countdown visible and updating
- Sound toggle works
- Video loads
- Celebration screen appears

## Automated Tests
Playwright tests will cover:
- App loads successfully
- Countdown UI appears
- Preferences persist
- State transitions occur

## Edge Cases
- Reload during countdown
- Browser tab inactive
- Media playback blocked
- Invalid localStorage data