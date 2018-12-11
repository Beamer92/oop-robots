const shortid = require('shortid')

class Robot {
    constructor(desc = null) {
        this._id = shortid.generate()
        this._description = desc
        this.type = 'Android'
        this.hasEmergencyShutoff = false
        this.bluetooth5 = true
        this.skyNetIncluded = true
        this._network = []
    }
    get id () {
        return this._id
    }

    set id (val) {
        throw new Error('Ya\'ll can\'t be settin\' that nonsense, mm\'kay?')
    }

    get description(){
        return this._description
    }

    set description(val){
        if(!val) throw new Error('What in sam hill are you doin\', not puttin\' a description in there! Shameful!')
        this._description = val
        
    }

    get network() {
        let networkList  = this._network.join(',')
        return networkList

    }

    set network(val) {
        throw new Error('Now listen here, see, you can\'t just be goin around sayin\' you know people that you don\'t know. Like a liar, or an Instagram \"model\"')
    }

    meet (otherRobot) {
        if(!(otherRobot instanceof Robot)) throw new Error('Oh my stars and garters just what in the world do you think yer doin\'? That ain\'t no Robot!')
        this._network.push(otherRobot.id)
    }
    
}



module.exports = Robot
