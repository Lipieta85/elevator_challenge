{
    init: function(elevators, floors) {

        elevators.forEach(function (elevator) {

            elevator.on("floor_button_pressed", function (floorNum) {
                elevator.goToFloor(floorNum);
            })

            //WITH THIS WORKS ON 8 AND 9 LEVEL
            /*floors.forEach(function (floor, floorNum) {
                floor.on("up_button_pressed", function () {

                    elevator.goToFloor(floorNum)

                })
                floor.on("down_button_pressed", function () {
                    // Maybe tell an elevator to go to this floor?
                    elevator.goToFloor(floorNum)

                })
            })*/

            elevator.on("stopped_at_floor", function (floorNum) {
                if (this.destinationQueue.indexOf(floorNum) >= 0) {
                    this.destinationQueue.splice(this.destinationQueue.indexOf(floorNum), 1);
                    this.checkDestinationQueue();
                }
            });

        })
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}