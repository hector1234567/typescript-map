export class Map {
    map: google.maps.Map;
    
    constructor(div: HTMLElement) {
        this.map = new google.maps.Map(div, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }
}