export class ArtistDetails {

    artist: string

    canLoad(params) {
        if (params.id == 1) {
            this.artist = "The Beatles"
        } else if (params.id == 2) {
            this.artist = "The Rolling Stones"
        }
        return true;
    }
}
