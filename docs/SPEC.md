# New Year Timer — Product Specification

## Goal
A simple web app that shows a countdown to the next New Year and automatically switches to a celebration screen at midnight.

## MVP Features
- Countdown to next New Year based on local device time
- Final 12‑second countdown state
- Celebration screen at midnight
- Playback of a default video
- Toggle sound on/off
- Save preferences in localStorage

## Not in MVP
- Accounts
- Cloud sync
- Uploading user videos
- Backend database
- Mobile apps

## User Flow
1. User opens the app
2. Countdown is displayed
3. Final 12 seconds show special countdown
4. At midnight the celebration screen appears
5. Video plays automatically

## Acceptance Criteria
- Countdown updates every second
- Final countdown triggers at T‑12 seconds
- Celebration screen triggers at midnight
- Selected preferences persist after reload