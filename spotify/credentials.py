import os

# Make these environment variables
# CLIENT_ID = "47f66365f08e475b90d6ef6c09f94d1e"
# CLIENT_SECRET = "3b6d5a2c354d4f8a8e4c18e3c85b3411"
# REDIRECT_URI = "http://127.0.0.1:8000/spotify/redirect"


CLIENT_ID = os.environ.get("SPOTIFY_CLIENT_ID")
CLIENT_SECRET = os.environ.get("SPOTIFY_CLIENT_SECRET")
REDIRECT_URI = "http://127.0.0.1:8000/spotify/redirect"