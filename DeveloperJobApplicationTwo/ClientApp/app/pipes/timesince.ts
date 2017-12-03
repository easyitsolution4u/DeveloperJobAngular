import { Pipe, PipeTransform } from '@angular/core';
@Pipe({

    name: 'timesince'
})
export class TimeSince implements PipeTransform {
   
    transform(createdDate: Date) {
        let timeSinceCalculator: TimeSinceCalculator = new TimeSinceCalculator();
        return timeSinceCalculator.getTimeSince(createdDate);
        
    }
}


 class TimeSinceCalculator {


    private totalSecondsInAYear: number = 31536000;
    private totalSecondsInMonth: number = 2592000;
    private totalSecondsInADay: number = 86400;
    private totalSecondsInAHour: number = 3600;

    private getDifferenceFromTodayInSeconds(inputDate: Date): number {

        let inputDayInSeconds: number = Math.floor( new Date(inputDate).getTime() / 1000);
        let todaysDateInSecond: number = Math.floor( new Date().getTime() / 1000);

        var elapsedDateInSeconds = todaysDateInSecond - inputDayInSeconds;
       
        console.log(" Elapsed time is : " + elapsedDateInSeconds);
        return Math.floor(elapsedDateInSeconds);

    }
    getTimeSince(date: Date): string {

        let interval: number;
        let seconds = this.getDifferenceFromTodayInSeconds(date);
        interval = Math.floor(seconds / this.totalSecondsInAYear);
        if (interval > 1) {
            return interval + " years ago";
        }
        interval = Math.floor(seconds / this.totalSecondsInMonth);
        if (interval > 1) {
            return interval + " months ago";
        }
        interval = Math.floor(seconds / this.totalSecondsInADay);
        if (interval > 1) {
            return interval + " days ago";
        }
        interval = Math.floor(seconds / this.totalSecondsInAHour);
        if (interval > 1) {
            return interval + " hours ago";
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " minutes ago";
        }
        return Math.floor(seconds) + " seconds ago";
    }
}