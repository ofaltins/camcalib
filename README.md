# Calibration tool for camera

npm install
npm run start

## Usage (local env)
Point browser to: http://localhost:3000
Update calibration image: curl http:/localhost:3000/setframe?frame=frame_id

frame_id:
60 > frame_id <= 0
2-digit int with leading zero, e.g.: 01