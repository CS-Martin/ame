# AME
Ame is a Laravel web app for streaming anime and reading manga.

## Features
- [ ] Download songs from playlists, albums, or artists. 
- [ ] Download whole playlists, albums, or artist's songs in one click.
- [ ] Search for songs, albums, and playlists
- [ ] View popular playlists from Spotify

## Usage
Copy the .env.sample to .env and plug in the Spotify ID and secret
```
cd /spotify-downloader-web-app
docker compose build && docker compose up -d
```

### *Frontend Team:*
- [**Martin Edgar Atole**](https://github.com/CS-Martin) (Lead)
- [**Noel Emaas**](https://github.com/NoelEmaas)

### *Backend Team:*
- [**Albert Perez**](https://github.com/bibookss) (Lead)
- [**Jiankarlo Belarmino**]

---

## *Conventions*
1. *Github*
    - Commits:
        
        git commit -m [action]: [description]
        
        - Action:
            | Option | Information |
            | :---: | :--- |
            | feat        | New feature for the user, not a new feature for build script.         |
            | fix         | Bug fix for the user, not a fix to a build script.                    |
            | docs        | Changes to the documentation.                                         |
            | style       | Formatting, missing semi colons, etc; no production code change       |
            | refactor    | Refactoring production code, eg. renaming a variable                  |
            | test        | Adding missing tests, refactoring tests; no production code change    |
            | chore       | Updating grunt tasks etc; no production code change.                  |
            
    - Branching:
        
            git branch '[layer]/[description]' '[commit-hash]'
            --- or ---
            git checkout -b '[layer]/[description]' '[commit-hash]'
        
        - Layer:
            - frontend - A branch that concerns the frontend (*presentation layer*) of the project.
            - backend - A branch that concerns the backend (*data access layer*) of the project.
        - Description:
            - Options: feature, description, or bugfix.
        - Commit Hash (Optional):
            - Create a branch of [layer]/[description] from a previous commit using the [commit-hash].
---
