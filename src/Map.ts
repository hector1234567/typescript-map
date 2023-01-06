export interface Mappable {
    position: {
        lat: number;
        lng: number
    }
    getInfo() : string;
}

export class Map {
    map: google.maps.Map;
    
    constructor(div: HTMLElement) {
        this.map = new google.maps.Map(div, {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        })
    }

    addMark(mappable: Mappable) {
        const marker = new google.maps.Marker({
            map: this.map,
            position: {
                lat: mappable.position.lat,
                lng: mappable.position.lng
            }
        });

        marker.addListener('click', () => {
            const info = new google.maps.InfoWindow({
                content: mappable.getInfo()
            })

            info.open(this.map, marker);
        })
    }
}