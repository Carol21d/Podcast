import axios from "axios";
import {ref } from 'vue';

export default class ApiPodcast{
    podcast;

    constructor(){
        this.podcast = ref([]);

    }

    getPodcast(){
        return this.podcast.value;
    }

    async fetchAllPodcast(){
        try{
            await axios.get("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
            .then((res) => {
                this.podcast.value = res.data.feed.entry;
                console.log(podcast);
            })
        }
        catch(error){
            
        }
    }

    
}